    // Funktion för att ändra hash-värdet på sidan
    
    function changeLanguage(lang) {
        location.hash = lang;
        location.reload();
      }

        // Sätt sidans innehåll baserat på hash-värdet
        if (window.location.hash == "#eng") {
            orderButton.textContent = "My order";
            balanceButton.textContent = "Add to balance ";
            startLink.href = "index.html#eng"
            menuLink.href = "menu.html#eng";
            menuLink.textContent = "Menu";
            saldoLink.href = "saldo.html#eng";
            saldoLink.textContent = "Balance";
        }