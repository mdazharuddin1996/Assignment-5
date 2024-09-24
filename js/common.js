function getInputValue(id){
   
    const getValue=parseFloat(document.getElementById(id).value);
    return getValue;
    
};
function getInnerText(id){
   
    const getTextInner=parseFloat(document.getElementById(id).innerText);
    return getTextInner;
    
};

function getDonateBtn(id) {
    document.getElementById(id).classList.add('hidden');
    
};
