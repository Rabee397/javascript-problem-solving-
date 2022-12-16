 var t =prompt("enter temperature degree")

 // transfer from 
 var cToF = ((t * 1.8) + 32)
 var fToC = ((t - 32)*.5556)
 var ans = document.getElementById("answer")
 var fah = document.getElementById("transfer-to-f")
 var cel = document.getElementById("transfer to c")
 
 //transfer from Celsius to Fahrenheit
 fah.onclick = function(){
   ans.innerHTML = t + "°" + " is " + cToF + "° f"
 }

 //transfer from Fahrenheit to Celsius  
 cel.onclick = function(){
   ans.innerHTML = t + "°" + "f" + " is " + fToC+ "° c"
 }