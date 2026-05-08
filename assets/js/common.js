// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
$(function () {
    lazyLoadOptions = {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        },
        afterLoad: function(element) {
            if (element.is('img')) {
                // remove background-image style
                element.css('background-image', 'none');
                element.css('min-height', '0');
            } else if (element.is('div')) {
                // set the style to background-size: cover; 
                element.css('background-size', 'cover');
                element.css('background-position', 'center');
            }
        }
    }

    $('img.lazy, div.lazy:not(.always-load)').Lazy({visibleOnly: true, ...lazyLoadOptions});
    $('div.lazy.always-load').Lazy({visibleOnly: false, ...lazyLoadOptions});

    $('[data-toggle="tooltip"]').tooltip()

    var $grid = $('.grid').masonry({
        "percentPosition": true,
        "itemSelector": ".grid-item",
        "columnWidth": ".grid-sizer"
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    $(".lazy").on("load", function () {
        $grid.masonry('layout');
    });

    var $themeToggle = $('#theme-toggle');
    function applyHomepageTheme(theme) {
        var nextTheme = theme === 'homepage-dark' ? 'homepage-dark' : 'homepage-light';
        document.documentElement.classList.remove('homepage-light', 'homepage-dark');
        document.documentElement.classList.add(nextTheme);
        try {
            localStorage.setItem('homepage-theme', nextTheme);
        } catch (error) {}

        if ($themeToggle.length) {
            var useLightLabel = 'Switch to light theme';
            var useDarkLabel = 'Switch to dark theme';
            if (nextTheme === 'homepage-dark') {
                $themeToggle.attr('aria-label', useLightLabel).attr('title', useLightLabel);
                $themeToggle.html('<i class="fas fa-sun"></i>');
            } else {
                $themeToggle.attr('aria-label', useDarkLabel).attr('title', useDarkLabel);
                $themeToggle.html('<i class="fas fa-moon"></i>');
            }
        }
    }

    var currentTheme = document.documentElement.classList.contains('homepage-dark') ? 'homepage-dark' : 'homepage-light';
    applyHomepageTheme(currentTheme);
    $themeToggle.on('click', function () {
        var nextTheme = document.documentElement.classList.contains('homepage-dark') ? 'homepage-light' : 'homepage-dark';
        applyHomepageTheme(nextTheme);
    });
})
