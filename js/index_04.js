$(document).ready(function(){
    $('.lq-item').on('click', function () {
        var thisNext = $(this).next();
        var siblings = $('.shuoming').not(thisNext);
        siblings.slideUp();
        thisNext.slideDown();

    });
    // 复制功能
    new Clipboard('.copy-btn a', {
        target: function(trigger) {
            var targetCopy = $(trigger).parents('.lq-item');
            targetCopy = targetCopy.find('.jihuoma')[0];
            return targetCopy;
        }
    });
    $('.copy-btn a').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        alert("复制成功！如果复制失败，请手动复制！");
    });
});