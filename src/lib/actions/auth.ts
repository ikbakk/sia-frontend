'use server';

export const signIn = async (formData: FormData) => {
  const data = {
    nim: formData.get('nim'),
    password: formData.get('password'),
  };

  const response = await fetch(
    `${process.env.BASEURL}/api/auth/students/signin`,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.json;
};
