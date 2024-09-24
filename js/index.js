document.getElementById('first-donate-now').addEventListener('click',function(){
    const inputFieldValue = getInputValue('input-field-money');
    const availableBalance = getInnerText('avalable-balance');

    if (inputFieldValue < 0 ||availableBalance < 0 ) {
        alert('Not enough Money')
        return}

    const textInner=getInnerText('total-donate');
    const availableBalanceDecrease=availableBalance-inputFieldValue;
    document.getElementById('avalable-balance').innerText=availableBalanceDecrease;
    const sum=inputFieldValue+textInner;
    document.getElementById('total-donate').innerText=sum;
});


document.getElementById('donation-btn').addEventListener('click', function () {
    getDonateBtn('donation-page');
});



document.getElementById('history-btn').addEventListener('click', function () {
    getHistoryBtn('history-page');
});
   