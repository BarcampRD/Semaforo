function start() {
                //Cantidad de minutos * 60 segs.
    var maxTime = 50 * 60, mins, secs, momento = $("#momento");

    momento.text("Charla");
    $("#imagen-verde").removeClass('hidden');
    $("#imagen-red").addClass("hidden");
    $("#button-restart").addClass("hidden");

    var interval = setInterval(function () {

        --maxTime;

        mins = parseInt(maxTime / 60, 10);
        secs = parseInt(maxTime % 60, 10);

        var minutes = mins < 10 ? "0" + mins : mins;
        var seconds = secs < 10 ? "0" + secs : secs;
        $("#timer").text(minutes + ":" + seconds);

        var val = maxTime;
        if (val < 10 * 60 && val > 0) {
            $("#imagen-verde").addClass("hidden");
            $("#imagen-yellow").removeClass("hidden");
            momento.text('Tiempo de preguntas');
        } else if (val === 0) {
            $("#imagen-red").removeClass("hidden");
            $("#imagen-yellow").addClass("hidden");
            $("#button-restart").removeClass("hidden");
            momento.text('Fin de la tanda');
            clearInterval(interval);
        }
    }, 1000);
}

$(document).ready(function () {
    var button = $("#button-start");
    button.on('click', function () {
        button.addClass('hidden');
        $("#timer").removeClass('hidden');
        // odoo.default({el: '.js-odoo', from: '', to: 'Charla', animationDelay: 1000});
        start();
    });
});