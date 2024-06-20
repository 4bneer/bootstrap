$(document).ready(function () {
    $("#phone").mask('(00) 00000-0000');


    $('form').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            name: {
                required: true,
                minlength: 3
            },
            phone: {
                required: true,
                minlength: 15
            }
        },
        messages: {
            name: {
                minlength: "Por favor, insira pelo menos 3 letras."
            },
            phone: {
                minlength: "por favor, insira seu número de telefone completo."
            }
        }
    })


})