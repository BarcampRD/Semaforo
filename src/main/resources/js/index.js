function start() {
    var maxTime = 1 * 60, mins, secs, momento = $("#momento"), imagen =  $("#imagen");
    var i = 0;
    var interval = setInterval(function () {
        mins = parseInt(maxTime / 60, 10);
        secs = parseInt(maxTime % 60, 10);

        --maxTime;
        var val = maxTime;
        if (val < 0.5*60 && val > 0) {
            momento.text('Tiempo de preguntas');
            //document.body.style.backgroundColor = "yellow";
            imagen.attr('src', '/img/yellow.png');
        } else if (val === 0) {
            momento.text('Fin de la tanda');
            //document.body.style.backgroundColor = "red";
            imagen.attr('src', '/img/red.png');
            //momento.addClass('fin-tanda-color');
            clearInterval(interval);
        }
    }, 1000);
}

$(document).ready(function () {
    var button = $("#button-start"), momento = $("#momento");
    button.on('click', function () {
        button.addClass('hidden');
        momento.text("Charla");
        $("#imagen").removeClass('hidden');
        //odoo.default({ el:'.js-odoo', from: '', to: 'Charla', animationDelay: 1000 });
        start();
    });
});