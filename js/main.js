$(document).ready(function(){
    const dropdown = $("#dropdown");

    $(".langList").on('mouseenter', function(){
        dropdown.show();
    });

    $(".langList").on('mouseleave', function(){
        dropdown.hide();
    });
});
