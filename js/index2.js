document.getElementById('second-donate-now').addEventListener('click',function(){
    const inputFieldValue=getInputValue('input2-field-money');
    const textInner=getInnerText('total2-donate');
    const availableBalance=getInnerText('avalable-balance');
    const availableBalanceDecrease = availableBalance - inputFieldValue;
    


    if (availableBalanceDecrease <= 0 ||inputFieldValue<= 0) {
        alert('Not enough Money Enter Proper Amount')
        return
    } else {

        const textInner = getInnerText('total2-donate');
        document.getElementById('avalable-balance').innerText = availableBalanceDecrease;
        const sum = inputFieldValue + textInner;
        document.getElementById('total2-donate').innerText = sum;
        alert('Congratulation!!! Success Your Donation'); 
    };

    document.getElementById('input2-field-money').value = '';
    
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
<p>Date ${new Date()}</p>
`
    historyPage.appendChild(createElement);



    document.getElementById('avalable-balance').innerText=availableBalanceDecrease;
    const sum=inputFieldValue+textInner;
    document.getElementById('total2-donate').innerText=sum;
});



