export const handSumTotal = (cart) => {
  const reducer = (accumalator, currentValue) =>
    accumalator + currentValue.price;
  const sum = cart.reduce(reducer, 0);
  return sum;
};
