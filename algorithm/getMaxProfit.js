function getMaxProfit(prices, budget) {
  
  let min = prices[0]
  let max = 0



  for(let i = 0; i < prices.length ;i++){

    const curr = prices[i]

    const stockCount = Math.floor(budget / min)
    const profit = stockCount * (curr - min)

    if (profit > max){
      max = profit
    }

    if(curr < min){

    min = curr
    }
  }



  return max.toFixed(2);
}
