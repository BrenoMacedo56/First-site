const button = document.querySelector(".Btn-platform");
const ElePlat = document.querySelector(".Btn-platform .platform");
button.addEventListener("click",() =>{
    const ActiveBT = ElePlat.classList.contains("ativo");

    if (ActiveBT) {
       ElePlat.classList.remove("ativo")
    }else{
        ElePlat.classList.add("ativo");
    }
})