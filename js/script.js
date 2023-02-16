function getElementInnerText(id) {
    return document.getElementById(id).innerText;
};
function setElementInnerText(id, innerText) {
    document.getElementById(id).innerText = innerText;
};
function getInputValue(id) {
    return parseFloat(document.getElementById(id).value);
};
function setInputValue(id, value) {
    document.getElementById(id).value = value;
};

const totalIncome = getInputValue('income-amount');
let balanceAfterExpenses;
document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodCost = getInputValue('food-amount');
    const rentCost = getInputValue('rent-amount');
    const clothesCost = getInputValue('clothes-amount');
    const totalExpenses = foodCost + rentCost + clothesCost;
    console.log(totalExpenses);
    if (foodCost > 0 && rentCost > 0 && clothesCost > 0) {
        setElementInnerText('expenses-amount', totalExpenses);

    } else {
        alert('Expenses must be number grater than zero')
    }
    if (totalIncome > 0) {
        balanceAfterExpenses = totalIncome - totalExpenses;
    } else {
        alert('Please Enter your income and it must be grater than zero');
    }
    if (!isNaN(balanceAfterExpenses)) {
        setElementInnerText('balance-amount', balanceAfterExpenses);
    }
});
document.getElementById('save-btn').addEventListener('click', function () {

    const savingsPercentage = getInputValue('save-amount') / 100;
    const savingsAmount = balanceAfterExpenses * savingsPercentage;

    const remainingBalance = balanceAfterExpenses - savingsAmount;
    if (!isNaN(savingsAmount) && !isNaN(remainingBalance)) {
        if (savingsAmount < balanceAfterExpenses) {
            setElementInnerText('saving-amount', savingsAmount);
            setElementInnerText('remaining-amount', remainingBalance);
            document.getElementById('error-message').style.display = 'none';
        } else {
            console.log(document.getElementById('error-message'));
            document.getElementById('error-message').style.display = 'block';
            document.getElementById('error-message').style.backgroundColor = 'red';
            document.getElementById('error-message').style.textAlign = 'center';
        }
    } else {
        alert('Please calculate your expenses first');
    }




});
