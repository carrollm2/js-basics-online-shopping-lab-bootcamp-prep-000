var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
var min = 1;
var max = 100;

var price = Math.floor(Math.random() * (max - min + 1)) + min

var newObject = {}
var itemName = item
newObject = {[itemName]: price}

cart.push(newObject)

console.log(`${item} has been added to your cart.`)

return cart


}

function viewCart() {
  // write your code here

  var statement = "In your cart, you have "


  if(cart.length === 1){
    statement += `${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`
    return console.log(statement)
  }


  if (cart.length === 2){
    statement += `${cart[0]['itemName']} at $${cart[0]['itemPrice']} and ${cart[1]['itemName']} at $${cart[1]['itemPrice']}.`
    return console.log(statement)

  }

  if (cart.length > 2){
    for (var i = 0; i < cart.length; i++){
      if (i < cart.length - 1){
        statement += `${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `
      } else {
        statement += `and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`
      }
    }
    return console.log(statement)
  }

  if (cart.length === 0){
    return console.log("Your shopping cart is empty.")

  }


}

function total() {
  // write your code here
  var sum = 0.0
  for (var i = 0; i < cart.length; i++){
    console.log(Object.values(cart[i]))
    sum += parseFloat(Object.values(cart[i]))
  }

  return sum

}

function removeFromCart(item) {
  // write your code here
  var updatedCart = []

  for (var i = 0; i < cart.length; i++){
    if(!cart[i].hasOwnProperty(item)){
      updatedCart.push(cart[i])
    }
  }

  if (cart.length !== updatedCart.length){
    cart = updatedCart
    return cart
  } else {
    console.log("That item is not in your cart.")
    return cart
  }

}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    var totalOrder = total()

    console.log(totalOrder, "totalOrder")
    console.log(`Your total cost is $${totalOrder}, which will be charged to the card ${cardNumber}.`)
    cart = []
    return cart
  } else {
    return console.log("Sorry, we don't have your credit card on file for you")
  }

}
