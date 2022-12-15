var guess = prompt("enter number")
var rand = Math.ceil(Math.random()*10) 
if (guess == rand){
    alert("good work")
}else{
    alert("not matching")
}