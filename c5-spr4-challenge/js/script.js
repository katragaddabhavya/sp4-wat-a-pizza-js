// Write solution code here to dynamically add the form fields 
let count=0;
function AddOrder(event){
    event.preventDefault();
    let orderElement = document.createElement('form');
     orderElement.innerHTML=`<div>
    <label for="Cateogry Name" class="form-label ">Cateogry Name</label>
    <input type="text" class="form-control" id="category${count}"  placeholder="Enter The category">
    </div>
    <div>
    <label for="Item Name" class="form-label">Item Name</label>
    <input type="text" class="form-control" id="item${count}"  placeholder="Please Enter the name">
    </div>
    <div>
    <label for="Price" class="form-label">Price</label>
    <input type="text" class="form-control" id="price${count}"  placeholder="Please Enter the Price">
    </div>
    <div>
    <label for="Quantity" class="form-label">Quantity</label>
    <input type="text" class="form-control" id="quantity${count}" placeholder="0">
    </div>
    <div>
    <label for="Order Amount" class="form-label">Order Amount</label>
    <input type="text" class="form-control" id="amount${count}" placeholder="0">
    </div>`
    const orderData=document.getElementById("Orders");
    orderData.appendChild(orderElement);
   
    calculateAmount(`price${count}`,`quantity${count}`,`amount${count}`);
    count=count+1;

    // savingOrderdDetrail(`category${counter}`,`item${counter}`,`price${counter}`,`quantity${counter}`,`amount${counter}`);
}


let amtarr=[];
function calculateAmount(price,quantity,amount){
    
   
    let Price=document.getElementById(price);
    let Quantity=document.getElementById(quantity);
    let Amount=document.getElementById(amount);
   
    Quantity.addEventListener("input", () => {
        Amount.value = Price.value * Quantity.value;
        amtarr.push(parseInt(Amount.value));
    })
   
   
   
    
}



let sum=0;
function calculateTotalAmt(){
    let totalAmount=document.getElementById("TotalAmount");
    for(let i=0;i<amtarr.length;i++){
        sum+=amtarr[i];
    }
    totalAmount.value=sum;
    console.log("In claculate total amt")
}
// Save the order details on clicking the submit button


let customerDetails = [];

function savingCustomerDetails() {
    const id = document.getElementById('OrderId').value;
    const date = document.getElementById('orderDate').value;
    const name = document.getElementById('CustomerName').value;
    const email = document.getElementById('email').value;
    const phone_number = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    
    let obj = {
        "Order_Id": id,
        "Date": date,
        "Customer_Name": name,
        "Email": email,
        "Phone_Number": phone_number,
        "Address": address
      
    }
    
    customerDetails.push(obj);
    console.log(id)
    console.log(obj);
    console.log("in save customer")
    console.log(customerDetails);
    
    
}



// Save the order details on clicking the submit button
let orderList = [];
function savingOrderdDetrail(categoryname,itemname ,price,quantity,orderAmountperitem) {
    let categoryOfOrder=document.getElementById(categoryname).value;
    let itemname1=document.getElementById(itemname).value;
    let priceOfItem=document.getElementById(price).value;
    let quantityOfOrder=document.getElementById(quantity).value;
    let orderAmounPerItem=document.getElementById(orderAmountperitem).value;
    let orderObj={
        category_of_order: categoryOfOrder,
        name_of_item: itemname1,
        price_of_the_item: priceOfItem,
        quantity_of_item: quantityOfOrder,
        amount_per_item: orderAmounPerItem
    }
    orderList.push(orderObj);
    console.log(orderObj);

}
function SaveOrder(){
   
    
    calculateTotalAmt();
    savingCustomerDetails();
    
    aleartf();
    
    
}
function aleartf()
{
    
    alert(`Order has been submitted your bill is ${sum}`);
    
}