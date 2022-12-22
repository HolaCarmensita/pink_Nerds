    // Funktion för att ändra hash-värdet på sidan
    
    function changeLanguage(lang) {
        location.hash = lang;
        location.reload();
      }

        // Sätt sidans innehåll baserat på hash-värdet
        if (window.location.hash == "#eng") {
            welcomePhrase.textContent = "Welcome to The Kraken Inn";
            specialOrder.textContent = "Todays special order";
            startLink.href = "index.html#eng"
            menuLink.href = "menu.html#eng";
            menuLink.textContent = "Menu";
            saldoLink.href = "saldo.html#eng";
            saldoLink.textContent = "Balance";
        }