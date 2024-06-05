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
            phone: {
                minlength: "please enter your full phone number"
            }
        }
    })


})