    // Funktion för att ändra hash-värdet på sidan
    
function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
  }

    // Sätt sidans innehåll baserat på hash-värdet
  if (window.location.hash == "#eng") {
    myBalance.textContent = "My balance";
    yourBalance.textContent = "Available amount";
    chooseAmount.textContent = "Choose amount to add to balance";
    chosenAmount.placeholder = "Insert amount";
    bankID.textContent = "Confirm using Bank-ID";
    orderButton.textContent = "My order";
    startLink.href = "index.html#eng"
    menuLink.href = "menu.html#eng";
    menuLink.textContent = "Menu";
    saldoLink.href = "saldo.html#eng";
    saldoLink.textContent = "Balance";
  }

let balance = document.querySelector('h2');
let input = document.querySelector('input');
let button = document.querySelector('button');

  button.addEventListener('click', () => {
    let myBalance = input.value;
    input.value = '';

    let newBalance = document.createElement('p');
    newBalance.id = 'balance';

    balance.appendChild(newBalance);
    newBalance.textContent = myBalance;
    });