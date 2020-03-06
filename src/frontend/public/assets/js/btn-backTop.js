/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.btn-backTop').fadeIn();
    } else {
        $('.btn-backTop').fadeOut();
    }
});
$(document).ready(function() {
    $(".btn-backTop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});
 /*Scroll to top when arrow up clicked END*/
