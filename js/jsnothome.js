$(document).ready(function(){
    $('.ex1').zoom();
});


$(document).ready(function(){
    $(".main-h1").hover(function(){
        $(".main-h2").fadeIn(1500);
    });
});


$(document).ready(function(){
    $(".example").click(function(){
        $(".toggle").animate({
            height: 'toggle'
        });
    });
});


$(document).ready(function(){
    $(".example1").click(function(){
        $(".toggle1").animate({
            height: 'toggle'
        });
    });
});

$(document).ready(function(){
    $(".example2").click(function(){
        $(".toggle2").animate({
            height: 'toggle'
        });
    });
});