$('iframe').height($(window).height() - 50);

$('.device-width').click(function (e) {
    resize($(this).data('width'));

    changeIcon($(this));

    e.preventDefault();
});

function resize(width) {
    $('iframe').width(width);
}

function getIcon(button) {
    var iconPrefix = 'fa-';
    var html = button.html();
    var iconStartIndex = getPosition(html, iconPrefix, 1) + iconPrefix.length;
    var iconEndIndex = getPosition(html, '"', 2);
    var iconLength = iconEndIndex - iconStartIndex;
    var icon = html.substr(iconStartIndex, iconLength);

    return icon;
}

function changeIcon(button) {
    var newIcon = getIcon(button);
    var existingIconButton = button.parent().parent().siblings().first();
    var existingIcon = getIcon(existingIconButton);

    existingIconButton.html(existingIconButton.html().replace(existingIcon, newIcon));
}

function getPosition(str, m, i) {
    return str.split(m, i).join(m).length;
}

$('#fit-to-screen').click(function (e) {
    $('iframe').css('width', '100%');

    changeIcon($(this));

    e.preventDefault();
});