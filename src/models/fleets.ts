export interface Fleet {
  id: string;
  author_user_id: string;
  company_id: string;
  created_at: number;
  fleet_title: string;
  fleet_type: string;
  fleet_owner: string;
  fleet_owner_id: string;
  fleet_count: number;
  fleet_affiliation: string;
  fleet_affiliation_id: string;
  [key: string]: any;
}
