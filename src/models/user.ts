export interface User {
  id: string;
  company_id: string;
  staff_fullName: string;
  staff_email: string;
  staff_role: string;
  superuser: boolean;
  avatar: string;
  [key: string]: any;
}
