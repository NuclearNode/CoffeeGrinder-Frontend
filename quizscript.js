$(document).ready(function() {
    var animating = false;
    var decisionVal = 80;
    var pullDeltaX = 0;
    var deg = 0;
    var $choice, $choiceAccept;
    var $left, $right;
    
    function pullChange() {
        animating = true;
        deg = pullDeltaX/10;
        $choice.css("transform", "translateX("+ pullDeltaX +"px) rotate("+ deg +"deg)");
    }
    
    function release() {
        if (pullDeltaX >= decisionVal && right) {
            $choice.addClass("to-right");
        } else if (pullDeltaY <= -decisionVal && left) {
            $choice.addClass("to-left");
        }
        
        if (Math.abs(pullDeltaX) < decisionVal) {
            $choice.addClass("reset");
        }
        
        setTimeout(function() {
            $choice.attr("style", "").removeClass("reset").find(".")
        })
    }
    
    
});