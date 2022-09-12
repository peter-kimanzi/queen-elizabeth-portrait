var queen = document.getElementById('queen');

function animateQueen() {
queen.classList.toggle('smile');
}

queen.addEventListener("click", animateQueen);