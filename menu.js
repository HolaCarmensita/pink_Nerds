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
    

    let random = Math.floor(Math.random() * db.bbqs.length);
    
    let card = document.createElement('div');

    let cardFoodName = document.createElement('p');
    let cardPrice = document.createElement('p');
    let cardImage = document.createElement('img');

    
    cardImage.src = db.bbqs[random].img;
    cardFoodName.textContent = db.bbqs[random].dsc;
    cardPrice.textContent = db.bbqs[random].price;

    card.classList.add('card-body');
    cardImage.classList.add('cardImage');
        
    card.append(cardImage, cardFoodName, cardPrice);
    menuContainer.append(card);

}

for (let i = 0; i < 10; i++) {
    menuCardGenerator(db);
}




/*
Frågor:
Hur får vi menyn att visa alla rätter istället för 1 kategori?
Hur tar vi bort duplicerade kort?
*/