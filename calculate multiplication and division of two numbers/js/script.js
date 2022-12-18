var num1 = document.getElementById("first-num")
var num2 = document.getElementById("second-num")
var multiBtn = document.getElementById("multiply-btn")
var diviBtn = document.getElementById("divide-btn")
var res = document.getElementById("result")


multiBtn.onclick = function(){
    res.innerHTML = num1.value * num2.value
}

diviBtn.onclick = function(){
    res.innerHTML = num1.value / num2.value
}