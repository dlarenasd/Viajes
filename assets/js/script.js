$(document).ready(function(){
        $("a").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {
                    window.location.hash = hash;
                });
            }

        })
        $(".icono").on('mouseover', function (event) {
            $(this).css("font-size", "3em");
            })
        $(".icono").on('mouseleave', function (event) {
                $(this).css("font-size", "2em");
                })
    });

