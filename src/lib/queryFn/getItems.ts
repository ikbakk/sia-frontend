import axios, { AxiosResponse } from 'axios';
import { cookiesCheck } from '../tokenHelper';

const baseUrl = process.env.BASEURL || process.env.NEXT_PUBLIC_BASEURL;

export async function getItems<T>(route: string) {
  const token = cookiesCheck();
  const res = await axios.get<T>(`${baseUrl}/api/${route}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
}
