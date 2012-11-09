$('.current-year').text(function () { var theDate = new Date(); return theDate.getFullYear(); });
$('#top-arrow').click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 500);
});