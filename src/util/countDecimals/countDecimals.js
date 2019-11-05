const countDecimals = (number) => {
  if (Math.floor(number) !== number) {
    return number.toString().split(".")[1].length || 0;
  }
  return 0;
};

export default countDecimals;
