$('a').click(function (e) {
    var sectionId = $(e.currentTarget).attr('href');

    navigateTo(sectionId);
});

$('iframe').load(function () {
    var sectionId = location.hash;

    navigateTo(sectionId);
});

function navigateTo(sectionId) {
    if (sectionId.length > 1) {
        var iframe = $('iframe').contents();
        var section = $(sectionId, $('iframe').contents());

        $('body', iframe).animate({
            scrollTop: section.position().top
        }, 200);
    }
}