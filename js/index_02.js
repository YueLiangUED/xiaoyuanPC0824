/* 
* @Author: Marte
* @Date:   2017-05-26 11:03:33
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-26 11:03:58
*/

$(document).ready(function(){
    // 显示遮罩层
    function showMask(){     
        $("#mask").css("height",$(document).height());     
        $("#mask").css("width",$(document).width());   
        $("#mask").show();     
    }
    //隐藏遮罩层  
    function hideMask(){     
        $("#mask").hide();
    }
    $(window).resize(function () {
        $("#mask:visible").css("height",$(document).height());     
        $("#mask:visible").css("width",$(document).width());   
        $("#mask:visible").show();
    });
    // 调用遮罩层
    $('.card_group span').on('click', function () {
        showMask();
    });
    // 弹窗关闭按钮
    $('.modal-close').on('click', function () {
        var $modal = $(this).parents('.modal');
        $modal.hide();
        hideMask();
    });
    // 倒计时
    var $getNum = $('.getNumBtn');
    var flag = true;
    $getNum.click(function () {
        var $this = $(this);
        if (flag == true) {
            flag = false;
            $this.addClass('act');
            $this.html('<i>60</i>s后获取');
            Countdown($this);
            setTimeout(function () {
                $this.removeClass('act');
                $this.html('获取验证码');
                flag = true;
                timer = null;

            },60000);
        } else {
            return false;
        }
    });
    function Countdown(obj) {
        var now = 60;
        var timer = null;
        timer = setInterval(function () {
            if (now>1) {
                now -= 1;
                obj.html('<i>'+ now +'</i>s后获取');
            }
        }, 1000);
    }
});