import axios from 'axios';
import { cookiesCheck } from '../tokenHelper';

const baseUrl = process.env.BASEURL || process.env.NEXT_PUBLIC_BASEURL;

// export async function getItems<T>(route: string) {
//   const token = cookiesCheck();
//   const res = await axios.get<T>(`${baseUrl}/api/${route}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return res;
// }

export async function getItems(route: string) {
  const token = cookiesCheck();
  const res = await fetch(`${baseUrl}/api/${route}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    credentials: 'include',
  });

  return res;
}
