var user_input = document.getElementById("user_input")
var ex = ""
function press(i) {
    ex += i
    user_input.value = ex;
}

function erase(){
    ex = "";
    user_input.value = ex;
}



function equal(){
    var equal = 
    ex = eval(user_input.value)
    user_input.value = ex
    ex = "";

}