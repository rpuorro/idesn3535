/**
 * Created by rickypuorro on 11/19/16.
 */


var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 10;
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = 20;

var putPoint = function (e) {
  if (dragging) {
    context.lineTo(e.clientX, e.clientY);
    context.stroke();
    context.beginPath();
    context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
    context.fill();
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
    }
};
var engage = function () {
    dragging = true;
};
var disengage = function () {
    dragging = false;
    context.beginPath();
};

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);

var swatches=document.getElementsByClassName('swatch');
for (var i=0, n=swatches.length; i<n;i++) {
    swatches[i].addEventListener('click','setSwatch');

    function setColor(color) {
        context.fillStyle = color;
        context.strokeStyle = color;
        var active = document.getElementsByClassName('active')[0];
        if (active) {
            active.className = 'swatch'
        }
    }

    function setSwatch(e) {
        var swatch = e.target;
        setColor(swatch.style.backgroundColor);
        //this can accept hex values but because  color aleady assigned to swatches, itll inherit that color
        swatch.className += ' active';
    }
}
