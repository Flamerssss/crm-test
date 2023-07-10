import { makeAutoObservable, observable, action, autorun } from "mobx";
import { fetchData, deleteData, fetchWithoutParam, uploadOnePhoto, fetchWhere, fetchCarsBrands, fetchCarsModels, fetchCarsGenerations, fetchDataOneParam, postDataWithParam, fetchDataApi, postData_no_params } from '@/utils/db_service_dev';
import userStore from './user_store';
import companyStore from './company_store';
import systemStore from './system_store';
import type Car from '@/models/cars';
import contractsStore from './contracts_store';


interface CarsBrands {
    name?: string;
    id?: string;
}

interface CarsModels {
    name?: string;
    id?: string;
}

class CarStore {
    @observable cars: Array<Car>;
    @observable uniqueCars: Array<Car>;
    //@ts-ignore
    @observable car: Car = {};
    @observable category = [];
    @observable statuses = [];
    @observable submitting = false;
    @observable car_upload_images = [];


    @observable brands: Array<CarsBrands>;
    @observable select_brand: CarsBrands = {};

    @observable models: Array<CarsModels>;
    @observable select_model: CarsModels = {};

    @observable generations: Array<any>;
    @observable select_generation: object;

    @observable documents_to_cars: Array<any>;
    @observable documents: Array<any>;
    @observable car_vehicle_license: object;


    @observable form_templates: Array<any>;
    @observable monitoring_cars: Array<any>;
    @observable monitoringCar: any = {};


    @observable car_trips: Array<any>;
    @observable car_photoRew: Array<any>;

    constructor() {
        makeAutoObservable(this);
    }


    @action
    setCar = (field, value) => {
        this.car[field] = value;
    };

    fetchCars = async () => {
        fetchData("/cars/")
            .then((data) => {
                this.cars = data.data;
                this.removeDuplicates(data.data);
            });
    };

    @action
    fetchOneCar = async (id: String) => {
        fetchWhere("/cars/one/", id)
            .then((data) => {
                this.car = data.data;
                console.log('STORE ONE CAR', this.car)
                contractsStore.success_load_car = true;
            });
    };


    fetchCarTrips = async (id: String) => {
        fetchDataOneParam("/trips/all/cars/" + id)
            .then((data) => {
                this.car_trips = data.data;
            });
    };

    fetchCarPhotoRew = async (id: String) => {
        fetchDataOneParam("/photoinspections/car/" + id)
            .then((data) => {
                this.car_photoRew = data.data;
            });
    };

    fetchCategory = async () => {
        fetchData("/cars/category/")
            .then((data) => {
                this.category = data.data;
                console.log('STORE category', this.category)
            });
    };

    fetchStatuses = async () => {
        fetchWithoutParam("/cars/statuses")
            .then((data) => {
                this.statuses = data.data;
                console.log('STORE statuses', this.statuses)
            });
    };

    fetchBrands = async () => {
        fetchWithoutParam("/cars/brands")
            .then((data) => {
                this.brands = data.data;
                console.log('STORE brands', this.brands)
            });
    };


    deleteCar(id: String) {
        deleteData("/cars/delete/" + userStore.userId + '/' + id)
            .then(async (data) => {
                console.log('delete', data)
                await carStore.fetchCars();
            });
    };

    uploadTitlePhotoCar(file) {
        uploadOnePhoto(file)
            .then((data) => {
                const imgUrl = 'https://api.car-sense.du-dev.app/media/' + data.data['id'];
                systemStore.addFiles(data.data)
                this.setCar('car_image', imgUrl)

            });
    };

    uploadCarInsurancePhoto(file) {
        uploadOnePhoto(file)
            .then((data) => {
                const imgUrl = 'https://api.car-sense.du-dev.app/media/' + data.data['id'];
                systemStore.addFiles(data.data)
                this.setCar('car_image_Insurance', imgUrl)
                this.car.car_image_Insurance = imgUrl

            });
    };

    uploadCarImages(file) {
        uploadOnePhoto(file)
            .then((data) => {
                const imgUrl = 'https://api.car-sense.du-dev.app/media/' + data.data['id'];
                this.car_upload_images.push(imgUrl)
                systemStore.addFiles(data.data)
                console.log('car_upload_images', this.car_upload_images)
                this.car.car_images = this.car_upload_images
            });
    };


    handleErrors = (response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    };

    getBrands() {
        fetchCarsBrands()
            .then((data) => {
                this.brands = data;
                console.log('STORE getBrands', data)
            });
    };

    getModels() {
        fetchCarsModels(this.select_brand?.id ?? 'AC')
            .then((data) => {
                this.models = data;
                console.log('STORE getModels', data)
            });
    };

    getBrandsInEdit() {
        fetchCarsBrands()
            .then((data) => {
                this.brands = data;
                this.select_brand = this.car.car_brand_id
                console.log('STORE this.select_brand', this.select_brand)
            });
    };


    getModelsInEdit = async () => {
        fetchCarsModels(this.select_brand?.id ?? 'AC')
            .then((data) => {
                this.models = data.data;
                this.select_model = this.car.car_model_id
                console.log('STORE this.select_model', this.select_model)
            });
    };

    getGenerations() {
        fetchCarsGenerations(this.select_brand?.id ?? 'AC', this.select_model?.id ?? '100')
            .then((data) => {
                this.generations = data;
                console.log('STORE getGenerations', data)
            });
    };


    getFormTemplates() {
        fetchDataOneParam('/forms/templates/')
            .then((data) => {
                this.form_templates = data.data;
                console.log('STORE form_templates', data.data)
            });
    };

    @action
    addNewCar() {
        postDataWithParam("/cars/add/", this.car)
            .then(async (data) => {
                data.data != null && this.setCar('id', data.data)
                console.log('STORE this.cars', this.car)
                console.log('STORE this.car ID', data.data)
            });
    };


    removeDuplicates(cars) {
        const uniqueCars = {};
        const result = [];
        for (const car of cars) {
            if (!uniqueCars[car.car_model_full]) {
                result.push(car);
                uniqueCars[car.car_model_full] = true;
            }
        }
        this.uniqueCars = result

    }

    getMonitoringCars() {
        fetchDataApi("/wialon/items/all/vroom_club",)
            .then(async (data) => {
                this.monitoring_cars = data.data.items;
                console.log('STORE this.monitoring_cars', this.monitoring_cars)
            });
    };

    @action
    async addNewCar_in_Monitoring() {
        try {
            const data = await postData_no_params("/monitoring/cars/create/", this.car);
            return data;
        } catch (error) {
            return error;
        }
    };

}

autorun(() => {
    if (companyStore.companyId) {
        if (!carStore.cars) {
            carStore.fetchCars()
            if (companyStore.company_profile['car_monitoring'] === true) {
                carStore.getMonitoringCars()
            }
        }
    }
})

const carStore = new CarStore();
export default carStore;