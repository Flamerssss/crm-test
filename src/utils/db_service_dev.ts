import companyStore from '../store/company_store';
import userStore from '../store/user_store';
import axios from 'axios';
// export const baseUrl = 'https://crm.du-dev.app'
export const baseUrl = 'https://cs-crm-bk-services-h5zcv.ondigitalocean.app'
// export const baseUrl = 'http://localhost:8080'
export const baseUrlApi = 'https://api.car-sense.du-dev.app'


export const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};
export async function fetchDataOneParam(url: String) {
    return fetch(baseUrl + url)
        .then(handleErrors)
        .then((response) => response.json())
        .catch((error) => console.error(error));
};

export async function fetchTripPayments(url: String) {
    console.log('URL', 'https://api.car-sense.du-dev.app' + url)
    return fetch('https://api.car-sense.du-dev.app' + url)
        .then(handleErrors)
        .then((response) => response.json())
        .catch((error) => console.error(error));
};

export async function fetchData(url: String) {
    return fetch(baseUrl + url + companyStore.companyId + '/' + userStore.userId)
        .then(handleErrors)
        .then((response) => response.json())
        .catch((error) => console.error(error));
};

export async function fetchDataApi(url: String) {
    return fetch(baseUrlApi + url)
        .then(handleErrors)
        .then((response) => response.json())
        .catch((error) => console.error(error));
};

export async function fetchDataCompanyId(url: String) {
    return fetch(baseUrl + url + companyStore.companyId)
        .then(handleErrors)
        .then((response) => response.json())
        .catch((error) => console.error(error));
};

export async function fetchWhere(url: String, id: String) {
    return fetch(baseUrl + url + userStore.userId + "/" + id)
        .then(handleErrors)
        .then((response) => response.json())
        .catch((error) => console.error(error));
};

export async function fetchWhereUserPhoto(url: String, id: String) {
    return fetch(baseUrl + url + companyStore.companyId + "/" + id)
        .then(handleErrors)
        .then((response) => response.json())
        .catch((error) => console.error(error));
};

export async function uploadOnePhoto(file) {
    const formData = new FormData();
    formData.append("file", file);
    try {
        const res = await axios.post("https://api.car-sense.du-dev.app/upload", formData);
        return res.data
    } catch (e) {
        console.error(e);
        return e
    }
};

export async function uploadOnePhotoClient(url: String, file) {
    console.log('url', url)
    const formData = new FormData();
    formData.append("file", file);
    try {
        const resUpload = await axios.post("https://api.car-sense.du-dev.app/upload", formData);

        return resUpload.data
    } catch (e) {
        console.error(e);
        return e
    }
};


export async function carActions(url: String, car_id: String) {
    try {
        const res = await axios.get(baseUrl + url + companyStore.companyProfileId + '/' + car_id);
        return res.data
    } catch (e) {
        console.error(e);
        return e
    }
};

export async function tripsActions(url: String) {
    try {
        const res = await axios.get(baseUrl + url);
        return res.data
    } catch (e) {
        console.error(e);
        return e
    }
};

export async function fetchWithoutParam(url: String) {
    return fetch(baseUrl + url)
        .then(handleErrors)
        .then((response) => response.json())
        .catch((error) => console.error(error));
};

export async function deleteData(url: String) {
    console.log('baseUrl + url', baseUrl + url)
    try {
        const res = await axios.delete(baseUrl + url);
        console.log('Item deleted successfully', res);
    } catch (err) {
        console.error('Error deleting item', err);
    }
};

