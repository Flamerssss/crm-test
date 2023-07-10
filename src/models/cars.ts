export default interface Car {
  id: string; //string
  author_user_id: string; //author_user_id
  company_id: string; //company_id
  created_at: number; // created_at
  car_brand: string; // avto_brand
  car_brand_image: string; // car_brand_image
  car_brand_number: string; // car_brand_number
  car_model: string; // avto_Model
  car_model_full: string; // `${dataDoc?.avto_brand} ${dataDoc?.avto_Modelname}`,
  category: []; // avto_categoriy_avalue
  category_id: []; // avto_categoriy_avalue
  car_tariff_name: string; // tariff_name
  car_tariff_id: string; // tariff_id
  car_comment: string;
  car_license_plate: string; // avto_gosnomer
  car_year_issue: number; // avto_god_vypuska
  car_color: string; // avto_color
  car_color_label: string; // avto_colorlabel
  car_textColor: string; // textColor
  car_owner: string; // avto_sobstvennik
  car_owner_id: string;
  car_fleet_id: string; // avto_fleet_id
  car_data_start_job: string; // avto_data_start_job
  car_data_end_job: string; // avto_data_end_job
  car_status: string; // avto_status_value
  car_mileage: number; // avto_odo
  car_image: string; // avto_image
  car_avtofon_id: string; // avto_avtofon_id
  car_wialon_id: string; // mapid
  car_drivematics_id: string;
  mapid: string;
  car_vin: string; //avto_vin
  car_body_number: string; //avto_number_cuzov
  car_engine_number: string; //avto_number_engine
  car_engine_volume: number; //avto_obem
  car_engine_power: number; //avto_moshchnost
  car_engine_type: string; //avto_type_engine
  car_drive_unit: string; //avto_privod
  car_fuel_type: string; //avto_type_fuel
  car_gearbox_type: string; //avto_type_kpp
  car_russia_pts_series_number: string; //avto_pts_seriya_nomer
  car_russia_pts_issued_by: string; //avto_pts_kem_vidan
  car_russia_pts_date_issue: number; //avto_pts_data_vidachi
  car_russia_sts_series_number: string; //avto_sts_seriya_nomer
  car_russia_sts_issued_by: string; //avto_sts_kem_vidan
  car_russia_sts_date_issue: number; //avto_sts_data_vidachi
  car_russia_osago_number: string; //avto_osago_nomer_polisa
  car_russia_osago_insurance_company: string; //avto_osago_strahov_company
  car_russia_osago_start: string; //avto_osago_start
  car_russia_osago_end: string; //avto_osago_end
  car_russia_kasko_number: string; //avto_kasko_nomer_polisa
  car_russia_kasko_insurance_company: string; //avto_kasko_strahov_company
  car_russia_kasko_start: string; //avto_kasko_start
  car_russia_kasko_end: string; //avto_kasko_end
  car_image_title: string; //imagetitle
  car_isActiveInApp: boolean; //boolean; //isActiveInApp
  car_seat_value: number; //avto_seat_value
  car_razgon: string; //avto_razgon
  car_description: string; //avto_description
  car_video_id: string; //avto_video_id
  car_price1_title: string; //price1_title
  car_price1: number; //price1
  car_price2_title: string; //price2_title
  car_price2: number; //price2
  car_price3_title: string; //price3_title
  car_price3: number; //price3
  car_price4_title: string; //price4_title
  car_price4: number; //price4
  car_price5_title: string; //price5_title
  car_price5: number; //price5
  car_price6_title: string; //price6_title
  car_price6: number; //price6
  car_image_Insurance: string; //imageInsurance
  car_images: string[]; //image
  car_fuel_level: number; //avto_fuellevel
  car_rating_body: string; //avto_rating_kuzov
  car_rating_interior: string; //avto_rating_salon
  vehicle_license_number: string;
  vehicle_license_reg_date: string;
  vehicle_license_exp_date: string;
  car_insurance_number: string;
  car_insurance_company: string;
  car_insurance_start: string;
  car_insurance_end: string;
  car_mileage_per_day: number;
  car_overrun_price: number[];
  [key: string]: any;
}
