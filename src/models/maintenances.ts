export interface Maintenance {
  id: string;
  author_user_id: string;
  company_id: string;
  created_at: number;
  maintenance_all_count: number;
  maintenance_data: number;
  maintenance_car: string;
  maintenance_car_id: string;
  maintenance_create_user: string;
  maintenance_provider: string;
  maintenance_provider_id: string;
  maintenance_damage_areaId: string;
  maintenance_damage_type: string;
  maintenance_damage_part_id: string;
  maintenance_job_type: string;
  maintenance_mileage: number;
  maintenance_status: string;
  maintenance_sum: number;
  maintenance_job_and_price: string;
  maintenance_job_price: number;
  maintenance_repairs_price: number;
  maintenance_result_diagnistic: string;
  [key: string]: any;
}
