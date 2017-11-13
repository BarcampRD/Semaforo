function start() {
    var maxTime = 2 * 60, mins, secs, momento = $("#momento");
    var i = 0;
    var interval = setInterval(function () {
        mins = parseInt(maxTime / 60, 10);
        secs = parseInt(maxTime % 60, 10);

        --maxTime;
        var val = maxTime;
        if (val < 1*60 && val > 0) {
            momento.text('Tiempo de preguntas');
            document.body.style.backgroundColor = "yellow";
        } else if (val === 0) {
            momento.text('Fin de la tanda');
            document.body.style.backgroundColor = "red";
            momento.addClass('fin-tanda-color');
            $("#button-start").removeClass('hidden');
            clearInterval(interval);
        }
    }, 1000);
}

$(document).ready(function () {
    var button = $("#button-start"), momento = $("#momento");
    button.on('click', function () {
        button.addClass('hidden');
        momento.text("Charla");
        //odoo.default({ el:'.js-odoo', from: '', to: 'Charla', animationDelay: 1000 });
        start();
    });
});