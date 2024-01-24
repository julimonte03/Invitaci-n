const rosa = document.getElementById("rosa");
let texto = document.getElementById("texto");

const cambioDeTexto = () =>{
    texto.textContent = "¿Vamos al cine el mañana que sale la peli? :) "
}

rosa.addEventListener("click",cambioDeTexto);