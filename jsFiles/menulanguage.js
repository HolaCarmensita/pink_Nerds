    // Funktion för att ändra hash-värdet på sidan
    
    function changeLanguage(lang) {
        location.hash = lang;
        location.reload();
      }
    
      // Kollar om hash-värdet finns i URL
      if (window.location.hash) {
    
        // Sätt sidans innehåll baserat på hash-värdet
        if (window.location.hash == "#eng") {
            orderButton.textContent = "My order";
            search.placeholder = "Search";
            startLink.href = "index.html#eng"
            menuLink.href = "menu.html#eng";
            menuLink.textContent = "Menu";
            saldoLink.href = "saldo.html#eng";
            saldoLink.textContent = "Balance";
        }
      }