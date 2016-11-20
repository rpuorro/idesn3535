/**
 * Created by rickypuorro on 11/19/16.
 */


var swatches=document.getElementsByClassName('swatch');
for (var i=0, n=swatches.length; i<n;i++) {
    swatches[i].addEventListener('onClick', 'setSwatch');
}
function setColor(color) {
    context.fillStyle = color;
    context.strokeStyle = color;
    var active = document.getElementsByClassName('active')[0];
    if (active) {
        active.className = 'swatch';
    }
}

function setSwatch(e) {
    var swatch = e.target;
    setColor(swatch.style);
    //this can accept hex values but because  color aleady assigned to swatches, itll inherit that color
    swatch.className += ' active';
}
