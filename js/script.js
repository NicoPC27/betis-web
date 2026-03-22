document.addEventListener("DOMContentLoaded", () => {

    // Filtro de jugadores (plantilla.html)
    const botones = document.querySelectorAll(".filtro-btn");
    const jugadores = document.querySelectorAll(".jugador");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            botones.forEach(b => b.classList.remove("active"));
            boton.classList.add("active");

            const filtro = boton.dataset.filter;

            jugadores.forEach(jugador => {
                jugador.style.display = (filtro === "all" || jugador.classList.contains(filtro)) ? "" : "none";
            });
        });
    });

    // Filtro de partidos por competición (partidos.html)
    const filtros = document.querySelectorAll(".filtro-partidos");
    const partidos = document.querySelectorAll(".partido");
    const textoBtn = document.querySelector("#btnFiltro .texto-btn");

    filtros.forEach(filtro => {
        filtro.addEventListener("click", (e) => {
            e.preventDefault();

            const tipo = filtro.dataset.filter;

            partidos.forEach(partido => {
                partido.style.display = (tipo === "all" || partido.classList.contains(tipo)) ? "block" : "none";
            });

            textoBtn.textContent = filtro.textContent;
        });
    });

    //Compra de entradas (taquilla.html)
    const form = document.getElementById("formCompra");
    const alerta = document.getElementById("alertaCompra");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Mostrar alerta
        alerta.classList.remove("d-none");

        // Cerrar modal
        const modal = bootstrap.Modal.getInstance(document.getElementById("modalCompra"));
        modal.hide();

        // Resetear form
        form.reset();
    });

});