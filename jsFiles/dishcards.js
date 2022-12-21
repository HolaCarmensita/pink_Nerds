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
    const specificMenu = [flatDbList[0].id, flatDbList[1].id, flatDbList[2].id];

    for (let i = 0; i < flatDbList.length; i++) {
        if (specificMenu.includes(flatDbList[i].id)) {
            menuList.push(flatDbList[i])
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
    const dishCard = template.content.cloneNode(true) //cloning the template into a varible
    dishCard.querySelector(".dish-card").setAttribute("id", menuList[index].name);
    dishCard.querySelector(".dish-name").innerText = menuList[index].name; //name from listObject to template
    const dishImg = dishCard.querySelector(".dish-img").setAttribute("src", menuList[index].img); //img from listObject to template
    dishCard.querySelector(".dish-dsc").innerText = menuList[index].dsc; //dsc from listObject to template
    dishCard.querySelector(".dish-price").innerText = menuList[index].price; //price from listObject to template
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
