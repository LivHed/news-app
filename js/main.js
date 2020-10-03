$(document).ready(function(){
    $(".btn-click").click(function() {
        $(".article").toggleClass("pink-color")
    });

    $('.btn-toggle').click(function() {
        $(".article").toggleClass("blue-color");
    })

    $('.btn-white').click(function() {
        $(".article").toggleClass("back-to-white");
    })

});

