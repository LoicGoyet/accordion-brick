var isOpen = function(anchor) {
    return anchor.hasClass('is-open');
};

var setContentHeight = function(anchor, content, toggle) {
    toggle = typeof(toggle) === 'undefined' ? true : toggle;

    if (isOpen(anchor) !== toggle) {
        content.addClass('is-hidden');
        var content_height = content.height();
        content.removeClass('is-hidden');

        // setTimeout is used as a callback to be sure the class is-hidden is
        // removed and style to not make a transition between auto and a unit
        // value that does not work.
        setTimeout(function() {
            content.css('height', content_height);
        }, 1);
    } else {
        content.css('height', 0);
    }
};

var accordionToggle = function(anchor) {
    var accordion = anchor.closest('.accordion');
    var content = accordion.children('.accordion__content');
    setContentHeight(anchor, content);
    anchor.toggleClass('is-open');
};

$(function() {
    $('.accordion__anchor').each(function(index, el) {
        var accordion = $(this).closest('.accordion');
        var content = accordion.children('.accordion__content');
        setContentHeight($(this), content, false);
    });
});
