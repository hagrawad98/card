let btn =document.getElementById("btn");
let icons=document.getElementById("icons");
btn.onclick =function visibility(){
    if(icons.style.visibility==="visible"){
        icons.style.visibility="hidden";
    }
else{
    icons.style.visibility="visible";
}
}