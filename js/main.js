$(document).ready(function () {
    const dropdown = $("#dropdown");

    $(".langList").on('mouseenter', function () {
        dropdown.show();
    });

    $(".langList").on('mouseleave', function () {
        dropdown.hide();
    });

    /* APLICAR A PARTIR DE CERTA RESOLUÇÃO (MOBILE)
    
    $('nav div a').click(function () {
        $(this).css("color", "#979797").css("transition", "color 0.15s");

        const thiis = $('nav div a');

        setTimeout(function(){
            thiis.css("color", "black")
        }, 300)
})
    
    */

})