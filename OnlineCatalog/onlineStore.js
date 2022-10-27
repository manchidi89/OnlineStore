const addToCartBtnFirst = document.getElementsByClassName("button")[0];
const addToCartBtnSecond = document.getElementsByClassName("button")[1];
const addToCartBtnThird = document.getElementsByClassName("button")[2];
const addToCartBtnFourth = document.getElementsByClassName("button")[3];
const addToCartBtnFifth = document.getElementsByClassName("button")[4];
//This objects will be used to retrieve the names of items 
const getFirstItemName = document.getElementById("myFirstItemName");
const getSecondItemName = document.getElementById("mySecondItemName");
const getThirdItemName = document.getElementById("myThirdItemName");
const getFourthItemName = document.getElementById("myFourthItemName");
const getFifthItemName = document.getElementById("myFifthItemName");
const myCartTotal = document.getElementById("totalCartItems");

//This declarations will get the price for each item in the shopping catalog
const firstItemPrice = parseFloat($("#myFirstItemPrice").text());
const secondItemPrice = parseFloat($("#mySecondItemPrice").text());
const thirdItemPrice = parseFloat($("#myThirdItemPrice").text());
const fourthItemPrice = parseFloat($("#myFourthItemPrice").text());
const fifthItemPrice = parseFloat($("#myFifthItemPrice").text());





//This class define the properties and methods to enable the user to add the item to the shopping cart
class OnlineItems {
    itemPrice = 0.0;
    numOfItems = 0;
    nameOfItem = "";
    counterId = "";
    subTotal = 0;
    vat = 0.15;

    getItemPrice(price) {
        this.itemPrice = price;
    }
    getNumOfAddedItems() {
        this.numOfItems = parseInt(JSON.parse(localStorage.getItem(this.counterId)));
        return this.numOfItems
    }

    setLocalStorageKeys(counterId, subTotal) { //This method will set the key/value pair in the local storage
        this.counterId = counterId;
        this.subTotal = subTotal;
    }
    setSumOfItems() { //this method will update the total of the item when an item is added to the cart

        localStorage.setItem(this.counterId, JSON.stringify(JSON.parse(localStorage.getItem(this.counterId)) + 1));

    }

    setMinusOftems() {
        localStorage.setItem(this.counterId, JSON.stringify(JSON.parse(localStorage.getItem(this.counterId)) - 1));
        localStorage.setItem(this.subTotal, JSON.stringify(JSON.parse(localStorage.getItem(this.subTotal)) - this.itemPrice));
    }
    getNameOfItem(name) { // This method will return the name of an added item
        this.nameOfItem = name;
    }
    setItemPrice(price) { //This method will calculate the price amount of items added to the cart ,including the VAT
        this.itemPrice = price;
        localStorage.setItem(this.subTotal, ((this.itemPrice + this.itemPrice * this.vat) * localStorage.getItem(this.counterId)));

    }
}

//This will update the grand total of items added to the shopping cart every time the page is loaded
$(document).ready(function () {
    localStorage.setItem("TotalCartStorage", JSON.stringify(JSON.parse(localStorage.getItem("myFirstItem")) + JSON.parse(localStorage.getItem("mySecondItem")) +
        JSON.parse(localStorage.getItem("myThirdItem")) + JSON.parse(localStorage.getItem("myFourthItem")) + JSON.parse(localStorage.getItem("myFifthItem"))));
    localStorage.setItem("GrandTotalStorage", JSON.stringify(JSON.parse(localStorage.getItem("subTotalOne")) + JSON.parse(localStorage.getItem("subTotalTwo")) +
        JSON.parse(localStorage.getItem("subTotalThree")) + JSON.parse(localStorage.getItem("subTotalFourth")) + JSON.parse(localStorage.getItem("subTotalFifth"))));
});

let OnlineItem = [4];
//This will instantiate the instances of the shopping items
OnlineItem[0] = new OnlineItems();
OnlineItem[1] = new OnlineItems();
OnlineItem[2] = new OnlineItems();
OnlineItem[3] = new OnlineItems();
OnlineItem[4] = new OnlineItems();






