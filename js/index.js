document.getElementById('first-donate-now').addEventListener('click',function(){
    const inputFieldValue=getInputValue('finput-field-money');
    const textInner=getInnerText('total-donate');
    const avalableBalance=getInnerText('avalable-balance');
    const avalableBalanceDicrez=avalableBalance-inputFieldValue;
    document.getElementById('avalable-balance').innerText=avalableBalanceDicrez;
    const sum=inputFieldValue+textInner;
    document.getElementById('total-donate').innerText=sum;
});

document.getElementById('donation-btn').addEventListener('click', function () {
    getDonateBtn('donation-page');
});
   