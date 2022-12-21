const menuList = [
    {
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66734/bbq-meat-lovers-special-for-10.36ca670fda4bfa783c2ea9165e068d26.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Kings BBQ",
        "dsc": "BBQ Meat Lovers Special for 10",
        "price": 139,
    },
    {
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/118643/fried-chicken-dinner-kit-for-2-4.2f685dc798e641bed96151b31e4b9910.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Yardbird",
      "dsc": "Fried Chicken Dinner Kit for 2-4",
      "price": 89,
    },
    {
        "id": "bbq-rib-tips-serves-10-15",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90450/bbq-rib-tips-serves-10-15.c3f35f44d3b1650273c3cdd42494fb66.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Bludso's BBQ",
        "dsc": "BBQ Rib Tips - Serves 10-15",
        "price": 109,
               
    },
    {
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110700/jumbo-hot-chicken-wings-24-pack.b7eca4314dc88b8d6290b9e11f6249d4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Hattie B's Hot Chicken",
      "dsc": "Jumbo Hot Chicken Wings - 24 Pack",
      "price": 159,
     
    },
    {
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/72343/coal-oven-margherita-pizza-pie-4-pack.c5944293e17b40f2659562179b493a10.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Table 87 Pizza",
        "dsc": "Coal Oven Margherita Pizza - 4 Pies",
        "price": 79,
        "rate": 5,
        "country": "Brooklyn, NY"
    },
    {
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119426/neapolitan-pizza-choose-your-own-3-pack.dada483ad51fe8e1f8b06c68a8f1356f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Motorino Pizzeria",
        "dsc": "Neapolitan Pizza - Choose Your Own 3 Pack",
        "price": 99,
        "rate": 4,
        "country": "New York, NY"
    },
    {
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133197/italian-sandwich-kit-best-sellers-4-pack.746c4cdd37eb5855178bcb6492fd66f6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Alidoro",
        "dsc": "Italian Sandwich Kit Best Sellers - 4 Pack",
        "price": 99,
        "rate": 5,
        "country": "New York, NY"
    },
    {

      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Gramercy Tavern",
      "dsc": "The Gramercy Tavern Burger - 4 Pack",
      "price": 99,
      "rate": 5,
      "country": "New York, NY"
    
    }, {

        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/69335/100-fullblood-wagyu-beef-filet-mignon-steaks.7b79838c5fdd56c1295e33d2d6af007e.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Lone Mountain Wagyu",
        "dsc": "100% Fullblood Wagyu Beef Filet Mignon Steaks",
        "price": 275,
        "rate": 4,
        "country": "Golden, NM"
    }, {
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132933/gotts-complete-cheeseburger-kit-for-4.7bdc74104b193427b3fe6eae39e05b5e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Gott's Roadside",
        "dsc": "Gott's Complete Cheeseburger Kit for 4",
        "price": 99,
        "rate": 5,
        "country": "St. Helena, CA"
    }, {

      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134704/gramercy-tavern-mushroom-lasagna-4-pack.88c671dec184d8bee908d6f5d8d860f9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Gramercy Tavern",
      "dsc": "Gramercy Tavern Mushroom Lasagna for 4",
      "price": 99,
      "rate": 4,
      "country": "New York, NY"
    },  {
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126887/dry-aged-boneless-ribeye-steak-dinner-for-4.81c3bdc05fe6bdb2c2214709863120e0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Chef Francis Mallmann",
        "dsc": "Dry-Aged Boneless Ribeye Steak Dinner Kit for 4",
        "price": 225,
        "rate": 4,
        "country": "Patagonia, Argentina"
      },
      

]

const cards = document.querySelectorAll(".dish-card");
const cardBoard = document.querySelector('.menu-container');
const searchInput = document.querySelector('.search');
const dishContainer = document.querySelector(".dish-container");
const template = document.querySelector("template");
/*======= how to clone the hole template =========
const cloneTemplate = template.content.cloneNode(true)  
======= how to use different elements in the template ==========
let dishName = cloneTemplate.querySelector(".dish-name")
let dishImg = cloneTemplate.querySelector(".dish-img")
let dishDsc = cloneTemplate.querySelector(".dish-dsc")
let dishPrice = cloneTemplate.querySelector(".dish-price")*/

//CREAT DISHCARDS
menuList.forEach((listObject, index ) => { // For each item in the list + using the index of those items
    const dishCard = template.content.cloneNode(true) //cloning the template into a varible
    dishCard.querySelector(".dish-card").setAttribute("id", menuList[index].name);

    dishCard.querySelector(".dish-name").innerText = menuList[index].name; //name from listObject to template
    const dishImg = dishCard.querySelector(".dish-img").setAttribute("src", menuList[index].img); //img from listObject to template
    dishCard.querySelector(".dish-dsc").innerText = menuList[index].dsc; //dsc from listObject to template
    dishCard.querySelector(".dish-price").innerText = menuList[index].price; //price from listObject to template
    dishContainer.appendChild(dishCard);

    dishCard.addEventListener('click', putInOrder);
});


function searchElements () {
    let cards = document.querySelectorAll('.dish-card')
    let searchInput = document.getElementById('search').value;
    //console.log(searchInput);

    for (var i = 0; i < cards.length; i++) {
        if(cards[i].id.toLowerCase()
        .includes(searchInput.toLowerCase())) {
            cards[i].classList.remove("hidden");
        } else {
          cards[i].classList.add("hidden");
        }
      }
};



function putInOrder(event) {
let orderArray = [];

let clickedCard = event.target.textContent;


orderArray.push(clickedCard);
console.log(orderArray);


}