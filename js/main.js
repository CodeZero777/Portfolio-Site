 (function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $("header").addClass("fixed");
        } else {
            $(".fixed").removeClass("fixed");
        }
    });
 })();
