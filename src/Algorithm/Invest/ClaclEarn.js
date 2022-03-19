export const CalcStockChange = (startValue, saleValue, sumMoney) => {
  return (parseInt(saleValue) / parseInt(startValue)) * parseInt(sumMoney);
};
