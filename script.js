var bar1=document.getElementsByClassName("menu-icon")
var navbar=document.getElementById("navbar")
var bar2=document.getElementById("menu")

function menu(){
    if(navbar.style.display=="none"){
       navbar.style.display="block"
    }
    else{
        navbar.style.display="none"
    }    
}