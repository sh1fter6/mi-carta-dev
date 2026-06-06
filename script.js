$(document).ready(function () {
    let activaciones = 0;

    // 1. Clic en el botón para activar/desactivar la habilidad
    $("#btn-activar").click(function () {
        if ($("body").hasClass("bg-gif")) {
            // Desactivar
            $("body").removeClass("bg-gif");
            $("#btn-activar").text("Activar habilidad");
        } else {
            // Activar
            alert("¡Brujería Web activada!");
            $("body").addClass("bg-gif");
            $("#btn-activar").text("Desactivar habilidad");

            // Incrementar y actualizar el contador
            activaciones++;
            $("#contador").text(activaciones);
            
            // Activar animación de brillo (y remover la clase al finalizar)
            $(".carta").addClass("activa");
            setTimeout(function () {
                $(".carta").removeClass("activa");
            }, 500);
        }
    });

    // 2. Hover sobre la carta para cambiar dinámicamente la rareza por algo divertido
    const originalRareza = $(".rareza-text").text();
    $(".carta").hover(
        function () {
            $(".rareza-text").text("DIV MASTER");
        },
        function () {
            $(".rareza-text").text(originalRareza);
        }
    );
});