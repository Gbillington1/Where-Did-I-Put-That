var gameAreaWidth = parseInt($("#gameArea").css('width').match(/\d+/g));

var outerCircleHeight = parseInt($("#outerCircle").css('height').match(/\d+/g));
var outerCircleRadius = outerCircleHeight / 2

// scratch object
var scratch = {
    x: $("#outerCircle").offset().left + outerCircleRadius,
    y: $("#outerCircle").offset().top + outerCircleRadius
}

$('document').ready(function() {
    // when the user enters the radius of scratch => move scratch to random position
    $("#outerCircle").mouseenter(function() {
        // redefine scratch
        scratch.x = Math.random() * gameAreaWidth;
        scratch.y = Math.random() * gameAreaWidth;

        // set scratch to random position
        $(this).offset({top: scratch.x, left: scratch.y})
    })
})