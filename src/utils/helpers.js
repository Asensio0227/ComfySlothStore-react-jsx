export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR'
  }).format(number / 100);

  return newNumber;
}

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  console.log(unique);
  if (unique === 'colors') {
    unique = unique.flat();
  }
  const tossie = ['all', ...new Set(unique)];

  return tossie
}
