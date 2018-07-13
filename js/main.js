$(function () {
    
    var max = 850,
        step = 0,
        speed = 0.05;
    
    function animate(){
        var x = (Math.cos(step * speed) + 1) / 8 * max;
        var y = (Math.sin(step * speed) + 1) / 2 * max;
        step++;
        $('#moon')
            .css({
                zIndex: 2,
                top: x,
                left: y
            })
            /*.animate({
                width: 120,
                height: 120
            }, 3100)
            .animate({
                width: 200,
                height: 200
            }, 3100)*/
            ;
        if( x <= 50 && $('#moon').css("z-index") == 2 ){
            $('#moon').css("z-index", "0");
        }
    };
    
    setInterval(animate, 50);
    
});