
function read(id)
{
    return document.getElementById(id).value;
}

// Store the wallet amount to your local storage with key "amount"
let sum = JSON.parse(localStorage.getItem('amount'));

function addToWallet()
{
    let inp_amt = Number(read('amount'));
    localStorage.setItem('amount', JSON.stringify(inp_amt));

    let balance = JSON.parse(localStorage.getItem('amount'));
    // console.log(balance);

    sum = sum + JSON.parse(localStorage.getItem('amount'));
    localStorage.setItem('amount',JSON.stringify(sum));

    let walletBal = document.getElementById('wallet');
    // console.log(walletBal);
    walletBal.innerText = sum;

}
