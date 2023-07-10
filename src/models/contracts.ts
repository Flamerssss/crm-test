export interface Contract {
  id: string; //string
  author_user_id: string; //author_user_id
  company_id: string; //company_id
  created_at: number; // created_at
  update_at: number;
  contract_number: string;
  contract_status_for_car: string;
  contract_status: string;
  car_damages_array: string[],
  car_id: string;
  client_id: string;
  client_uid: string;
  color: string;
  contract_total: number;
  contract_comment: string;
  contract_car_status: string;
  contract_balance: number;
  contract_car: string;
  contract_car_fleet_id: string;
  contract_car_license_plate: string;
  contract_car_image: string;
  contract_client_phone: string;
  contract_client: string;
  contract_dopUslugiSumma: string;
  contract_end_date: number;
  contract_end_time: number;
  contract_fuel_difference: number;
  contract_fuel_end: number;
  contract_fuel_start: number;
  contract_inCar: string;
  contract_outCar: string;
  contract_total_paid: number;
  contract_payment_type: string;
  contract_mileage_start: number;
  contract_overrun_amount: number;
  contract_staff: string;
  contract_staff_id: string;
  contract_start_date: number;
  contract_start_time: number;
  contract_tariff: number;
  contract_term: number;
  oneDayPrice: number;
  staff_id: string;
  tariff_id: string;
  textColor: string;
  isNew: boolean;
  address_delivery: string;
  address_return: string;
  isActiveRent: boolean;
  dogovor_rent: string;
  akt_pp: string;
  isPaid: boolean;
  contract_payment_method: {};
  deposit_payment_method: {};
  contract_payment_success: boolean;
  deposit_payment_success: boolean;
  coffee: boolean;
  coldWater: boolean;
  fastPlease: boolean;
  isSuccessSignDogovor: boolean;
  isSuccessSignAKTPP: boolean;
  isSuccessSignAKTVOZVRAT: boolean;
  isReadyToDelivery: boolean;
  isSuccessDelivery: boolean;
  isCustomerHasTheCar: boolean;
  isSuccessfulTransfer: boolean;
  signDocumentUrlDogovor: string;
  signDocumentUrlAKTPP: string;
  signDocumentUrlAKTVOZVRAT: string;
  url_contract_file_pdf: string;
  doc_file_name: string;
  url_act_pp_file_pdf: string;
  aktPP_file_name: string;
  url_act_vozvrat_file_pdf: string;
  akt_vozvrat_file_name: string;
  [key: string]: any;
}
