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
    document.getElementById('total-donate').innerText = sum;


    document.getElementById('input-field-money').value = '';

    inputFieldValue.value = '';
    

    const historyPage = document.getElementById('history-page');
    const createElement = document.createElement('div');
    createElement.classList.add('bg-red-100');
    createElement.classList.add('p-4');
    createElement.classList.add('text-center');
    createElement.classList.add('mb-5');
    createElement.classList.add('rounded');
createElement.innerHTML = `
<h3>Donate : ${inputFieldValue}</h3>
<h3>Available Balance Now :${availableBalanceDecrease}</h3>
<p>Date ${ new Date()}</p>
`
historyPage.appendChild(createElement);
});


document.getElementById('donation-btn').addEventListener('click', function () {
    getDonateBtn('donation-page');
});



document.getElementById('history-btn').addEventListener('click', function () {
    getHistoryBtn('history-page');
});
   