addToCartBtnFirst.addEventListener("click", () => {
    OnlineItem[0].setLocalStorageKeys("myFirstItem", "subTotalOne"); //This method call will set the subtotal key in localstorege
    OnlineItem[0].setSumOfItems();; //This method call will add the number of items added to the cart

    (OnlineItem[0].setItemPrice(firstItemPrice)); //This method call will set the price of item when the item is added to the cart
    localStorage.setItem("TotalCartStorage", JSON.stringify(JSON.parse(localStorage.getItem("myFirstItem")) + JSON.parse(localStorage.getItem("mySecondItem")) +
        JSON.parse(localStorage.getItem("myThirdItem")) + JSON.parse(localStorage.getItem("myFourthItem")) + JSON.parse(localStorage.getItem("myFifthItem"))));
    myCartTotal.innerHTML = localStorage.getItem("TotalCartStorage");
    localStorage.setItem("GrandTotalStorage", JSON.stringify(JSON.parse(localStorage.getItem("subTotalOne")) + JSON.parse(localStorage.getItem("subTotalTwo")) +
        JSON.parse(localStorage.getItem("subTotalThree")) + JSON.parse(localStorage.getItem("subTotalFourth")) + JSON.parse(localStorage.getItem("subTotalFifth"))));
    $('#grandTotal').html("R" + parseFloat(JSON.parse(localStorage.getItem('GrandTotalStorage'))).toFixed(2));
    alert("Successfully Added The " + getFirstItemName.innerHTML + " To The Cart, The Total Number Of Items Is Now " + OnlineItem[0].getNumOfAddedItems() + " Items, Amounting To The Total Of R" + parseFloat(JSON.parse(localStorage.getItem("subTotalOne"))).toFixed(2).toString() +" With VAT included");
})


addToCartBtnSecond.addEventListener("click", () => {
    OnlineItem[1].setLocalStorageKeys("mySecondItem", "subTotalTwo"); //This method call will set the subtotal key in localstorege
    OnlineItem[1].setSumOfItems(); //This method call will add the number of items added to the cart

    (OnlineItem[1].setItemPrice(secondItemPrice)); //This method call will set the price of item when the item is added to the cart
    localStorage.setItem("TotalCartStorage", JSON.stringify(JSON.parse(localStorage.getItem("myFirstItem")) + JSON.parse(localStorage.getItem("mySecondItem")) +
        JSON.parse(localStorage.getItem("myThirdItem")) + JSON.parse(localStorage.getItem("myFourthItem")) + JSON.parse(localStorage.getItem("myFifthItem"))));
    myCartTotal.innerHTML = localStorage.getItem("TotalCartStorage");
    localStorage.setItem("GrandTotalStorage", JSON.stringify(JSON.parse(localStorage.getItem("subTotalOne")) + JSON.parse(localStorage.getItem("subTotalTwo")) +
        JSON.parse(localStorage.getItem("subTotalThree")) + JSON.parse(localStorage.getItem("subTotalFourth")) + JSON.parse(localStorage.getItem("subTotalFifth"))));
    $('#grandTotal').html("R" + parseFloat(JSON.parse(localStorage.getItem('GrandTotalStorage'))).toFixed(2));
    alert("Successfully Added The " + getSecondItemName.innerHTML + " To The Cart, The Total Number Of Items Is Now " + OnlineItem[1].getNumOfAddedItems() + " Items, Amounting To The Total Of R" + parseFloat(JSON.parse(localStorage.getItem("subTotalTwo"))).toFixed(2).toString() +" With VAT included");
})


addToCartBtnThird.addEventListener("click", () => {
    OnlineItem[2].setLocalStorageKeys("myThirdItem", "subTotalThree"); //This method call will set the subtotal key in localstorege
    OnlineItem[2].setSumOfItems();; //This method call will add the number of items added to the cart

    (OnlineItem[2].setItemPrice(thirdItemPrice)); //This method call will set the price of item when the item is added to the cart
    localStorage.setItem("TotalCartStorage", JSON.stringify(JSON.parse(localStorage.getItem("myFirstItem")) + JSON.parse(localStorage.getItem("mySecondItem")) +
        JSON.parse(localStorage.getItem("myThirdItem")) + JSON.parse(localStorage.getItem("myFourthItem")) + JSON.parse(localStorage.getItem("myFifthItem"))));
    myCartTotal.innerHTML = localStorage.getItem("TotalCartStorage");
    localStorage.setItem("GrandTotalStorage", JSON.stringify(JSON.parse(localStorage.getItem("subTotalOne")) + JSON.parse(localStorage.getItem("subTotalTwo")) +
        JSON.parse(localStorage.getItem("subTotalThree")) + JSON.parse(localStorage.getItem("subTotalFourth")) + JSON.parse(localStorage.getItem("subTotalFifth"))));
    $('#grandTotal').html("R" + parseFloat(JSON.parse(localStorage.getItem('GrandTotalStorage'))).toFixed(2));
    alert("Successfully Added The " + getThirdItemName.innerHTML + " To The Cart, The Total Number Of Items Is Now " + OnlineItem[2].getNumOfAddedItems() + " Items, Amounting To The Total Of R" + parseFloat(JSON.parse(localStorage.getItem("subTotalThree"))).toFixed(2).toString() +" With VAT included");

})


