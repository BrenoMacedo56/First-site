const button = document.querySelector(".Btn-platform");
const ElePlat = document.querySelector(".Btn-platform .platform");

if (button && ElePlat) {
    button.addEventListener("click", () => {
        ElePlat.classList.toggle("ativo");
    });
}