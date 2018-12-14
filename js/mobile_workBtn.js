$(document).ready(function(){
    $(function(){
            $('.mWorkBtn').css({ cursor: 'pointer' }).click(function () {
            var ih = $(this).index() == 0 ? -264 : 264; //위아래로 움직이는 px 숫자
            var obj = $('.mWork');
            obj.animate({ scrollTop:obj.scrollTop() + ih }, 100);
        });
    });
})