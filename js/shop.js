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

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    let buscar=products.find(products=>products.id==id)
    //  // 2. Add found product to the cartList array
        cartList.push(buscar);
        generateCart(buscar);
        calculateTotal(); 
        printCart();
     }

// Exercise 2
function cleanCart() {
    cartList=[];
    cart=[];
    document.getElementById("count_product").innerHTML=0;
    total=0;
    document.querySelector(".titulo").innerHTML = "Tu carrito esta vac??o";
    document.querySelector(".list").innerHTML = ``;
}
// Exercise 3
function calculateTotal() {
    total=0;
    for(objeto of cart){
    // Calculate total price of the cart using the "cartList" array
      if (objeto.subtotalWithDiscount == undefined) {
        total += objeto.price*objeto.quantity;
      } else {
        total += objeto.subtotalWithDiscount;
      }}
}
// Exercise 4
function generateCart(producto) {
  
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    let comp=cart.some(a=>a.id==producto.id);
    
    if(!comp){
       cart.push(producto);
       producto.quantity=1;
    }else{
       producto.quantity++; 
    }
    
    applyPromotionsCart(producto);
}
// Exercise 5
function applyPromotionsCart(producto) {
    // Apply promotions to each item in the array "cart"
    if(producto.id==1 && producto.quantity>=3){
        producto.subtotalWithDiscount = producto.quantity*10;
    }else if(producto.id==3 && producto.quantity>=10){
        producto.subtotalWithDiscount = producto.price*0.66*producto.quantity;
    }
}


// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    document.getElementById("count_product").innerHTML = `${cartList.length}`;
    document.querySelector(".titulo").textContent = "Tu carrito";
    document.querySelector(".list").innerHTML = `<table class="table mt-3 me-3">
                                                 <thead>
                                                   <tr>
                                                     <th scope="col">Products</th>
                                                     <th scope="col">Price</th>
                                                     <th scope="col">Qty.</th>
                                                     <th scope="col">Total</th>
                                                     <th scope="col"></th>
                                                   </tr>
                                                 </thead>
                                                 <tbody>
                                                 </tbody>
                                               </table>
                                               <div class="text-center fs-2">Total:${total.toFixed(2)}???</div>`;
    for (objeto of cart) {
      if (objeto.subtotalWithDiscount == undefined) {
        document.querySelector("tbody").insertAdjacentHTML("beforeend", 
            `<tr>
                <td>${objeto.name}</td>
                <td>${objeto.price}???</td>
                <td>${objeto.quantity}</td>
                <td>${objeto.price*objeto.quantity}???</td>
                <td><button class="btn btn-danger" onclick=removeFromCart(${objeto.id})>-</button></td>
            <tr>`)
      } else {
        document.querySelector("tbody").insertAdjacentHTML("beforeend", 
            `<tr>
              <td>${objeto.name}</td>
              <td>${objeto.price}???</td>
              <td>${objeto.quantity}</td>
              <td>${objeto.subtotalWithDiscount.toFixed(2)}???</td>
              <td><button class="btn btn-danger" onclick=removeFromCart(${objeto.id})>-</button></td>
            <tr>`)
      }
    }
}


// ** Nivell II **


// Exercise 8

function addToCart(id){

    // let buscar=products.find(products=>products.id==id);
    // let posicion= cart.indexOf(buscar);

    //     if(posicion==-1){
    //        cart.push(products);
    //        products.quantity=1;
    //     }else{
    //        products.quantity++; 
    //     }
    //     applyPromotionsCart(products);
    //     calculateTotal(); 
    //     printCart();
}


// Exercise 9
function removeFromCart(id) {

    let transf=cartList.find(products=>products.id==id)
    const buscar=cartList.indexOf(transf);
    cartList.splice(buscar,1);
    transf.quantity-=1;
    if(transf.quantity==0){
        const findCart=cart.indexOf(transf);
        cart.splice(findCart,1);
    }
    if(transf.id==1){
        transf.subtotalWithDiscount=transf.quantity*10;
        if(transf.quantity<=2&& transf.id==1){
        delete transf.subtotalWithDiscount;
        }}
    else if(transf.id==3){
        transf.subtotalWithDiscount=transf.quantity*transf.price*0.66;
        if(transf.quantity<=9 && transf.id==3){
        delete transf.subtotalWithDiscount;
        }
    }
    calculateTotal();
    printCart();
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}