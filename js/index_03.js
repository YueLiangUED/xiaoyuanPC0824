/* 
* @Author: Marte
* @Date:   2017-05-26 11:03:33
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-26 11:03:58
*/

$(document).ready(function(){
    var Videocount = 0;
    $('.card_group span').on('click', function () {
        $('.card_group span').each(function () {
            if ($(this).hasClass('lq')) {
                Videocount++;
            }
        });
        if (Videocount > 3) {
            alert('您已经领取了3张优惠券！');
            return;
        }
        $(this).addClass('lq');
    });
});