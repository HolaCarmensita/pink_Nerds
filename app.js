const frontPageFeatured = document.querySelector(".front-page-featured");
const menuContainer = document.querySelector(".menu-container");



//För menu meals
function menuCardGenerator(db) {
    //console.log(db);
    
    for (let category in db) {
        
        for (let dish of db[category]) {
        console.log(dish.name)

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
}

menuCardGenerator(db);

//För feature meal
function cardFeatureGenerator(db) {
    
    console.log(db.bbqs[0].name)

    let card = document.createElement('div');


    let cardFoodName = document.createElement('p');
    let cardPrice = document.createElement('p');
    let cardImage = document.createElement('img');

    
    cardImage.src = db.bbqs[1].img;
    cardFoodName.textContent = db.bbqs[1].dsc;
    cardPrice.textContent = db.bbqs[1].price + "sek";

    card.classList.add('featureCard-body');
    cardImage.classList.add('featureCardImage');
        
    card.append(cardImage, cardFoodName, cardPrice);
    frontPageFeatured.append(card);

}

cardFeatureGenerator(db);

//console.log(db.bbqs[0].name);
