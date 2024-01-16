export const calculatePercentageDifference = (minSellAmount: number, maxSellAmount: number) => {
  if(minSellAmount && maxSellAmount) {
    if (minSellAmount === 0 ) {
        return 0;
     }
     const difference = maxSellAmount - minSellAmount;
     const percentageDifference = (difference / minSellAmount) * 100;
 
     return `${Math.floor(percentageDifference)} %`;
  } else {
    return null
  }
}
