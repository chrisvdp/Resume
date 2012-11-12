$('.current-year').text(function () { var theDate = new Date(); return theDate.getFullYear(); });
$('#top-arrow').click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 500);
});
//better Google analytics info
var googleAnalyics = function () {
    var timeTracking,
        theTime = 0,
        interval = 20000;
    function trackTime() {
        _gaq.push(['_trackPageview','_timing', 'the time', theTime]);
        theTime += interval;
        //console.log(theTime);
    };
    function startTimeTracker() {
        timeTracking = setInterval(trackTime, interval);
    };
    function stopTimeTracker() {
        clearInterval(timeTracking);
        theTime = 0;
    };
    $('#main-nav a').click(function () {
        _gaq.push(['_trackEvent', 'Nav click', $(this).attr('href')]);
    });

    return {
        start: startTimeTracker,
        stop: stopTimeTracker
    };
}();

googleAnalyics.start();