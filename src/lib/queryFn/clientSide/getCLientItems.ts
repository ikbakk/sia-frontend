import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

export async function getClientItems<T>(route: string, token: string) {
  const res = await axios.get<T>(`${baseUrl}/api/${route}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
}
