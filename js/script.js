document.querySelector(".menu-burger").addEventListener("click", function(){

    document.querySelector("#burger-1").classList.toggle("burger-1")
    document.querySelector("#burger-2").classList.toggle("burger-2")
    document.querySelector("#burger-3").classList.toggle("burger-3")

    document.querySelector(".menu-escondido").classList.toggle("display-none")
    
})