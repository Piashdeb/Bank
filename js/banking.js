// function dubbleIt(num) {
//     const result = num * 2;
//     return result;
// }
function getinputvalue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}


document.getElementById('deposit-button').addEventListener('click', function () {

    const depositAmount = getinputvalue('deposit-input');
    updateTotalField('deposit-total', depositAmount);
    updateBalance(depositAmount, true);

    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    

    // get current deposit total

    /*  const depositTotal = document.getElementById('deposit-total');
     const depositTotalText = depositTotal.innerText;
     const previousDepositTotal = parseFloat(depositTotalText)
 
     depositTotal.innerText = previousDepositTotal + depositAmount; */
    

    // update balance
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
    */
    // clear input field

    // depositInput.value = '';
});

document.getElementById('withdrow-button').addEventListener('click', function () {
    
    const withdrowAmount = getinputvalue('withdrow-input');
    updateTotalField('withdrow-total', withdrowAmount);
    updateBalance(withdrowAmount, false);
    
    // const withdrowInput = document.getElementById('withdrow-input');
    // const withdrowAmountText = withdrowInput.value;
    // const withdrowAmount = parseFloat(withdrowAmountText);
    


    // update withdrow total
    /*     
        const withdrowTotal = document.getElementById('withdrow-total');
        const withdrowTotalText = withdrowTotal.innerText;
        const previouswithdrowTotal = parseFloat(withdrowTotalText);
        withdrowTotal.innerText = previouswithdrowTotal + withdrowAmount;
         */
    


    // update balance
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrowAmount;
     */
    

    // if (previousBalanceTotal > withdrowAmount) {
        // depositTotal.innerText = previousDepositTotal + depositAmount;
        // balanceTotal.innerText = previousBalanceTotal - withdrowAmount;

    // }
   /*  else {
        alert('Insufficient Balance!')
    }



    // clear the fielde
    withdrowInput.value = ''; */
})