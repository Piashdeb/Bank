// function dubbleIt(num) {
//     const result = num * 2;
//     return result;
// }
function getinputvalue() {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // clear input field
    depositInput.value = '';

    return depositAmount;
}


document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input');

    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    const depositAmount = getinputvalue();

    // get current deposit

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText)

    depositTotal.innerText = previousDepositTotal + depositAmount;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;


    // clear input field

    // depositInput.value = '';
});

document.getElementById('withdrow-button').addEventListener('click', function () {
    const withdrowInput = document.getElementById('withdrow-input');
    const withdrowAmountText = withdrowInput.value;
    const withdrowAmount = parseFloat(withdrowAmountText);



    const withdrowTotal = document.getElementById('withdrow-total');
    const withdrowTotalText = withdrowTotal.innerText;
    const previouswithdrowTotal = parseFloat(withdrowTotalText);


    // if (previousBalanceTotal > withdrowAmount) {
    //     withdrowTotal.innerText = previouswithdrowTotal + withdrowAmount;
    // }

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    if (previousBalanceTotal > withdrowAmount) {
        withdrowTotal.innerText = previouswithdrowTotal + withdrowAmount;
        balanceTotal.innerText = previousBalanceTotal - withdrowAmount;

    }
    else {
        alert('Insufficient Balance!')
    }



    // clear the fielde
    withdrowInput.value = '';
})