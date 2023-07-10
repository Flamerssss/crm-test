export interface NewAppUser {
    id: string; //string
    author_user_id: string; //author_user_id
    company_id: string; //company_id
    created_at: number; // created_at
    client_doc_id: string;
    docContractID: string;
    app_new_users_client_uid: string;
    app_new_users_car_id: string;
    app_new_users_car: string;
    app_new_users_number_of_day: string;
    app_new_users_rent_start_date: number;
    app_new_users_rent_start_time: number;
    app_new_users_rent_end_date: number;
    app_new_users_rent_end_time: number;
    app_new_users_need_delivery: string;
    app_new_users_address_delivery: string;
    app_new_users_address_return: string;
    app_new_users_total_price: string;
    app_new_users_client_fullname: string;
    app_new_users_client_surname: string;
    app_new_users_client_name: string;
    app_new_users_client_middleName: string;
    app_new_users_client_phone: string;
    app_new_users_comment: string;
    app_new_users_where: string;
    app_new_users_client_country: string;
    app_new_users_rent_status: string;
    app_new_users_time_end_validation: string;
    app_new_users_passport_photo_main: string;
    app_new_users_passport_photo_additional: string;
    app_new_users_driver_license_photo_main: string;
    app_new_users_driver_license_photo_additional: string;
    [key: string]: any;
}
