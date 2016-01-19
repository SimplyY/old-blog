// 动画过程：一周期
// love-simplyy 和 love-lp
// 旋转一圈、再旋转一圈靠近,相遇3次，再旋转一圈，再旋转一圈后退。
// lovedays 颜色从蓝、到紫、到红、到紫

(function(document) {
    var unitTime = 900;

    function love_animate(argument) {
        var $ = document.querySelectorAll.bind(document);

        var SimplyY = $('.SimplyY-wrapper');
        var lp = $('.lp-wrapper');

        myAnimate(SimplyY, 'left');
        myAnimate(lp, 'right');
    }

    function myAnimate(element, position) {
        position = position === 'left' ? 1 : -1;

        var unitDistance = 100;
        var unitRotate = Math.PI;

        unitDistance *= position;

        snabbt(element, {
            delay: unitTime,
            rotation: [0, unitRotate * 2, unitRotate * 2],
            position: [unitDistance * 6, 0, 0],
            easing: 'ease',
            duration: unitTime * 2
        }).snabbt({
            delay: unitTime,
            rotation: [0, unitRotate * 4, 0],
            position: [unitDistance * 2.2, 0, 0],
            easing: 'ease',
            duration: unitTime * 2
        }).snabbt({
            delay: unitTime,
            rotation: [0, 0, 0],
            position: [unitDistance * 4.1, 0, 0],
            easing: 'linear',
            duration: unitTime * 2
        });
    }


    document.addEventListener("DOMContentLoaded", function(event){
        love_animate();
    });
}(document));
