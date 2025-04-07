const pergunta1 = document.getElementById("p1");
const pergunta2 = document.getElementById("p2");
const resposta1 = document.getElementById("r1");
const resposta2 = document.getElementById("r2");

pergunta1.addEventListener("click", () => {
    resposta1.classList.toggle("hidden");
});

pergunta2.addEventListener("click", () => {
    resposta2.classList.toggle("hidden");
});
