document.getElementById('third-donate-now').addEventListener('click',function(){
    const inputFieldValue=getInputValue('input3-field-money');
    const textInner=getInnerText('total3-donate');
    const availableBalance=getInnerText('avalable-balance');
    const availableBalanceDecrease=availableBalance-inputFieldValue;
    document.getElementById('avalable-balance').innerText=availableBalanceDecrease;
    const sum=inputFieldValue+textInner;
    document.getElementById('total3-donate').innerText=sum;
});