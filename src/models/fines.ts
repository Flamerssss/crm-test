export interface Fine {
  id: string; //string
  author_user_id: string; //author_user_id
  company_id: string; //company_id
  created_at: number; // created_at
  isNew: boolean;
  fine_client_id: string;
  fine_car: string;
  fine_car_license_plate: string;
  fine_client: string;
  fine_contract: string;
  fine_date: number;
  fine_time: number;
  fine_number: string;
  fine_photo: string;
  fine_place: string;
  fine_status: string;
  fine_type_of_violation: string;
  fine_summa: string;
  [key: string]: any;
}
