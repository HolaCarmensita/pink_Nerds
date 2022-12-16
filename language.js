    // Funktion för att ändra hash-värdet på sidan
    
    function changeLanguage(lang) {
        location.hash = lang;
        location.reload();
      }
    
      // Val av text baserat på språkval (default = svenska)
      let language = {
        eng: {
          welcome: "Welcome to The Kraken Inn",
          menuButton: "Menu",
          special: "Todays special order",
          order: "My order",
         },
      };
    
      // Kollar om hash-värdet finns i URL
      if (window.location.hash) {
    
        // Sätt sidans innehåll baserat på hash-värdet
        if (window.location.hash == "#eng") {
            
            welcomePhrase.textContent = language.eng.welcome;
            menu.textContent = language.eng.menuButton;
            specialOrder.textContent = language.eng.special;
            orderButton.textContent = language.eng.order;
        }
      }