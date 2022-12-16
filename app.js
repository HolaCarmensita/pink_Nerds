const frontPageFeatured = document.querySelector(".front-page-featured");




/* function menuCardGenerator(db) {
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
        frontPageFeatured.append(card);

        }
    }
}

menuCardGenerator(db); */



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








/* function createCard(theme) {
    // CREATES A TEMPLATE FOR EACH CARD
    let card = document.createElement('figure')
    card.innerHTML = `<img class ="card-img" src="${theme.name}" alt="${theme.alt}" width = "100">`
    card.className = 'card'
    card.addEventListener('click', () => {
      // MAKES THE CARDS CLICKABLE WITH AN ANTI SPAM
      if (!card.classList.contains('flip-front') && !preventClick) {
        gameLogic(card, theme)
      }
    })
  
    return card
  }
  function createDOMCard(container) {
    // CREATES EACH CARDS WITH A IMG FROM THEME-OBJECT AND USES CREATECARD FUNTCION AS A TAMPLATE. ADDING TO HTML.
    let totalAmount = theme.length
    for (let i = 0; i < totalAmount; i++) {
      let random = Math.floor(Math.random() * theme.length)
      let cards = createCard(theme[random])
  
      theme.splice(random, 1)
      container.append(cards)
    }
  } */
