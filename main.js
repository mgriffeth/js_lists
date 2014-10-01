console.log(items);
//question 1
var prices = items.map(function(item){
  return item.price;
   console.log(prices);
});
var total = prices.reduce(function(a, b){
  return a + b;
});
console.log(total)

var averagePrice = parseInt(total / prices.length)
console.log(averagePrice)



//question 2
var between = items.filter(function(item){
    return item.price > 13.99 && item.price < 18.01;
});
console.log(between)



//question3
