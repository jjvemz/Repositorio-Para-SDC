export const currencyFormat = (num) => {
  return (
    parseFloat(num)
      .toFixed(1) // always two decimal digits
      .replace('.', ',') // replace decimal point character with ,
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  ) // use . as a separator
}

export const getYear = (data) => {
  return data.split('/')[0];
}
