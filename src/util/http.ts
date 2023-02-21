import axios, { AxiosRequestConfig } from 'axios'

const timeout = 90000

const axiosConfig: AxiosRequestConfig = {
  timeout,
}

const http = axios.create(axiosConfig)

export default http
