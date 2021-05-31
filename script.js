$(document).ready(function () {

    function utrata() {
        suma = 0;
        cenaZpatecniLetenky = 2;
        if ($('#letPraha_value').prop("selected"))
            suma += parseInt(($('#letPraha_value').val()) * parseInt($('#pocetKusu').val()));

        if ($('#letFrankfurt_value').prop("selected"))
            suma += parseInt(($('#letFrankfurt_value').val()) * parseInt($('#pocetKusu').val()));


        if ($('#letNewYork_value').prop("selected"))
            suma += parseInt(($('#letNewYork_value').val()) * parseInt($('#pocetKusu').val()));


        if ($('#letSydney_value').prop("selected"))
            suma += parseInt(($('#letSydney_value').val()) * parseInt($('#pocetKusu').val()));

        if ($('#zpatecniLetenka').prop("checked"))
            suma *= cenaZpatecniLetenky;

        if ($('#trida2').prop("checked"))
            suma = (1.25 * suma);

        else if ($('#trida3').prop("checked"))
            suma = (1.50 * suma);
        $('#celkem').val(suma);
    }

    $('#utrata').on("click", utrata); // MUSI BYT MIMO funkci!!!!!!!
    $('#potvrzeni').click(function () {
        let suma = vysledek.celkem.value;
        if (parseInt($('#ochotny').val()) >= suma)
            $('#napis').responseText($('#reality').val("Mate dostatecny obnos"));
        else
            $('#napis').responseText($('#reality').val("Nemate dostatecny obnos"));

        //.responseText - vychytavka at se NEnapise 1) [object object] 2) NEodradkuje se

    });
    $("#poznamka").keypress(function(promenna){
        var keycode=promenna.which;
        if ((keycode!=13&&keycode!=10&&keycode!=32&&keycode!=44&&keycode!=46)&&(keycode<48||keycode>57)&&(keycode<65||keycode>90)&&(keycode<97||keycode>122))
            return false;
    })
});