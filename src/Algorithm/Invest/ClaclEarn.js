export const CalcStockChange = (startValue, saleValue, sumMoney) => {
  return (
    (parseFloat(saleValue) / parseFloat(startValue)) * parseFloat(sumMoney)
  );
};
