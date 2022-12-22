const cardBoard = document.querySelector('.menu-container');
const searchInput = document.querySelector('.search');
const dishContainer = document.querySelector(".dish-container");
const template = document.querySelector("template");
const menuList = [];
/*======= how to clone the hole template =========
const cloneTemplate = template.content.cloneNode(true)  
======= how to use different elements in the template ==========
let dishName = cloneTemplate.querySelector(".dish-name")
let dishImg = cloneTemplate.querySelector(".dish-img")
let dishDsc = cloneTemplate.querySelector(".dish-dsc")
let dishPrice = cloneTemplate.querySelector(".dish-price")*/


//CREATE A NEW LIST BASED ON SPECIFIC ITEMS IN db.js.
function makeMenuList () {
    const flatDbList = [...db.bbqs, ...db.burgers,
        ...db.pizzas, ...db.porks, ...db.sandwiches,]
    const specificMenu = [flatDbList[0].id, flatDbList[201].id, flatDbList[264].id, flatDbList[231].id,
    flatDbList[96].id, flatDbList[121].id, flatDbList[125].id,flatDbList[131].id, flatDbList[136].id, flatDbList[13].id];

    for (let i = 0; i < flatDbList.length; i++) {
        if (specificMenu.includes(flatDbList[i].id)) {
            menuList.push(flatDbList[i]);
        }    
    }
    // FOR EACH LÖSNING ISTÄLLET FÖR FOR I? 
    // flatDbList.forEach((dish) => {
    //     if (specificMenu.includes(dish.id)) {
    //         chosenDishes.push(dish)
    //     }    
    // })
}

makeMenuList ();

//CREATE DISHCARDS BASED ON THE NEW LIST. 
menuList.forEach((listObject, index ) => { // For each item in the list + using the index of those items
    const dishCard = createCardByIndex(index);
    
    dishCard.querySelector(".dish-card").addEventListener('click', () => {
      putInOrder(index);
    });

    dishContainer.appendChild(dishCard);

    
});


//SEARCHFUNCTION THAT SEARCH FOR THE NAME OCH THE DISH AND THE dsc.
function searchElements () {
    let cards = document.querySelectorAll('.dish-card');
    let cardsDsc = document.querySelectorAll('.dish-dsc');
    let searchInput = document.getElementById('search').value;
    //console.log(searchInput);

    for (var i = 0; i < cards.length; i++) {
        if(cards[i].id.toLowerCase().includes(searchInput.toLowerCase()) || cardsDsc[i].innerText.toLowerCase().includes(searchInput.toLowerCase())) {
            cards[i].classList.remove("hidden");
        } else {
          cards[i].classList.add("hidden");
        }
      }
};


// TESTAR JUST NU MED EVENTLISTNER CURRENT TARGET
// let choosenDishes = [];

// let cards = document.querySelectorAll(".dish-card"); 

// card.addEventListener("click", e => {
//     console.log(e.currentTarget);
//     let chosenDish = e.currentTarget;
// });

// function chosenDish () {
//     console.log("CLICKED");
//     choosenDishes.push(e.target);
// }

//SPREAD OPERATIOR 
//const flatDbList = [...db.bbqs, ...db.burgers,
//    ...db.pizzas, ...db.porks, ...db.sandwiches,]

function createCardByIndex(index) {
  const dishCard = template.content.cloneNode(true) //cloning the template into a varible
  dishCard.querySelector(".dish-card").setAttribute("id", menuList[index].name);
  dishCard.querySelector(".dish-name").innerText = menuList[index].name; //name from listObject to template
  dishCard.querySelector(".dish-img").setAttribute("src", menuList[index].img); //img from listObject to template
  dishCard.querySelector(".dish-dsc").innerText = menuList[index].dsc; //dsc from listObject to template
  dishCard.querySelector(".dish-price").innerText = menuList[index].price; //price from listObject to template

  return dishCard;
}



// DENNIS VARUKORG
const menuPageContainer = document.querySelector(".menu-page-container");
const navBar = document.querySelector(".nav-div");
const shoppingCartBtn = document.querySelector(".shopping-cart-logo");
const closeCartBtn = document.querySelector("close-cart-logo");
const closeCartBtnContainer = document.querySelector(".close-cart-logo-container");
const orderBtnContainer = document.querySelector(".order-btn-container");
const orderBtn = document.querySelector(".order-btn");
const cards = document.querySelectorAll(".dish-card");
const shoppingCart = document.querySelector(".shopping-cart");
const cartNumber = document.querySelector(".cart-number");
const cartTitleContainer = document.querySelector(".cart-title-container");


//HIDING THE MENU AND SHOWING THE CART
shoppingCartBtn.addEventListener('click', () => {
  menuPageContainer.style.display = "none";
  shoppingCart.style.display = "block";
  orderBtnContainer.style.display = "block";
  cartTitleContainer.style.display = "block";

  closeCartBtnContainer.innerHTML = `<img src="assets/close.png" class="close-cart-logo" alt="X" />`
});

//HIDING THE CART AND SHOWING THE MENU
closeCartBtnContainer.addEventListener('click', () => {
  menuPageContainer.style.display = "block";
  shoppingCart.style.display = "none";
  orderBtnContainer.style.display = "none";
  cartTitleContainer.style.display = "none";

  closeCartBtnContainer.innerHTML = "";
});

//GOING BACK TO MENU AND REMOVE ITEMS FROM CART WHEN "Order products" IS PRESSED
function orderBtnRemove() {
  orderBtn.addEventListener('click', () => {

    alert("Tack för beställningen. Din mat kommer snart!")
    
    shoppingCart.style.display = "none";
    cartTitleContainer.style.display = "none";
    menuPageContainer.style.display = "block";
    
    closeCartBtnContainer.innerHTML = "";
    cartNumber.textContent = "";
      
    //Looping through all children and deleting them
    while (shoppingCart.firstChild) {
      shoppingCart.removeChild(shoppingCart.firstChild);
    }
  });
}

console.log(shoppingCart);
orderBtnRemove(shoppingCart)



// Adding item to cart
function putInOrder(index) {
  console.log("the product is clicked ", index);
  cartNumber.textContent++;

  const dishCard = createCardByIndex(index);

  // REMOVING CART ITEMS
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "remove";
  
  dishCard.querySelector(".dish-card").appendChild(removeBtn);

  removeBtn.addEventListener('click', () => {
    removeBtn.parentElement.remove();

    cartNumber.textContent--;
  });

  shoppingCart.appendChild(dishCard);
  dishCard.appendChild

}
// DENNIS VARUKORG