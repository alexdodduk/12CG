$('iframe').load(function () {
    var overlay = $('#overlay', $('iframe').contents());
    var container = $('.container', overlay);
    var row = $('.row', container);
    var columns = $('div', row);
    var columnInners = $('div', columns);
    var widthButtons = $('.device-width');
    var showHideAllButtons = $('#btn-show-all, #btn-hide-all');

    setHeight();

    widthButtons.click(function () {
        setTimeout(setHeight, 200);
    });

    // set up the guides
    bindGuideButtons('container-guide');
    bindGuideButtons('margin');
    bindGuideButtons('columns');
    bindGuideButtons('gutters');

    bindShowHideAllButtons();

    function bindShowHideAllButtons() {
        showHideAllButtons.click(function () {
            console.log('b');
            showHideAllButtons.toggleClass('hidden');
        });

        $('#btn-show-all').click(function () {
            showGuide('container-guide');
            showGuide('margin');
            showGuide('columns');
            showGuide('gutters');
        });

        $('#btn-hide-all').click(function () {
            hideGuide('container-guide');
            hideGuide('margin');
            hideGuide('columns');
            hideGuide('gutters');
        });
    }

    function bindGuideButtons(guideName) {
        var contentShowButton = $('#' + guideName + '-on', $('iframe').contents());
        var contentHideButton = $('#' + guideName + '-off', $('iframe').contents());
        var menuButton = $('#btn-' + guideName);

        $.each([contentShowButton, contentHideButton, menuButton], function () {
            $(this).click(function (e) {
                e.preventDefault();

                toggleClass(guideName, menuButton, contentShowButton, contentHideButton);
            });
        });
    }

    function setHeight() {
        var newHeight = $('body', $('iframe').contents()).height();

        $.each([overlay, container, row, columns, columnInners], function () {
            $(this).height(newHeight);
        });
    }

    function toggleClass(_class, menuButton, contentShowButton, contentHideButton) {
        overlay.toggleClass(_class);
        menuButton.toggleClass('show');
        contentShowButton.toggleClass('hidden');
        contentHideButton.toggleClass('hidden');
    }

    function showGuide(guideName) {
        var contentShowButton = $('#' + guideName + '-on', $('iframe').contents());
        var contentHideButton = $('#' + guideName + '-off', $('iframe').contents());
        var menuButton = $('#btn-' + guideName);

        addClass(guideName, menuButton, contentShowButton, contentHideButton);
    }

    function hideGuide(guideName) {
        var contentShowButton = $('#' + guideName + '-on', $('iframe').contents());
        var contentHideButton = $('#' + guideName + '-off', $('iframe').contents());
        var menuButton = $('#btn-' + guideName);

        removeClass(guideName, menuButton, contentShowButton, contentHideButton);
    }

    function addClass(_class, menuButton, contentShowButton, contentHideButton) {
        overlay.removeClass(_class);
        overlay.addClass(_class);
        menuButton.removeClass('show');
        menuButton.addClass('show');
        contentHideButton.removeClass('hidden');
        contentShowButton.removeClass('hidden');
        contentShowButton.addClass('hidden');
    }

    function removeClass(_class, menuButton, contentShowButton, contentHideButton) {
        overlay.removeClass(_class);
        menuButton.removeClass('show');
        contentShowButton.removeClass('hidden');
        contentHideButton.removeClass('hidden');
        contentHideButton.addClass('hidden');
    }
});