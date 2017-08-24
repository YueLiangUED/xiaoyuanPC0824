/* 
* @Author: Marte
* @Date:   2017-05-26 11:03:33
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-26 11:03:58
*/

$(document).ready(function(){
    // 新老生切换
    $('.change-btn').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        var thisIndex = $(this).index();
        $('.change-btn').removeClass('act');
        $(this).addClass('act');
        $('.studen-wraper').css({
            display: 'none'
        });
        $('.studen-wraper')[thisIndex].style.display = 'block';
    });
    // 卡片旋转
    $('.card-rotate a').on('click', function(event) {
        $(this).css({
            'z-index': 30
        });
        if ($(this).hasClass('card_left')) {
            var $middle = $('.card-rotate a').filter('.card_middle'),
                $right = $('.card-rotate a').filter('.card_right');
            $middle.css({
                'z-index': 20
            });
            $right.css({
                'z-index': 10
            });
            $('.card-rotate a').attr('class','');
            $(this).addClass('card_middle');
            $middle.addClass('card_right');
            $right.addClass('card_left');
            return false;
        }
        if ($(this).hasClass('card_right')) {
            var $middle = $('.card-rotate a').filter('.card_middle'),
                $left = $('.card-rotate a').filter('.card_left');
            $middle.css({
                'z-index': 20
            });
            $left.css({
                'z-index': 10
            });
            $('.card-rotate a').attr('class','');
            $(this).addClass('card_middle');
            $middle.addClass('card_left');
            $left.addClass('card_right');
            return false;
        }
        if ($(this).hasClass('card_middle')) {
            var href = $(this).attr('href');
            window.location.href = href;
        }

    });
});