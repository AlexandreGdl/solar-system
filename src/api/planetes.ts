import { apiClient } from '../constants';

export const getPlanetes = (): Promise<ApiResponse<Planet>> =>
  apiClient
    .getInstance()
    .request<ApiResponse<Planet>>('get', 'bodies?filter[]=isPlanet,eq,true');
