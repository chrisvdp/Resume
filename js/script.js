/* Author:

*/
$('.nav').scrollspy();
$('.dropdown-toggle').dropdown();
$('.current-year').text(function () { var theDate = new Date(); return theDate.getFullYear(); });
$('#top-arrow').click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 500);
});

$(window).scroll(function () {
    var offset = $('.page-header h1').offset().top - $(this).scrollTop();
    if (offset < 0) {
        $('.brand').removeClass('hidden');
        $('#nav-contact').removeClass('hidden');
        $('#top-arrow').removeClass('hidden');
    } else {
        $('.brand').addClass('hidden');
        $('#nav-contact').addClass('hidden');
        $('#top-arrow').addClass('hidden');
    }
});






