console.log(items);
//question 1
console.log("question 1")
var prices = items.map(function(item){
  return item.price;
   console.log(prices);
});
var total = prices.reduce(function(a, b){
  return a + b;
});

var averagePrice = total / prices.length
console.log("The average price is $" + (averagePrice.toFixed(2)));

//question 2
console.log("question 2")
var between = items.filter(function(item){
    if(item.price > 13.99 && item.price < 18.01){
      console.log(item.title);
    }
});
console.log(between);

//question3
console.log("question 3")
var gbpCode = items.filter(function(x){
  return x.currency_code === "GBP";
});


var titleAndPrice = gbpCode.map.call(gbpCode,function(x){
  return (x.title + " $" + x.price);
});
console.log(titleAndPrice)

//question 4
console.log("question 4")
items.forEach(function(item){
    item.materials.forEach(function(x){
      if(x ==="wood"){
      console.log(item.title);
      }
    })
});
// question 5
console.log("Question 5")
items.forEach(function(x){
  if(x.materials.length >7){
    console.log(x.title + "is made of" + x.length + "different materials.");
  }
});
// question 6
console.log("Question 6")
items.forEach(function(item){
  if (item.who_made === "i_did"){
    console.log(item.title)
  }
})
