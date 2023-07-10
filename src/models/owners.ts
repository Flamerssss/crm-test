export interface Owner {
  id: string;
  author_user_id: string;
  company_id: string;
  created_at: number;
  owner_fullname: string;
  owner_phone: string;
  owner_contactPerson: string;
  owner_requisites: string;
  owner_contract: string;
  owner_profit: string;
  owner_perMonth: string;
  owner_comment: string;
  [key: string]: any;
}
