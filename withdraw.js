document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-amount');
    const withdrawAmount = withdrawField.value;
    const withdrawBalance = parseFloat(withdrawAmount);

    if (isNaN(withdrawBalance)) {
        alert('Please enter a valid Number');
        return;
    }

    const withdrawCurrentBalance = document.getElementById('balance-withdraw');
    const withdrawCurrentBalanceString = withdrawCurrentBalance.innerText;
    const previousWithdrawBalance = parseFloat(withdrawCurrentBalanceString);

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);

    if (withdrawBalance > balanceTotal) {
        alert('You do not have enough funds to withdraw that amount');
        return;
    }

    const withdrawBalanceAmount = previousWithdrawBalance + withdrawBalance;
    withdrawCurrentBalance.innerText = withdrawBalanceAmount;

    const newBalanceTotal = balanceTotal - withdrawBalance;
    balanceTotalElement.innerText = newBalanceTotal;

    withdrawField.value = '';
})