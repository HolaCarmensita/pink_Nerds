const frontPageFeatured = document.querySelector(".front-page-featured");




//För feature meal
function cardFeatureGenerator(db) {

    let random = Math.floor(Math.random() * db.bbqs.length);
    
    let card = document.createElement('div');

    let cardFoodName = document.createElement('p');
    let cardPrice = document.createElement('p');
    let cardImage = document.createElement('img');

    
    cardImage.src = db.breads[random].img;
    cardFoodName.textContent = db.bbqs[random].dsc;
    cardPrice.textContent = db.bbqs[random].price + "sek";

    card.classList.add('featureCard-body');
    cardImage.classList.add('featureCardImage');
        
    card.append(cardImage, cardFoodName, cardPrice);
    frontPageFeatured.append(card);

}


cardFeatureGenerator(db);

//console.log(db.bbqs[0].name);
