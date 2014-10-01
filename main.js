console.log(items);
//question 1
var prices = items.map(function(item){
  return item.price;
   console.log(prices);
});
var total = prices.reduce(function(a, b){
  return a + b;
});
console.log(total);

var averagePrice = parseInt(total / prices.length)
console.log(averagePrice);

//question 2
var between = items.filter(function(item){
    return item.price > 13.99 && item.price < 18.01;
});
console.log(between);

//question3
var gbpCode = items.filter(function(x){
  return x.currency_code === "GBP";
});
console.log(gbpCode);

var titleAndPrice = gbpCode.map.call(gbpCode,function(x){
  return (x.title + " $" + x.price);
});
console.log(titleAndPrice)

//question 4
var itemMaterials = items.forEach(function(item){
    item.materials.forEach(function(x){
      if(x ==="wood"){
      console.log(item.title);
      }
    })
});
// question 5

var materialNum = items.forEach(function(item){
    var materialArray = item.material
    if(materialArray.length > 7){
      console.log(item.title);
    }
})
