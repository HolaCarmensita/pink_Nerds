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
            placeholderText.placeholder = "Add to your balance ";
            menuButton.textContent = "Menu";
            startLink.href = "index.html#eng";
            menuLink.href = "menu.html#eng";
            menuButton.textContent = "Menu";
        }
      }