import { makeAutoObservable, observable, autorun } from "mobx";
import { postData, fetchCountries, fetchDataCompanyId, fetchDataOneParam } from '@/utils/db_service_dev';
import companyStore from './company_store';
class SystemStore {
    @observable cars = [];

    @observable web_notifications: Array<any>;

    @observable test = [];


    constructor() {
        makeAutoObservable(this);
    }

    addFiles(imageObj) {
        const initData = {
            'location': null,
            's3_location': imageObj['s3'],
            'created_at': new Date(),
            'updated_at': new Date(),
            'type': 'type',
            'name': imageObj['name'],
            'extension': imageObj['extension'],
            'mimetype': imageObj['mimetype'],
            'checksum': null,
            'meta': [],
            'size': Number(imageObj['size']),
            'encryption': null,
            'encrypted': false,
            'purgable': false,
            'checked': false,
        }
        postData("/files/add/", initData)
            .then((data) => {
                // this.cars = data.data;
                console.log('STORE', data)
            });
    };

    getUserWhereFrom = async () => {
        fetchCountries()
            .then((data) => {
                this.test = data.data.rows
            });
    };

    getWebNotifications = async () => {
        fetchDataCompanyId('/company/web/notifications/')
            .then((data) => {
                this.web_notifications = data.data.sort((a, b) => a.created_at > b.created_at ? -1 : 1)
            });
    };

    updateWebNotificationsStatus = (id: string, status: string) => {
        fetchDataOneParam('/company/web/notifications/update/status/' + id + '/' + status)
            .then((data) => {
                this.getWebNotifications()
                console.log('data', data)
            });
    };
}

autorun(() => {
    if (companyStore.companyId) {
        if (!systemStore.web_notifications) {
            systemStore.getWebNotifications()
        }
    }
})

const systemStore = new SystemStore();
export default systemStore;