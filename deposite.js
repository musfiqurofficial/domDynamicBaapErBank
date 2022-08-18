document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-amount');
    const depositAmount = depositField.value;

    const currentBalance = document.getElementById('current-balance');
    const currentBalanceAmount = currentBalance.innerText;
    currentBalance.innerText = depositAmount;
    const depositBalance = parseFloat(currentBalanceAmount) + parseFloat(depositAmount);
    currentBalance.innerText = depositBalance;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal + parseFloat(depositAmount);
    balanceTotal.innerText = newBalanceTotal;




    depositField.value = '';

})