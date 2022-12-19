// const menuArray = {
//     "bbqs": [
//         {
//             "id": "ribs-brisket-and-burnt-ends",
//             "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
//             "name": "Joe's KC BBQ",
//             "dsc": "Joe's KC Ribs, Brisket & Burnt Ends",
//             "price": 110.99,
//             "rate": 4,
//             "country": "Kansas City, KS"
//         },
//         {
//             "id": "005-kings-carolina-oink-sampler",
//             "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
//             "name": "Kings BBQ",
//             "dsc": "Carolina BBQ Oink Sampler",
//             "price": 89,
//             "rate": 4,
//             "country": "Kinston, NC"
//         } ],
//     "burgers": [
//         {
//           "id": "the-gramercy-tavern-burger-4-pack",
//           "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
//           "name": "Gramercy Tavern",
//           "dsc": "The Gramercy Tavern Burger - 4 Pack",
//           "price": 99,
//           "rate": 5,
//           "country": "New York, NY"
//         },
//         {
//           "id": "shake-shack-shackburger-8-pack",
//           "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134862/shake-shack-shackburger-8-pack.973a5e26836ea86d7e86a327becea2b0.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
//           "name": "Shake Shack",
//           "dsc": "Shake Shack ShackBurger® – 8 Pack",
//           "price": 49,
//           "rate": 5,
//           "country": "New York, NY"
//         } ]  
// }

// const cardBoard = document.querySelector('.menu-container');
// const searchInput = document.querySelector('.search');
// const filterButtons = document.querySelectorAll('.filter-buttons');

// function createCards () {
//     for (let i= 0; i < menuArray.bbqs.length; i++) {
//         let card = document.createElement('div');
//         let cardImg = document.createElement('img');
//         let cardText = document.createElement('p');
//         card.setAttribute('class', 'card');
//         card.setAttribute('alt', menuArray.bbqs[i].name);
//         cardImg.setAttribute('src', menuArray.bbqs[i].img);
//         cardText.innerText = menuArray.bbqs[i].name;
//         cardBoard.appendChild(card);
//         card.appendChild(cardImg);
//         card.appendChild(cardText);
//     }
//     for (let i= 0; i < menuArray.burgers.length; i++) {
//         let card = document.createElement('div')
//         let cardImg = document.createElement('img');
//         let cardText = document.createElement('p');
//         card.setAttribute('class', 'card');
//         card.setAttribute('alt', menuArray.burgers[i].name);
//         cardImg.setAttribute('src', menuArray.burgers[i].img)
//         cardText.innerText = menuArray.burgers[i].name;
//         cardBoard.appendChild(card);
//         card.appendChild(cardImg);
//         card.appendChild(cardText);
//     }
// };
// createCards ();

// ================ OVAN SKAPADE JAG KORT FÖR ATT SE VISUELLT HUR SÖKFUNKTIONEN FUNKADE ============
function searchElements () {
    let cards = document.querySelectorAll('.card')
    let searchInput = document.getElementById('search').value;
    console.log(searchInput);

    for (var i = 0; i < cards.length; i++) {
        if(cards[i].innerText.toLowerCase()
        .includes(searchInput.toLowerCase())) {
            cards[i].classList.remove("hidden");
        } else {
          cards[i].classList.add("hidden");
        }
      }
};

// ================= HÄR BÖRJADE JAG FILTRERA MED HJÄLP AV KNAPPAR ENLIGT TRELLO MEN VALDE EN input-sökfunktion LIKT VÅR WIREFRAME ======================
// filterButtons.forEach(button => {
//     button.addEventListener('click', filterElements)
// });

// function filterElements (e) {

//     let targetId = e.target.id.toLowerCase();
//     let constArray = db[targetId];

    
//     constArray.forEach(function (dish) {
//         let box = document.createElement('div');
//         const nodeThing = document.createTextNode(dish.name);
//         box.appendChild(nodeThing);
//         cardBoard.appendChild(box);
//         console.log(box);
//     });

// };









