/**
 * Created by wangbiaozy on 2017/12/1.
 */
(function(global){
    function remChange(){
        document.documentElement.style.fontSize=100*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);
$(function () {
    //选择套餐
    var flag = 0;
    $('#tab').on('click','li',function () {
        var $this = $(this),
            $index = $this.index();
        flag = $index; //0 - 7 58档 - 588档
        $this.addClass('active').siblings('li').removeClass('active');
    });
});
