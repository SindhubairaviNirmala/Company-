var bar1=document.getElementsByClassName("menu-icon")
var navbar=document.getElementById("navbar")
var bar2=document.getElementById("menu")

function menu(){
    if(navbar.style.display=="block"){
       navbar.style.display="none"
    }
    else{
        navbar.style.display="block"
    }    
}