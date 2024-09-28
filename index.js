let screen = document.getElementById("screen")
function to_append(val){
    screen.value+=val;
}

function to_clear(){
    screen.value="";
}
function back_space(){
    screen.value = screen.value.slice(0,-1)
}

function get_res(){
    screen.value=eval(screen.value)
}