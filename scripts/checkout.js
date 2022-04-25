let walBal = JSON.parse(localStorage.getItem('amount'));
let wallet = document.getElementById('wallet');
wallet.innerHTML = walBal;
// Each ticket will cost 100 Rupees

function confirm()
{
    let ticket = 100;
// If wallet amount is insufficient show alert "Insufficient Balance!";
let number_of_seats = Number(document.getElementById('number_of_seats').value);

let calCost = ticket*number_of_seats;

let balance = JSON.parse(localStorage.getItem('amount'));

if(calCost > balance)
alert('Insufficient Balance!');

else if(calCost <= balance){
    balance = balance - calCost;
    localStorage.setItem('amount', JSON.stringify(balance));
    alert('Booking successfull!');
    window.location.reload();
}

// document.getElementById('user_name').value = '';
// document.getElementById('number_of_seats').value = '';

}

// Else show "Booking successfull!" and adjust the wallet amount in real time
