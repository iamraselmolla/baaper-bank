
function calTotal(balanceId, inputID){
    const initBalance = parseFloat(document.querySelector(balanceId).innerText);
    const inputBalance = parseFloat(document.querySelector(inputID).value); 
    if( initBalance>=0 || initBalance === 'number' || initBalance !== '' || !isNaN(initBalance) ||
    inputID>=0 || inputID === 'number' || inputID !== '' || !isNaN(inputID) ){
        const TotalBalance =  initBalance + inputBalance;
    document.querySelector(inputID).value = '';
    return document.querySelector(balanceId).innerText = TotalBalance;
    }else{
        alert('Please input valid amount')
    }
}

document.querySelector('#btnDeposit').addEventListener('click', function(){
    calTotal('.depositAmount', '#wantToDeposit');
})
document.querySelector('#btnWithdraw').addEventListener('click', function(){
    calTotal('.withdrwAmount', '#wantToWithdraw');
})