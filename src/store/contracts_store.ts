import { makeAutoObservable, observable, autorun, action } from "mobx";
import { fetchData, deleteData, fetchWhere, fetchDataOneParam } from '@/utils/db_service_dev';
import companyStore from './company_store';
// import tariffsStore from './tariffs_store';
import userStore from './user_store';
import type { Contract } from 'src/models/contracts';

class ContractsStore {
    @observable contracts: Array<Contract>;
    @observable contract_operations: any = [];
    //@ts-ignore
    @observable contract: Contract = {};
    @observable contract_operation: any = {};
    @observable diff_date: Number = 0;
    @observable success_load_car: boolean = false;
    @observable success_load_client: boolean = false;
    contractsStore: {};



    constructor() {
        console.log('INIT CONTRACT STORE')
        makeAutoObservable(this);
    }

    @action
    setField = (field, value) => {
        this.contract[field] = value;
    };

    @action
    setFieldOperations = (field, value) => {
        this.contract_operation[field] = value;
    };

    fetchContracts = async () => {
        fetchData("/contracts/")
            .then((data) => {
                this.contracts = data.data;
            });
    };

    geLastContractNumber = async () => {
        fetchData("/contracts/lastnumber/")
            .then((data) => {
                this.setField('contract_number', data.data)
            });
    };

    fetchOneContract = async (id: String) => {
        fetchWhere("/contracts/one/", id)
            .then((data) => {
                this.contract = data.data;
                console.log(' ONE CONTRACT ', data.data)
            });
    };

    fetchOneContractEdit = async (id: String) => {
        return fetchWhere("/contracts/one/", id)
            .then((data) => data.data);
    };

    deleteContracts(id: String) {
        deleteData("/contracts/delete/" + userStore.userId + '/' + id)
            .then(async (data) => {
                console.log('delete', data)
                await contractsStore.fetchContracts();
            });
    };

    getDiffTime(start_date, end_date) {
        fetchDataOneParam("/contracts/diff/" + start_date + '/' + end_date)
            .then((data) => {
                this.diff_date = data.data;
                this.setField('contract_term', data.data)
            });
    };

    async getTariffPrice() {
        // if (!this.contract?.tariff_id) return;
        // if (this.diff_date < 1) return;
        // if (!tariffsStore?.tariff) return;
        //@ts-ignore
        const durations = tariffsStore.tariff?.durations?.map((el) => el.tariff_do);
        let nearest_do_value = durations?.filter((el) => el >= this.diff_date)?.sort((a, b) => a - b)[0];
        if (!nearest_do_value) {
            nearest_do_value = durations?.sort((a, b) => a - b).pop();
        }
        //@ts-ignore
        const valid_tariff = tariffsStore.tariff?.durations?.find(
            (el) => el.tariff_do === nearest_do_value
        );
        if (!valid_tariff) return;
        const price = valid_tariff.price;
        //@ts-ignore day_price
        this.setField('contract_tariff', price * this.diff_date)
        this.setField('day_price', price)
    };

}
const contractsStore = new ContractsStore();

autorun(() => {
    if (companyStore.companyId) {
        if (!contractsStore.contracts) {
            contractsStore.fetchContracts()
        }
    }
})

// autorun(() => {
//     if (tariffsStore.tariff) {
//         contractsStore.getTariffPrice()
//     }
// })


export default contractsStore;