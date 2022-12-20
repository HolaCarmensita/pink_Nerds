    // Funktion för att ändra hash-värdet på sidan
    
    function changeLanguage(lang) {
        location.hash = lang;
        location.reload();
      }
    
      // Kollar om hash-värdet finns i URL
      if (window.location.hash) {
    
        // Sätt sidans innehåll baserat på hash-värdet
        if (window.location.hash == "#eng") {
            welcomePhrase.textContent = "Welcome to The Kraken Inn";
            specialOrder.textContent = "Todays special order";
            menuLink.href = "menu.html#eng";
            menuButton.textContent = "Menu";
            saldoLink.href = "saldo.html#eng";
            saldoButton.textContent = "Balance";
        }
      }
