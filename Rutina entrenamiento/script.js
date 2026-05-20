
// Esto es para poder darle click en una imagen y a la que le des se ponga como la imagen principal
document.querySelectorAll('.ejercicio').forEach(img => {
    img.onclick = () => {
        document.getElementById('primera-foto').src = img.src;
    };
});

//  Esto es sobre el menú, para que cuando le das click al botón se desplieguen las opciones
var menudesplegable = document.getElementById("menudesplegable");
var menubtn = document.getElementById("menubtn");
menubtn.addEventListener("click", function () {
    menudesplegable.classList.toggle("oculto")
});

// Esto es la funcionalidad de la calculadora
document.getElementById("Calcular-total").addEventListener("click", function() { // 
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let imc = peso / (altura * altura) |0; // el cálculo
 document.getElementById("resultado").textContent = "tu imc es:" + imc; // |0 hace que te salga el numero entero sin decimales
 document.getElementById("resultado").style.color = "black"; // cambiar el color poniendolo negro
});
