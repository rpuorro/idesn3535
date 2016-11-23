/**
 * Created by rickypuorro on 11/19/16.
 */
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var stage;
function init() {
    stage = new createjs.Stage("canvas");
    stage.enableMouseOver(10);

    //these are variables for the elements that contain the music sounds within artboards. Per CreatejsAPI, originally used as text elements hence "label".
    var label1 = new createjs.Text("g", "200px webdings", "#ECEFF1");
    label1.x = 400;
    label1.y = 50;
    label1.alpha = 0.5;

    var label2 = new createjs.Text("g", "200px webdings", "#ECEFF1");
    label2.x = 400;
    label2.y = 400;
    label2.alpha = 0.5;

    var label3 = new createjs.Text("g", "200px webdings", "#ECEFF1");
    label3.x = 700;
    label3.y = 50;
    label3.alpha = 0.5;

    var label4 = new createjs.Text("g", "200px webdings", "#ECEFF1");
    label4.x = 700;
    label4.y = 400;
    label4.alpha = 0.5;


// each variable needs its own function, because every trigger-able element within the artboard contains a unique musical note-IE handleInteraction is the function of label1, when label1 is passed over, moog10 synth plays
    label1.on("mousedown", handleInteraction);
    label2.on("mousedown", nextHandle);
    label3.on("mousedown", thirdHandle);
    label4.on("mousedown", fourthHandle);



    label1.on("mouseout", handleInteraction);
    label2.on("mouseout", nextHandle);
    label3.on("mouseout", thirdHandle);
    label4.on("mouseout", fourthHandle);



    stage.addChild(label1,label2,label3, label4);
    stage.update();
    createjs.Ticker.addEventListener("tick");
}

function handleInteraction(event) {
    event.target.alpha = (event.type == "mousedown") ? 1 : 0.5;
    var audio = new Audio('jeff-the-brotherhood_moog-14_synths_one_shot_.wav.wav');
    audio.play();
}
function nextHandle(event) {
        event.target.alpha = (event.type == "mousedown") ? 1 : 0.5;
        var audio = new Audio('jeff-the-brotherhood_moog-9_synths_one_shot_.wav.wav');
        audio.play();
    }
function thirdHandle(event) {
    event.target.alpha = (event.type == "mousedown") ? 1 : 0.5;
    var audio = new Audio('jeff-the-brotherhood_moog-10_synths_one_shot_.wav.wav');
    audio.play();
}
function fourthHandle(event) {
    event.target.alpha = (event.type == "mousedown") ? 1 : 0.5;
    var audio = new Audio('jeff-the-brotherhood_moog-11_synths_one_shot_.wav.wav');
    audio.play();
}
var radius = 1;
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = 2;

var putPoint = function (brush) {
  if (dragging) {
    context.lineTo(brush.clientX, brush.clientY);
    context.stroke();
    context.beginPath();
    context.arc(brush.clientX, brush.clientY, radius, 0, Math.PI*2);
    context.fill();
    context.beginPath();
    context.moveTo(brush.clientX, brush.clientY);
   // context.fillText("......",brush.clientX, brush.clientY);
    //context.rotate( Math.PI );
      context.globalAlpha=.4
  }
};
var engage = function () {
    dragging = true
};
var disengage = function () {
    dragging = false;
    context.beginPath();
};

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);




function changeColor(color) {
    context.strokeStyle=color;
    context.fillStyle=color;

}
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
