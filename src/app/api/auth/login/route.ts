import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const cookieJar = cookies();
  const body = await req.json();

  const res = await fetch(`${process.env.BASEURL}/api/auth/students/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    credentials: 'include',
  });
  const token = res.headers.get('set-cookie')?.split(';')[0].split('=')[1];
  cookieJar.set('token', token!);

  return NextResponse.json({
    success: true,
  });
}
