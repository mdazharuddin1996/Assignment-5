


function getDonateBtn(id) {
    document.getElementById(id).classList.remove('hidden');
    document.getElementById('history-page').classList.add('hidden');
};

function getHistoryBtn(id) {
    document.getElementById(id).classList.remove('hidden');
    document.getElementById('donation-page').classList.add('hidden');
};

function getInnerText(id){
    const getTextInner = parseFloat(document.getElementById(id).innerText);
    return getTextInner;  
};


function getInputValue(id) {
    const getValue = parseFloat(document.getElementById(id).value);
    return getValue;
};





