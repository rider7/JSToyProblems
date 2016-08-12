// Price of Mangoes
// There's a 3 for 2 offer on mangoes. For a given price and quantity, calculate the total cost of the mangoes.

function mango(quantity, price){
if(quantity % 3 === 0){
return quantity/3 * 2 * price;
}
else if(quantity < 3){
return quantity * price;
}
else{
var remainder = quantity % 3 * price;
return (quantity-quantity% 3) /3 * 2 * price + remainder;
}
}