addToCartBtnFourth.addEventListener("click", () => {
    OnlineItem[3].setLocalStorageKeys("myFourthItem", "subTotalFourth"); //This method call will set the subtotal key in localstorege
    OnlineItem[3].setSumOfItems();; //This method call will add the number of items added to the cart

    (OnlineItem[3].setItemPrice(fourthItemPrice)); //This method call will set the price of item when the item is added to the cart
    localStorage.setItem("TotalCartStorage", JSON.stringify(JSON.parse(localStorage.getItem("myFirstItem")) + JSON.parse(localStorage.getItem("mySecondItem")) +
        JSON.parse(localStorage.getItem("myThirdItem")) + JSON.parse(localStorage.getItem("myFourthItem")) + JSON.parse(localStorage.getItem("myFifthItem"))));
    myCartTotal.innerHTML = localStorage.getItem("TotalCartStorage");
    localStorage.setItem("GrandTotalStorage", JSON.stringify(JSON.parse(localStorage.getItem("subTotalOne")) + JSON.parse(localStorage.getItem("subTotalTwo")) +
        JSON.parse(localStorage.getItem("subTotalThree")) + JSON.parse(localStorage.getItem("subTotalFourth")) + JSON.parse(localStorage.getItem("subTotalFifth"))));
    $('#grandTotal').html("R" + parseFloat(JSON.parse(localStorage.getItem('GrandTotalStorage'))).toFixed(2));
    alert("Successfully Added The " + getFourthItemName.innerHTML + " To The Cart, The Total Number Of Items Is Now " + OnlineItem[3].getNumOfAddedItems() + " Items, Amounting To The Total Of R" + parseFloat(JSON.parse(localStorage.getItem("subTotalFourth"))).toFixed(2).toString() +" With VAT included");
})


addToCartBtnFifth.addEventListener("click", () => {
    OnlineItem[4].setLocalStorageKeys("myFifthItem", "subTotalFifth"); //This method call will set the subtotal key in localstorege
    OnlineItem[4].setSumOfItems(); //This method call will add the number of items added to the cart

    (OnlineItem[4].setItemPrice(fifthItemPrice)); //This method call will set the price of item when the item is added to the cart
    localStorage.setItem("TotalCartStorage", JSON.stringify(JSON.parse(localStorage.getItem("myFirstItem")) + JSON.parse(localStorage.getItem("mySecondItem")) +
        JSON.parse(localStorage.getItem("myThirdItem")) + JSON.parse(localStorage.getItem("myFourthItem")) + JSON.parse(localStorage.getItem("myFifthItem"))));
    myCartTotal.innerHTML = localStorage.getItem("TotalCartStorage");
    localStorage.setItem("GrandTotalStorage", JSON.stringify(JSON.parse(localStorage.getItem("subTotalOne")) + JSON.parse(localStorage.getItem("subTotalTwo")) +
        JSON.parse(localStorage.getItem("subTotalThree")) + JSON.parse(localStorage.getItem("subTotalFourth")) + JSON.parse(localStorage.getItem("subTotalFifth"))));
    $('#grandTotal').html("R" + parseFloat(JSON.parse(localStorage.getItem('GrandTotalStorage'))).toFixed(2));
    alert("Successfully Added The " + getFifthItemName.innerHTML + " To The Cart, The Total Number Of Items Is Now " + OnlineItem[4].getNumOfAddedItems() + " Items, Amounting To The Total Of R" + parseFloat(JSON.parse(localStorage.getItem("subTotalFifth"))).toFixed(2).toString() +" With VAT included");

})
//This will update the grand total next to the Shopping cart button
myCartTotal.innerHTML = localStorage.getItem("TotalCartStorage"); //This will update the total number of items added by user
if(parseFloat(JSON.parse(localStorage.getItem('GrandTotalStorage'))) > 0.0){
$('#grandTotal').html("R" + parseFloat(JSON.parse(localStorage.getItem('GrandTotalStorage'))).toFixed(2)); //This will update the grand total of how much the user needs to pay
}
else{
    $('#grandTotal').html("R" + "0.0"); //This will update the grand total of how much the user needs to pay
    }