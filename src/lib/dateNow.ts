export default function dateNow() {
  const date = new Date();

  const bulan = date.toLocaleString('id', {
    dateStyle: 'full',
  });

  return `${bulan}`;
}
