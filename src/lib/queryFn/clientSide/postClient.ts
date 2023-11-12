import { SuccessResponse } from '@/types/SuccessResponse';
import axios, { AxiosRequestConfig } from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

type PostClientProps<U> = {
  route: string;
  body: U;
  token: string;
};

type PostClientRes<T> = SuccessResponse<T>;

export async function postClient<T, U>({
  route,
  body,
  token,
}: PostClientProps<U>) {
  const res = await axios.post<PostClientRes<T>>(
    `${baseUrl}/api/${route}`,
    {
      ...body,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return res;
}
