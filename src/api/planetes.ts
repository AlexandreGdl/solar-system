import { apiClient } from '../constants';

// Fetch Global Planetes
export const getPlanetes = (): Promise<ApiResponse<Planet>> =>
  apiClient
    .getInstance()
    .request<ApiResponse<Planet>>('get', 'bodies?filter[]=isPlanet,eq,true');

// Search by name
export const getPlanetesByName = (
  search: string
): Promise<ApiResponse<Planet>> =>
  apiClient
    .getInstance()
    .request<ApiResponse<Planet>>(
      'get',
      `bodies?filter[]=isPlanet,eq,true&filter[]=name,cs,${search}`
    );
