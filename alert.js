
function alert_ingre(){
    let name_ingredient = document.getElementById('name').value
    let amount = document.getElementById('amount').value
    let unit = document.getElementById('unit').value
    if(amount > 10000 || amount <=0){
        alert("กรอกข้อมูลผิดเกินที่กำหนด")
    }
    if(name_ingredient = ("-,/#$=!1234567890")){
        alert("กรอกข้อมูลผิดเกินที่กำหนด")
    
    }
    console.log(name_ingredient,amount,unit)
 
}

function alert_top(){
    let name_topping = document.getElementById('name').value
    let price = document.getElementById('price').value
    let amount2 = document.getElementById('amount').value
    let unit = document.getElementById('unit').value
    if(amount2 > 10000 || amount2 <=0){
        alert("กรอกข้อมูลผิดเกินที่กำหนด")
    }
    if(name_topping = ("-,/#$=!1234567890")){
        alert("กรอกข้อมูลผิดเกินที่กำหนด")
    
    }
    console.log(name_topping,price,amount2,unit)
}
 
function alert_menu(){
    let name_menu = document.getElementById('name').value
    let detail = document.getElementById('detail').value
    let price = document.getElementById('price').value
    
    if(price > 1000|| price <=0){
        alert("กรอกข้อมูลผิดเกินที่กำหนด")
    }
    if(name_menu = ("-,/#$=!1234567890")){
        alert("กรอกข้อมูลผิดเกินที่กำหนด")
    
    }
    
    console.log(name_menu,detail,price)

}
