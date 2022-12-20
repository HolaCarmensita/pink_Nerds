const menuList = [
    {
        "category": "burger",
        "img": "assets/star.png",
        "name": "Cheesburger",
        "dsc": "Bread, meat 90g, lots aof cheese",
        "price": 20,
    },
    {
        "category": "burger",
        "img": "assets/star.png",
        "name": "Cheesburger",
        "dsc": "Bread, meat 90g, lots aof cheese",
        "price": 20,
    },
    {
        "category": "Pizza",
        "img": "assets/star.png",
        "name": "Pizza",
        "dsc": "Bread, tomatos, lots aof cheese",
        "price": 20,
    },
    {
        "category": "Pizza",
        "img": "assets/star.png",
        "name": "Pizza",
        "dsc": "Bread, tomatos, lots aof cheese",
        "price": 20,
    },
    {
        "category": "burger",
        "img": "assets/star.png",
        "name": "Cheesburger",
        "dsc": "Bread, meat 90g, lots aof cheese",
        "price": 20,
    },
    {
        "category": "burger",
        "img": "assets/star.png",
        "name": "Cheesburger",
        "dsc": "Bread, meat 90g, lots aof cheese",
        "price": 20,
    },
    {
        "category": "Pizza",
        "img": "assets/star.png",
        "name": "Pizza",
        "dsc": "Bread, tomatos, lots aof cheese",
        "price": 20,
    },
    {
        "category": "Pizza",
        "img": "assets/star.png",
        "name": "Pizza",
        "dsc": "Bread, tomatos, lots aof cheese",
        "price": 20,
    }

]

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
    dishCard.querySelector(".dish-img").setAttribute("src", menuList[index].img); //img from listObject to template
    dishCard.querySelector(".dish-dsc").innerText = menuList[index].dsc; //dsc from listObject to template
    dishCard.querySelector(".dish-price").innerText = menuList[index].price; //price from listObject to template
    dishContainer.appendChild(dishCard);
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
