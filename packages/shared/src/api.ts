import axios, { AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
  timeout: 10000,
});

export async function get<T = any>(url: string, params?: any): Promise<T> {
  const res = await client.get<T>(url, { params });
  return res.data;
}

export async function post<T = any>(url: string, data?: any): Promise<T> {
  const res = await client.post<T>(url, data);
  return res.data;
}

export async function put<T = any>(url: string, data?: any): Promise<T> {
  const res = await client.put<T>(url, data);
  return res.data;
}

export async function del<T = any>(url: string): Promise<T> {
  const res = await client.delete<T>(url);
  return res.data;
}

export default {
  get,
  post,
  put,
  del,
};
