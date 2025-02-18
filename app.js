// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", () => {
    const inputNombre = document.getElementById("nombre");
    const btnAgregar = document.getElementById("agregar");
    const btnSortear = document.getElementById("sortear");
    const listaNombres = document.getElementById("lista-nombres");
    const resultado = document.getElementById("resultado");
    
    let nombres = [];

    // Agregar nombres a la lista
    btnAgregar.addEventListener("click", () => {
        const nombre = inputNombre.value.trim();
        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }
        
        nombres.push(nombre);
        actualizarLista();
        inputNombre.value = "";
    });

    // Sortear un nombre aleatorio
    btnSortear.addEventListener("click", () => {
        if (nombres.length === 0) {
            alert("No hay nombres en la lista para sortear.");
            return;
        }
        
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        resultado.textContent = `El amigo secreto es: ${nombres[indiceAleatorio]}`;
    });

    // Actualizar la lista de nombres en pantalla
    function actualizarLista() {
        listaNombres.innerHTML = "";
        nombres.forEach(nombre => {
            const li = document.createElement("li");
            li.textContent = nombre;
            listaNombres.appendChild(li);
        });
    }
});
