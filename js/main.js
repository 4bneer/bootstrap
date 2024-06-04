$(document).ready(function () {
    const dropdown = $("#dropdown");

    $(".langList").on('mouseenter', function () {
        dropdown.show();
    });

    $(".langList").on('mouseleave', function () {
        dropdown.hide();
    });

    $('nav div a').click(function () {
        $(this).css("color", "#979797").css("transition", "color 0.15s");
        const thiis = $('nav div a');
        setTimeout(function () {
            thiis.css("color", "black")
        }, 300)
    });

    $('#subscribeButton').click(function () {
        $(this).css("background-color", "#326891").css("transition", "background-color .1s");
        const thisButton = $('#subscribeButton');
        setTimeout(function () {
            thisButton.css("background-color", "#567b95")
        }, 200)
    });

    /*
    
        --- FAZER SITE EM PT-BR
        --- FAZER A PARTE DO SUBSCRIBE
        --- FAZER O DROPDOWN FUNCIONAR BONITO
        --- ADICIONAR NOTICIAS "REAIS"
        --- DIVIDIR AS NOTICIAS NA RESOLUCAO COL-SM-6 PARA NAO FICAR ESPACO EM BRANCO

    */

    const smInitialResolution = 576;
    const smFinalResolution = 767;

    const mdInitialResolution = 768;
    const mdFinalResolution = 991;

    const lgInitialResolution = 992;
    const lgFinalResolution = 1199;

    const lastResolution = 1200;
    const firstResolution = 575

    const asideRemoved = $("aside").remove()

    function isBetween(initial, final, widthResolution) {
        return (widthResolution >= initial) && (widthResolution <= final);
    }

    function isAbove(initial, widthResolution) {
        return widthResolution >= initial
    }

    function isUnder(initial, widthResolution) {
        return widthResolution <= initial
    }

    function updateClassesBasedOnResolution() {
        const widthResolution = $(window).width();

        switch (true) {
            case isAbove(lastResolution, widthResolution):
                $("div.col-lg-4")
                    .removeClass()
                    .addClass("col-3");
                $("div.post>img").attr("src", "https://via.placeholder.com/240x190");
                $("div.post").css("width", "240px");
                $("#mainContent").append(asideRemoved);
                break;
            case isBetween(lgInitialResolution, lgFinalResolution, widthResolution):
                $("div.col-3, div.col-md-4")
                    .removeClass()
                    .addClass("col-lg-4");
                $("div.post>img").attr("src", "https://via.placeholder.com/240x190");
                $("div.post").css("width", "240px");
                $("aside").remove();
                break;
            case isBetween(mdInitialResolution, mdFinalResolution, widthResolution):
                $("div.col-3, div.col-lg-4, div.col-sm-6")
                    .removeClass()
                    .addClass("col-md-4");
                $("div.post>img").attr("src", "https://via.placeholder.com/216x171");
                $("div.post").css("width", "216px");
                $("aside").remove();
                break;

            case isBetween(smInitialResolution, smFinalResolution, widthResolution):
                $("div.col-3, div.col-md-4, div.col-sm-12")
                    .removeClass()
                    .addClass("col-sm-6");
                $("div.post>img").attr("src", "https://via.placeholder.com/216x171");
                $("div.post").css("width", "216px");
                $("aside").remove();
                break;

            case isUnder(firstResolution, widthResolution):
                $("div.col-3, div.col-sm-6")
                    .removeClass()
                    .addClass("col-sm-12");
                $("div.post>img").attr("src", "https://via.placeholder.com/351x278");
                $("div.post").css("width", "351px");
                $("aside").remove();
                break;

            default:
                $("div.col-lg-4")
                    .removeClass()
                    .addClass("col-3");
                $("div.post").css("width", "240px");
                $("#mainContent").append(asideRemoved);
                break;
        }

    }

    $(document).ready(updateClassesBasedOnResolution);
    $(window).resize(updateClassesBasedOnResolution);
})