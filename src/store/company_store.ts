import { makeAutoObservable, observable, autorun, action } from "mobx";
import { fetchDataOneParam, fetchCountries, fetchCities, postUpdateCompany, fetchCountry, fetchCity, fetchWhere } from '@/utils/db_service_dev';
import userStore from './user_store';
import type { Company } from '@/models/company';

class CompanyStore {
    //@ts-ignore
    @observable company: object;
    //@ts-ignore
    @observable company_profile: Company = {};
    @observable select_country: object;
    @observable companyId: String;
    @observable companyProfileId: String;
    @observable countries: Array<any>;
    @observable sities: Array<any>;
    @observable select_sity: object;
    @observable user_company_id: String;
    @observable staff: any = {};
    @observable permissions: any = [];
    @observable company_settings: any = { monitoring_provider: 'wialon' };

    constructor() {
        makeAutoObservable(this);
    }

    @action
    setCompany = (field, value) => {
        this.company_profile[field] = value;
    };

    @action
    setCompanySettings = (field, value) => {
        this.company_settings[field] = value;
    };

    fetchCompany = async () => {
        fetchDataOneParam("/companies/" + this.user_company_id)
            .then((data) => {
                this.company = data.data
                this.companyId = data.data['id'];
                this.companyProfileId = data.data['profile_id'];
            });
    };
    fetchCompanyProfiles = async () => {
        fetchDataOneParam("/companies/profile/" + this.companyProfileId)
            .then((data) => {
                this.company_profile = data.data
                this.getCountry(this.company['country_id'])
                this.getCity(this.company_profile['city_id'])
            });
    };

    getCountries = async () => {
        fetchCountries()
            .then((data) => {
                this.countries = data.data.rows
            });
    };

    getCountry = async (country) => {
        fetchCountry("/countries/one/", country)
            .then((data) => {
                this.select_country = data.data
                this.getCities(this.company_profile['country_id_out'])
            });
    };

    getCities = async (country) => {
        fetchCities(country)
            .then((data) => {
                console.log('select_sity', data)
                this.sities = data.data.rows
            });
    };

    getCity = async (city) => {
        fetchCity("/cities/one/", city)
            .then((data) => {
                this.select_sity = data.data

            });
    };

    updateCompany() {
        this.getCities(this.select_country['id'])
        postUpdateCompany("/companies/update/", this.company_profile, this.select_country, this.select_sity, this.company)
            .then((data) => {
                this.setCompany('profile_id', data.data)
            });
    };

    fetchOneStaff = async (id: String) => {
        fetchWhere("/staff/one/uid/", id)
            .then((data) => {
                this.user_company_id = data.data['staff']['company_id'];
                this.staff = data.data['staff'];
                this.permissions = data.data['permissions'];
                console.log('permissions', this.permissions.find(permission => permission.type === 'cars_rules')['can_add'])
            });
    };

}
const companyStore = new CompanyStore();

autorun(() => {
    if (userStore.userId) {
        companyStore.fetchOneStaff(userStore.userId)
    }
    if (companyStore.user_company_id) {
        if (!companyStore.company) {
            companyStore.fetchCompany()
        }
        if (companyStore.companyProfileId) {
            companyStore.fetchCompanyProfiles()
        }
    }
})


export default companyStore;