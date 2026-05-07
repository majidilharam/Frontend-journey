function showModal() {
    document.getElementById("modal").classList.remove("hidden")
}

function hideModal() {
    document.getElementById("modal").classList.add("hidden")
}

document.getElementById("modal").addEventListener("click", function(e){
    if(e.target === this) hideModal()
})