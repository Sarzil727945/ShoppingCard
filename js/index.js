document.getElementById('btn-phoneAdd').addEventListener('click', function(){
     const inputPhoneAdd = productAdd('input-phoneNumber');
     const totalPhoneAddPrice = phonesPriceAdd(inputPhoneAdd);
     subTotal();
     allTax();
     total();
  });
  document.getElementById('btn-phoneSub').addEventListener('click', function(){
     const inputPhoneSub = productSub('input-phoneNumber');
     const totalPhoneSubPrice = phonesPriceSub(inputPhoneSub);
     subTotal();
     allTax();
     total();
  });

  document.getElementById('btn-coverAdd').addEventListener('click', function(){
     const inputCoverAdd = productAdd('input-coverNumber');
     const totalCoverAddPrice = coverPriceAdd(inputCoverAdd);
     subTotal();
     allTax();
     total(); 
  }); 
  document.getElementById('btn-coverSub').addEventListener('click', function(){
     const inputCoverSub = productSub('input-coverNumber');
     const totalCoverSubPrice = coverPriceSub(inputCoverSub);
     subTotal();
     allTax();
     total();
  });
  // phonesPrice function
     function phonesPriceAdd(phoneNumberId){
     const PhonePrice = document.getElementById('totalPhone-price');
     const totalPhonePrice =  phoneNumberId*1219;
     PhonePrice.innerText = totalPhonePrice;
     return totalPhonePrice;
  }   
  function phonesPriceSub(phoneNumberId){
     const PhonePrice = document.getElementById('totalPhone-price');
     const totalPhonePrice =  (phoneNumberId*1219)-1219;
     if (isNaN(totalPhonePrice)) {
        return;
     }
     PhonePrice.innerText = totalPhonePrice;
     return totalPhonePrice;
  }  
  // coverPrice function
     function coverPriceAdd(coverNumberId){
     const coverPrice = document.getElementById('totalCover-price');
     const totalCoverPrice =  coverNumberId*59;
     coverPrice.innerText = totalCoverPrice;
     return totalCoverPrice;
  }   
  function coverPriceSub(coverNumberId){
     const coverPrice = document.getElementById('totalCover-price');
     const totalCoverPrice =  (coverNumberId*59)-59;
     if (isNaN(totalCoverPrice)) {
        return;
     }
     coverPrice.innerText = totalCoverPrice;
     return totalCoverPrice;
  }

  // productAdd function 
  function productAdd(inputProductId){
     const inputAdd = document.getElementById(inputProductId);
     const inputAddString = inputAdd.value;
     const inputAddNumber = Number(inputAddString);
     const inputAddPush = inputAddNumber+1;
     inputAdd.value = inputAddPush;
     return inputAddPush;
  }

  // productSub function 
  function productSub(inputProductId){
     const inputSub = document.getElementById(inputProductId);
     const inputSubString = inputSub.value;
     const inputSubNumber = +inputSubString;
     if(inputSubNumber <= 0){
        return;
     }
     const inputSubPush = inputSubNumber-1;
     inputSub.value = inputSubPush;
     return inputSubNumber; 
  }

  // subTotal function 
  function subTotal(){
     const totalPhonePrice = document.getElementById('totalPhone-price');
     const totalPhonePriceNumber = Number(totalPhonePrice.innerText);
     const totalCoverPrice = document.getElementById('totalCover-price');
     const totalCoverPriceNumber = Number(totalCoverPrice.innerText);
     const subTotal = totalPhonePriceNumber + totalCoverPriceNumber;
     const subTotalPlace =  document.getElementById('sub-total');
     subTotalPlace.innerText = subTotal;
  }

// tax function 
  function allTax(){
     const totalSub = document.getElementById('sub-total');
     const totalSubNumber = Number(totalSub.innerText);
     const taxTotalString =  (totalSubNumber * 0.1).toFixed(2);
     const taxTotal = +taxTotalString; 
     const taxTotalPlaces = document.getElementById('tax-total');
     taxTotalPlaces.innerText = taxTotal;
  }

//   total function 
function total(){
     const subTotalPlace = document.getElementById('sub-total');
     const subTotals = Number(subTotalPlace.innerText);
     const taxTotalPlace = document.getElementById('tax-total');
     const taxTotals = Number(taxTotalPlace.innerText);
     const total = subTotals + taxTotals;
     const totalValue = document.getElementById('total');
     totalValue.innerText = total;
}

document.getElementById('btn').addEventListener('click', function(){
   alert('Your order successful!! thank you so much');

   const inputPhoneNumber = document.getElementById('input-phoneNumber');
   inputPhoneNumber.value='1';
   const totalPhonePrice = document.getElementById('totalPhone-price');
   totalPhonePrice.innerText='1219';

   const inputCoverNumber = document.getElementById('input-coverNumber');
   inputCoverNumber.value='1';
   const totalCoverPrice = document.getElementById('totalCover-price');
   totalCoverPrice.innerText = '59';

   const subTotal = document.getElementById('sub-total');
   subTotal.innerText = '1,278';
   const taxTotal = document.getElementById('tax-total');
   taxTotal.innerText = '0';
   const Total = document.getElementById('total');
   Total.innerText = '1,278';

  });