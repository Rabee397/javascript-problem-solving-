var side1 = 5
var side2 = 6
var side3 = 7
var s = (5+6+8)/2 
var areaOfTrinagle = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)))
var btn = document.querySelector(".btn")
var answer = document.querySelector(".answer")
 btn.onclick = function(){
    answer.innerHTML =  (areaOfTrinagle)
}

