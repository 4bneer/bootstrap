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

    // Variáveis para armazenar os limites de resolução







    const mdInitialResolution = 768;
    const mdFinalResolution = 991;

    const lgInitialResolution = 992;
    const lgFinalResolution = 1199;

    const lastResolution = 1200;

    const asideRemoved = $("aside").remove()

    // Função para verificar se a resolução está entre os limites
    function isBetween(initial, final, widthResolution) {
        return (widthResolution >= initial) && (widthResolution <= final);
    }

    function isAbove(initial, widthResolution) {
        return widthResolution >= initial
    }

    // Função para atualizar as classes com base na resolução
    function updateClassesBasedOnResolution() {
        const widthResolution = $(window).width();

        switch (true) {
            case isAbove(lastResolution, widthResolution):
                $("div.col-lg-4")
                    .removeClass()
                    .addClass("col-3");
                $("div.post>img").attr("src", "https://via.placeholder.com/240x190")
                $("#mainContent").append(asideRemoved);
                break;
            case isBetween(lgInitialResolution, lgFinalResolution, widthResolution):
                $("div.col-3")
                    .addClass("col-lg-4")
                    .removeClass("col-3");
                $("div.post>img").attr("src", "https://via.placeholder.com/240x190")
                $("aside").remove();
                break;
            case isBetween(mdInitialResolution, mdFinalResolution, widthResolution):
                $("div.col-3")
                    .addClass("col-md-4")
                    .removeClass("col-3");
                $("div.post>img").attr("src", "https://via.placeholder.com/216x171")
                $("aside").remove();
                break;

            default:
                $("div.col-lg-4")
                    .addClass("col-3")
                    .removeClass();
                $("#mainContent").append(asideRemoved);
                break;
        }

    }

    // Chamar a função de atualização quando a página carregar
    $(document).ready(updateClassesBasedOnResolution);

    // Chamar a função de atualização sempre que a janela for redimensionada
    $(window).resize(updateClassesBasedOnResolution);


})