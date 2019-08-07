export interface Users {
  _id: string;
  firstname: string;
  lastname: string;
  phonenumber: string;
  email: string;
  __v: number;
  password?: string;
}

export interface RespData {
  resultCode: number;
  data: Users[];
  rowCount: number;
}
