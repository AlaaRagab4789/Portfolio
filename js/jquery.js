
$(document).ready(function(){
    var testH = $(window).height();
    var navH = $('.navbar').innerHeight();
 $('.section1,.section2,.section4,.section3,.section1 .row,.section2 .row,.section4 .row').height(testH-navH);

})

