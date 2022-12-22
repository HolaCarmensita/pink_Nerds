// Funktion för att ändra hash-värdet på sidan
    
function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
  }

// Sätt sidans innehåll baserat på hash-värdet
  if (window.location.hash == "#eng") {
    myBalance.textContent = "My balance";
    yourBalance.textContent = "Available amount:";
    chooseAmount.textContent = "Choose amount to add to balance";
    chosenAmount.placeholder = "Insert amount";
    bankID.textContent = "Confirm using Bank-ID";
    startLink.href = "index.html#eng"
    menuLink.href = "menu.html#eng";
    menuLink.textContent = "Menu";
    saldoLink.href = "saldo.html#eng";
    saldoLink.textContent = "Balance";
  }

// let balance = document.querySelector('h2');
// let input = document.querySelector('input');
// let button = document.querySelector('button');
// let span = document.getElementById('zeroBalance')

//   button.addEventListener('click', () => {
//     let myBalance = Number(input.value);
//     input.value = '';

//     let currentBalance = Number(span.textContent.replace(':-', ''))
//     currentBalance = currentBalance + myBalance;
//     span.textContent = currentBalance + (':-');
//     });

let balance = document.querySelector('h2');
let input = document.querySelector('input');
let button = document.querySelector('button');
let span = document.getElementById('zeroBalance')

  button.addEventListener('click', () => {
    let myBalance = Number(input.value);
    input.value = '';

    let currentBalance = Number(span.textContent.replace(':-', ''))
    currentBalance = add(currentBalance, myBalance);
    span.textContent = currentBalance + (':-');
    });


function add (num1, num2) {
  return num1 + num2;
}