export const onYear = () => {
  const date = new Date();
  const month = date.getMonth();

  if (month >= 8 && month <= 12) {
    return 'GENAP';
  }

  return 'GANJIL';
};
