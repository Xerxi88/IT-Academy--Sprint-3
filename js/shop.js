// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

let cuenta=document.querySelector("#count_product");


// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    let buscar=products.find(products=>products.id==id)
    //  // 2. Add found product to the cartList array
        cartList.push(buscar);
        cuenta.innerHTML=cartList.length;
        generateCart(buscar);
        calculateTotal(buscar); 
        
     }

// Exercise 2
function cleanCart() {
    cartList=[];
    cart=[];
    cuenta.innerHTML=0;
    total=0;
}
// Exercise 3
function calculateTotal(precio) {
    console.log(precio)
    // Calculate total price of the cart using the "cartList" array
      if (precio.subtotalWithDiscount == undefined) {
        total += precio.price;
      } else {
        total += precio.subtotalWithDiscount;
      }
    console.log(total); 
}
// Exercise 4
function generateCart(producto) {
  
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    let comp=cart.some(a=>a.id==producto.id);
    console.log(comp);
     if(!comp){
       console.log("Se agrega objeto nuevo al carro");
       cart.push(producto);
       producto.quantity=1;
    }else{
       console.log("Se agrega objeto repetido y se le suma 1 unidad");
       producto.quantity++; 
    }
    applyPromotionsCart(producto);
}
// Exercise 5
function applyPromotionsCart(producto) {
    // Apply promotions to each item in the array "cart"
    if(producto.id==1 && producto.quantity>=3){
        console.log("Descuento activado, aceite a 10€ la unidad");
        producto.subtotalWithDiscount = producto.quantity*10;
    }else if(producto.id==3 && producto.quantity>=10){
        console.log("Descuento activado, ingredintes para pastel rebajado al 66%");
        producto.subtotalWithDiscount = producto.price*0.66*producto.quantity;
    }
}


// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}