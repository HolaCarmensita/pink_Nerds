const menuContainer = document.querySelector(".menu-container");

let randomArray = [];

//För menu meals
/* function menuCardGenerator(db) {
    //console.log(db);
    
    for (let category in db) {
        //console.log(randomArray.slice(0, 12));

        for (let dish of db[category]) {
            
        let card = document.createElement('div');

        let cardImage = document.createElement('img');
        let cardFoodName = document.createElement('p');
        let cardPrice = document.createElement('p');

        cardImage.src = dish.img;
        cardFoodName.textContent = dish.name;
        cardPrice.textContent = dish.price;

        card.classList.add('card-body');
        cardImage.classList.add('cardImage');
        
        card.append(cardImage, cardFoodName, cardPrice);
        menuContainer.append(card); 
        } 
    }
    //randomArray.sort( () => Math.random() - 0.5);
    
}

menuCardGenerator(db); */


function menuCardGenerator(db) {
    

    let random = Math.floor(Math.random() * db.length);
    
    let card = document.createElement('div');

    let cardFoodName = document.createElement('p');
    let cardPrice = document.createElement('p');
    let cardImage = document.createElement('img');

    cardImage.src = db[random].img;
    cardImage.alt = db[random].name;
    cardFoodName.textContent = db[random].dsc;
    cardPrice.textContent = db[random].price;
    
    card.classList.add('card-body');
    cardImage.classList.add('cardImage');
        
    card.append(cardImage, cardFoodName, cardPrice);
    menuContainer.append(card);

}

let items = [db.bbqs, ...db.burgers,
    ...db.pizzas, ...db.porks, ...db.sandwiches,];


/*
    "bbqs": 59,
    "best-foods": 60,
    "breads": 58,
    "burgers": 60,
    "chocolates": 59,
    "desserts": 43,
    "drinks": 48,
    "fried-chicken": 58,
    "ice-cream": 27,
    "pizzas": 54,
    "porks": 60,
    "sandwiches": 55,
    "sausages": 60,
    "steaks": 57,
    "our-foods": 697
*/

for (let i = 0; i < 10; i++) {
    menuCardGenerator(items);
}


