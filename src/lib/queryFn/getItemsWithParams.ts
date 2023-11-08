import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { cookiesCheck } from '../tokenHelper';

const baseUrl = process.env.BASEURL || process.env.NEXT_PUBLIC_BASEURL;

export async function getItemsWithParams<T>(
  route: string,
  params: AxiosRequestConfig['params'],
) {
  const token = cookiesCheck();
  const res = await axios.get<T>(`${baseUrl}/api/${route}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  });

  return res;
}