export async function postData(url: String, data) {
    console.log('data', data)
    try {
        console.log('JSON.stringify(data)', JSON.stringify(data))
        const response = await fetch(baseUrl + url + userStore.userId, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log('result', result)
        return JSON.stringify(result);
    } catch (error) {
        console.log('error', error)
        return error.message;
    }
};

export async function postData_no_params(url: String, data) {
    console.log('data', data)
    try {
        console.log('JSON.stringify(data)', JSON.stringify(data))
        const response = await fetch(baseUrl + url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log('result', result)
        return JSON.stringify(result);
    } catch (error) {
        console.log('error', error)
        return error.message;
    }
};


export async function post_common_api_client(data) {
    console.log('data', data)
    try {
        console.log('JSON.stringify(data)', JSON.stringify(data))
        const response = await fetch('https://api.car-sense.du-dev.app/company/m/clients/update', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log('result', result)
        return JSON.stringify(result);
    } catch (error) {
        console.log('error', error)
        return error.message;
    }
};

export async function postClientDocument(url: String, client_id: String, data) {
    console.log('data', data)
    try {
        console.log('JSON.stringify(data)', JSON.stringify(data))
        const response = await fetch(baseUrl + url + companyStore.companyId + '/' + client_id, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log('result', result)
        return JSON.stringify(result);
    } catch (error) {
        console.log('error', error)
        return error.message;
    }
};

export async function postDataCompanyId(url: String, data) {
    console.log('data', data)
    try {
        console.log('JSON.stringify(data)', JSON.stringify(data))
        const response = await fetch(baseUrl + url + companyStore.companyId, {
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
        console.log('error', error)
        return error.message;
    }
};

export async function postDataWithParam(url: String, data) {
    console.log('data URL', baseUrl + url + companyStore.companyId + '/' + userStore.userId)
    try {
        const response = await fetch(baseUrl + url + companyStore.companyId + '/' + userStore.userId, {
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
        console.log('error', error)
        return error.message;
    }
};




export async function postUpdateCompany(url: String, companyProfileData, countryData, cityData, companyData) {
    console.log('companyData', companyData)
    const data = [
        companyProfileData,
        countryData,
        cityData,
        companyData
    ]
    try {
        const response = await fetch(baseUrl + url + companyStore.companyId, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log('result', result)
        return JSON.stringify(result);
    } catch (error) {
        return error.message;
    }
};

export async function fetchCountries() {
    return fetch('https://api.car-sense.du-dev.app/geo/countries/all?take=250')
        .then(handleErrors)
        .then((response) => response.json())
        .catch((error) => console.error(error));
};

export async function fetchCities(country) {
    return fetch('https://api.car-sense.du-dev.app/geo/cities/all?take=250&country=' + country)
        .then(handleErrors)
        .then((response) => response.json())
        .catch((error) => console.error(error));
};

export async function fetchCity(url, city) {
    return fetch(baseUrl + url + city)
        .then(handleErrors)
        .then((response) => response.json())
        .catch((error) => console.error(error));
};

export async function fetchCountry(url, country) {
    return fetch(baseUrl + url + country)
        .then(handleErrors)
        .then((response) => response.json())
        .catch((error) => console.error(error));
};




export async function fetchCarsBrands() {
    return fetch('https://cars-base.ru/api/cars')
        .then(handleErrors)
        .then((response) => response.json())
        .catch((error) => console.error(error));
};

export async function fetchCarsModels(modelID: String) {
    return fetch('https://cars-base.ru/api/cars/' + modelID)
        .then(handleErrors)
        .then((response) => response.json())
        .catch((error) => console.error(error));
};

export async function fetchCarsGenerations(modelID: String, generationID: String) {
    console.log('modelID', modelID)
    console.log('generationID', generationID)
    return fetch('https://cars-base.ru/api/cars/' + modelID + '/' + generationID + "?key=15c043ee7")
        .then(handleErrors)
        .then((response) => response.json())
        .catch((error) => console.error(error));
};


export async function fetchWhereTrip(id: String) {
    return fetch('https://api.car-sense.du-dev.app/company/m/rentals/details/' + id)
        .then(handleErrors)
        .then((response) => response.json())
        .catch((error) => console.error(error));
};


export async function postAddStaffRolesAndPermissoin(url: String, data) {
    try {
        const response = await fetch(baseUrl + url + companyStore.companyId + '/' + userStore.userId, {
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
        return error.message;
    }
};



////// ДЛЯ НОВЫХ ТАРИФОВ

export async function dataUpdate(url, data) {
    try {
        const res = await axios.post(baseUrlApi + url, data);
        return res.data
    } catch (e) {
        console.error(e);
        return e
    }
};