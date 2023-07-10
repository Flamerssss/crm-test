export interface PhotoRew {
  id: string;
  author_user_id: string;
  company_id: string;
  created_at: number;
  isPhotoRew: boolean;
  photoRew_contract_id: string;
  photoRew_images: string[];
  photoRew_car: string;
  photoRew_car_id: string;
  photoRew_client: string;
  photoRew_client_id: string;
  photoRew_contract: string;
  photoRew_data: number;
  photoRew_mileage: number;
  photoRew_video: string;
  [key: string]: any;
}
