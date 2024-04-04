import { IUser } from "../dashboard/model/user";

export interface IEndpointResponse {
  page: number;
  per_page: number;
  total:  number;
  total_pages: number;
  data: any;
  support?: any;
}


