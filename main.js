const teclas = document.querySelectorAll(".tecla");

function tocarSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

teclas.forEach(tecla => {
    tecla.addEventListener("click", (event) => {
        let idElementoAudio = `#som_${event.target.classList[1]}`;
        tocarSom(idElementoAudio);
    });
});

teclas.forEach(tecla => {
    tecla.addEventListener("keydown", (event) => {
        if(event.code === "Space" || event.code === "Enter"){
            tecla.classList.add("ativa");
        }
    })
});

teclas.forEach(tecla => {
    tecla.addEventListener("keyup", () => {
        tecla.classList.remove("ativa");
    })
});