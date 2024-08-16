import axios, { AxiosRequestConfig } from 'axios'
import { IRequesterRepository } from './contracts'
import { injectable } from 'tsyringe'

@injectable()
export class RequesterRepository implements IRequesterRepository {
  async get<T>(url: string, param: string, config?: AxiosRequestConfig): Promise<T> {
    return axios.get<T>(url, { headers: { Authorization: 'Bearer' }, params: { param }, ...config }) as T
  }
}
