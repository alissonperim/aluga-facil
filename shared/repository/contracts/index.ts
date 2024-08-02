import { AxiosRequestConfig } from 'axios'

export interface IRequesterRepository {
  get<T>(url: string, param: string, config?: AxiosRequestConfig): Promise<T>
  // post<T>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<T>
  // list<T>(url: string, param?: string, query?: string, config?: AxiosRequestConfig): Promise<T[]>
  // put<T>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<T>
}
