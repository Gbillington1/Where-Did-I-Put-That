// returns random number between two values
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// defines game area
var gameAreaWidth = window.innerWidth;
var gameAreaHeight = window.innerHeight;

// defines circle data
var outerCircleHeight = parseInt($("#outerCircle").css('height').match(/\d+/g));
var outerCircleRadius = outerCircleHeight / 2

// scratch object
var scratch = {
    x: $('#outerCircle').offset().left + outerCircleRadius,
    y: $('#outerCircle').offset().top + outerCircleRadius
}

$('document').ready(function() {
    // when the user enters the radius of scratch => move scratch to random position
    $("#outerCircle").mouseenter(function() {
        // redefine scratch
        scratch.x = getRandomNumber(outerCircleRadius, gameAreaWidth - outerCircleRadius);
        scratch.y = getRandomNumber(outerCircleRadius, gameAreaHeight - outerCircleRadius);

        // don't allow scratch.x to spawn outside the game area (x axis)
        if (scratch.x + outerCircleRadius > gameAreaWidth || scratch.x - outerCircleRadius < 0) {
            scratch.x = getRandomNumber(outerCircleRadius, gameAreaWidth - outerCircleRadius);
        }

        // don't allow scratch.y to spawn outside of game area (y axis)
        if (scratch.y - outerCircleRadius < 0 || scratch.y + outerCircleRadius > gameAreaHeight) {
            scratch.y = getRandomNumber(outerCircleRadius, gameAreaHeight - outerCircleRadius);
        }

        // set scratch to random position
        $(this).offset({top: scratch.y - outerCircleRadius, left: scratch.x - outerCircleRadius})
    })
})

// redefine game area on resize
$(window).resize(function() {
    gameAreaWidth = window.innerWidth
    gameAreaHeight = window.innerHeight
})