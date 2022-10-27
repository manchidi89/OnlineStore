const displayFirstItem = document.getElementById("item1");
const displaySecondItem = document.getElementById("item2");
const displayThirdItem = document.getElementById("item3");
const displayFourthItem = document.getElementById("item4");
const displayFifthItem = document.getElementById("item5");

const coupons = ["00BA", "77FD", "5RT6","YYTA45", "67FFGA"];//This data structure will hold the valid predefined coupon codes
let discountCoupon = 0.0;

function checkForCoupon(){//This function will determine whether the user will be discounted if and only if the user enter the valid coupone code
    for(let i = 0; i < coupons.length; i++){
        if(coupons[i] == $('#Coupon').val() && coupons[i].length == 4){
            discountCoupon = 0.25;

            break;
        }
        else if(coupons[i] == $('#Coupon').val() && coupons[i].length == 6){
            discountCoupon = 0.32;
            break;
    }
    else{
        discountCoupon = 0.0;
    }
}}

$(document).ready(function(){//This will update the overall totals when the page is loaded
    itemsAndTransportCost();
})

if (localStorage.getItem('subTotalOne') <= 0) {//This condition will ensure the the item is hidden from the page is the item was never added
    displayFirstItem.style.display = "none";

} else {
    displayFirstItem.style.display = "block";
    let pFirst = document.createElement("p")
    let pSecond = document.createElement("p");
    let horiFirst = document.createElement("hr");
    pFirst.innerHTML = "Number Of Added Items : " + localStorage.getItem("myFirstItem");
    pSecond.innerHTML = "Item Subtotal  : R" + localStorage.getItem("subTotalOne");
    displayFirstItem.append(pFirst, pSecond, horiFirst);


}

if (localStorage.getItem('subTotalTwo') <= 0) {//This condition will ensure the the item is hidden from the page is the item was never added
    displaySecondItem.style.display = "none";
} else {//This condition will ensure that the item is displayed on the page if and when is added to local storage
    displaySecondItem.style.display = "block";
    let pThird = document.createElement("p")
    let pFourth = document.createElement("p");
    let horiSecond = document.createElement("hr");
    pThird.innerHTML = "Number Of Added Items : " + localStorage.getItem("mySecondItem");
    pFourth.innerHTML = "Item Subtotal  : R" + localStorage.getItem("subTotalTwo");
    displaySecondItem.append(pThird, pFourth, horiSecond);
}
if (localStorage.getItem('subTotalThree') <= 0) {//This condition will ensure the the item is hidden from the page is the item was never added
    displayThirdItem.style.display = "none";
} else {//This condition will ensure that the item is displayed on the page if and when is added to local storage
    displayThirdItem.style.display = "block";
    let pFifth = document.createElement("p")
    let pSixth = document.createElement("p");
    let horiThird = document.createElement("hr");
    pFifth.innerHTML = "Number Of Added Items : " + localStorage.getItem("myThirdItem");
    pSixth.innerHTML = "Item Subtotal  : R" + localStorage.getItem("subTotalThree");
    displayThirdItem.append(pFifth, pSixth, horiThird);
}
if (localStorage.getItem('subTotalFourth') <= 0) {//This condition will ensure the the item is hidden from the page is the item was never added
    displayFourthItem.style.display = "none";
} else {//This condition will ensure that the item is displayed on the page if and when is added to local storage
    displayFourthItem.style.display = "block";
    let pSeventh = document.createElement("p")
    let pEighth = document.createElement("p");
    let horiFourth = document.createElement("hr");
    pSeventh.innerHTML = "Number Of Added Items : " + localStorage.getItem("myFourthItem");
    pEighth.innerHTML = "Item Subtotal  : R" + localStorage.getItem("subTotalFourth");
    displayFourthItem.append(pSeventh, pEighth, horiFourth);
}
if (localStorage.getItem('subTotalFifth') <= 0) {//This condition will ensure the the item is hidden from the page is the item was never added
    displayFifthItem.style.display = "none";
} else {//This condition will ensure that the item is displayed on the page if and when is added to local storage
    displayFifthItem.style.display = "block";
    let pNineth = document.createElement("p")
    let pTenth = document.createElement("p");
    let horiFifth = document.createElement("hr");
    pNineth.innerHTML = "Number Of Added Items : " + localStorage.getItem("myFifthItem");
    pTenth.innerHTML = "Item Subtotal  : R" + localStorage.getItem("subTotalFifth");
    displayFifthItem.append(pNineth, pTenth, horiFifth);
}


if (localStorage.getItem("TotalCartStorage") > 0) {//This condition will ensure the the item is hidden from the page is the item was never added
    let TotalAmout = parseFloat(JSON.parse(localStorage.getItem("GrandTotalStorage")));
    let TotalNumOfItems = parseFloat(JSON.parse(localStorage.getItem("TotalCartStorage")));
    let pShoppingCartItems = document.createElement("h4");
    pShoppingCartItems.id = "totalNumOfItems";
    pShoppingCartItems.innerHTML = "Overall Total Number Of Items : " + TotalNumOfItems;
    let pShoppingCart = document.createElement("h4");
    pShoppingCart.id = "totalAmount";
    pShoppingCart.innerHTML = "Overrall Total Amount Of Items : R" + TotalAmout;
    let PayBtn =document.createElement('button');
    PayBtn.innerHTML = "PAY";
    PayBtn.id = "Payment";
    $('#Payment').css('color','red');
    pShoppingCartItems.innerHTML = "Overall Total Number Of Items : " + TotalNumOfItems;
    document.getElementById("sumOfCart").append(pShoppingCartItems, pShoppingCart,PayBtn);
  
}
function itemsAndTransportCost(){//this method will ensure that the amount is always updated
    $("#totalNumOfItems").html("Overrall Total Number Of Items : " +  parseFloat(JSON.parse(localStorage.getItem("TotalCartStorage"))));
    $( "#totalAmount").html("Overrall Total Amount Of Items : R" + parseFloat(JSON.parse(localStorage.getItem("GrandTotalStorage"))));
}

$("#Payment").click(()=>{//this will allow the user to make payments of the items added to the cart
    alert("Thank you for doing business with us,you successfully paid R"+ parseFloat(JSON.parse(localStorage.getItem("GrandTotalStorage"))).toFixed(2)+" incl VAT of 15% into your account");
    $('#Payment').text("Paid");
    $('#Payment').css({'color': 'white', 'background-color': 'green', 'height':'60px', 'width':'100px','border-radius':'4px'});
})

let transportationType = "";
let transportationTypeCost = 0.0;
$("#confirmTransport").click(()=>{//when the confirm button is clicked the validation of the coupon is computed and transport type is returned and neccessary discounts are calculated
    checkForCoupon();
   transportationType =  $("#TransportationType").val();
   if(transportationType == "Delivery"){
    transportationTypeCost = 350.0;
    localStorage.setItem('GrandTotalStorage', (parseFloat(JSON.parse(localStorage.getItem('GrandTotalStorage'))) + transportationTypeCost) - ((parseFloat(JSON.parse(localStorage.getItem('GrandTotalStorage'))) + transportationTypeCost) * discountCoupon) );
}
else if(transportationType == "Collection"){
    transportationTypeCost = 0.0;
    localStorage.setItem('GrandTotalStorage', (parseFloat(JSON.parse(localStorage.getItem('GrandTotalStorage'))) + transportationTypeCost) - ((parseFloat(JSON.parse(localStorage.getItem('GrandTotalStorage'))) + transportationTypeCost) * discountCoupon) );
}
else{
    alert("Please Select Between Delivery or Collection To Procees!!!");
}
itemsAndTransportCost();
})