export const calcAveragePrice = (invests) => {
  let sumMoney = 0;
  let sumInvest = 0;
  invests.forEach((element) => {
    const moneyAmount = parseFloat(element.money);
    const stockPurchasePrice = parseFloat(element.stockPrice);
    sumInvest += moneyAmount * stockPurchasePrice;
    sumMoney += moneyAmount;
  });
  return sumInvest / sumMoney;
};
