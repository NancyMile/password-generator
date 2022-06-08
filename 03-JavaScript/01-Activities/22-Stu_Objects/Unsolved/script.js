//WRITE YOUR CODE BELOW
var customerOrder = {
    drinkName : 'tea',
    sugars : 0,
    orderState : true
} 
/*Order description */
console.log("Drink: "+customerOrder.drinkName+" Sugar: "+customerOrder.sugars+".");

/** If order ready */
if(customerOrder.orderState){
    console.log("Ready for pick-up");
}else{
    console.log("Still in order queue");
}