const rosa = document.getElementById("rosa");
let texto = document.getElementById("texto");

const cambioDeTexto = () =>{
    texto.textContent = "¿Vamos al cine mañana? Sale la peli :) "
}

rosa.addEventListener("click",cambioDeTexto);