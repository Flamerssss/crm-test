import { makeAutoObservable, observable, action, autorun } from "mobx";
import { fetchData, fetchWhereTrip, fetchTripPayments, fetchWhere, tripsActions, fetchDataOneParam, fetchDataApi } from '@/utils/db_service_dev';
import companyStore from './company_store';

class TripsStore {
    @observable trips: Array<any>;
    //@ts-ignore
    @observable trip_api: any = {};
    @observable trip: any = {};
    @observable trip_payments: any = [];
    @observable trip_logs: any = [];
    @observable carTrack: Array<any>;


    constructor() {
        makeAutoObservable(this);
    }

    @action
    setField = (field, value) => {
        this.trip[field] = value;
    };


    getTrips = async () => {
        fetchData('/trips/')
            .then((data) => {
                this.trips = data.data
            });
    };

    fetchTripId = async (id) => {
        fetchDataApi('/fetch/trips?id=' + id)
            .then((data) => {
                console.log('dell RESPONSE', data.data)
            });
    };

    @action
    fetchOneTripApi = async (id: String) => {
        fetchWhereTrip(id)
            .then((data) => {
                this.trip_api = data.data;
                console.log('trip_api', data.data)
            });
    };

    @action
    fetchOneTrip = async (id: String) => {
        fetchWhere("/trips/one/", id)
            .then((data) => {
                this.trip = data.data;
            });
    };


    @action
    fetchTripLogs = async (id: String) => {
        fetchDataOneParam("/trip/logs/" + id)
            .then((data) => {
                this.trip_logs = data.data;
                console.log('trip_logs', data.data)
            });
    };

    @action
    fetchTripPayments = async (trip_id: string) => {
        fetchTripPayments('/company/m/rentals/billings/' + trip_id)
            .then((data) => {
                if (data && data.data && data.data[0] && data.data[0].payments) {
                    this.trip_payments = data.data[0].payments;
                    console.log('this.trip_payments', this.trip_payments)
                } else {
                    console.log('trip_payments', data.data)
                }
            });
    };

    getCarTrack = async (carId: any, timeFrom: any, timeTo: any) => {
        tripsActions(`/monitoring/cars/track/${carId}/${timeFrom}/${timeTo}`)
            .then((data) => {
                this.carTrack = data.data;
            });
    };

    @action
    async tripStart(trip_id: string, car_id: String) {
        try {
            const data = await tripsActions("/trip/start/" + trip_id + '/' + car_id);
            return data.data;
        } catch (error) {
            return error;
        }
    };

    @action
    async tripStartPhotoInspections(trip_id: string) {
        try {
            const data = await tripsActions("/trip/inspection/" + trip_id);
            return data.data;
        } catch (error) {
            return error;
        }
    };

    @action
    async tripCancel(trip_id: string, car_id: String) {
        try {
            const data = await tripsActions("/trip/cancel/" + trip_id + '/' + car_id);
            return data.data;
        } catch (error) {
            return error;
        }
    };

    @action
    async tripEnd(trip_id: String, car_id: String) {
        try {
            const data = await tripsActions("/trip/end/" + trip_id + '/' + car_id);
            console.log('trips end', data)
            return data.data;
        } catch (error) {
            return error;
        }
    };

    @action
    async tripsCharge(trip_id: String) {
        const data = {
            'id': trip_id
        }
        try {
            // const res = await axios.post("https://api.car-sense.du-dev.app/rentals/trips/charge", {
            //     'id': trip_id
            // });
            // console.log('res.data', res)
            // return res
            const response = await fetch('https://api.car-sense.du-dev.app/rentals/trips/charge', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log('result', result)
            return result;
        } catch (error) {
            return error;
        }
    };
}


autorun(() => {
    if (companyStore.companyId) {
        if (companyStore.company_profile['type'] === 'carsharing') {
            if (!tripsStore.trips) {
                tripsStore.getTrips()
            }
        }
    }
})

const tripsStore = new TripsStore();
export default tripsStore;