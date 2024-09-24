document.getElementById('second-donate-now').addEventListener('click',function(){
    const inputFieldValue=getInputValue('input2-field-money');
    const textInner=getInnerText('total2-donate');
    const availableBalance=getInnerText('avalable-balance');
    const availableBalanceDecrease=availableBalance-inputFieldValue;
    document.getElementById('avalable-balance').innerText=availableBalanceDecrease;
    const sum=inputFieldValue+textInner;
    document.getElementById('total2-donate').innerText=sum;
});