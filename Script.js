//identifier sur le bouton 
const btn = document.getElementById("btn")

//definir une function 
function handleClick(e){
    e.target.innerhtml = "Bonjour"
}

//rajouter un click event 
btn.addEventListener("click", handleClick)