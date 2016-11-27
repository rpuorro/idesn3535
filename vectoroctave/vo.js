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
    var label1 = new createjs.Text("g", "100px webdings", "#7B1FA2");
    label1.x = 50;
    label1.y = 50;
    label1.alpha = 1;

    var label2 = new createjs.Text("g", "100px webdings", "#7B1FA2");
    label2.x = 100;
    label2.y = 100;
    label2.alpha = 1;

    var label3 = new createjs.Text("g", "100px webdings", "#7B1FA2");
    label3.x = 200;
    label3.y = 200;
    label3.alpha = 1;

    var label4 = new createjs.Text("g", "100px webdings", "#7B1FA2");
    label4.x = 300;
    label4.y = 300;
    label4.alpha = 1;

    // var label5 = new createjs.Text("g", "100px webdings", "#7B1FA2");
    // label4.x = 400;
    // label4.y = 400;
    // label4.alpha = 1;
    //
    // var label6 = new createjs.Text("g", "100px webdings", "#7B1FA2");
    // label4.x = 500;
    // label4.y = 500;
    // label4.alpha = 1;
    //
    // var label7 = new createjs.Text("g", "100px webdings", "#7B1FA2");
    // label4.x = 600;
    // label4.y = 600;
    // label4.alpha = 1;
    //
    // var label8 = new createjs.Text("g", "100px webdings", "#7B1FA2");
    // label4.x = 700;
    // label4.y = 700;
    // label4.alpha = 1;



// each variable needs its own function, because every trigger-able element within the artboard contains a unique musical note-IE handleInteraction is the function of label1, when label1 is passed over, moog10 synth plays
    label1.on("mousedown", handleInteraction);
    label2.on("mousedown", nextHandle);
    label3.on("mousedown", thirdHandle);
    label4.on("mousedown", fourthHandle);
    // label5.on("mousedown", fifthHandle);
    // label6.on("mousedown", sixthHandle);
    // label7.on("mousedown", seventhHandle);
    // label8.on("mousedown", eighthHandle);




    label1.on("mouseout", handleInteraction);
    label2.on("mouseout", nextHandle);
    label3.on("mouseout", thirdHandle);
    label4.on("mouseout", fourthHandle);
    // label5.on("mouseout", fifthHandle);
    // label6.on("mouseout", sixthHandle);
    // label7.on("mouseout", seventhHandle);
    // label8.on("mouseout", eighthHandle);


    stage.addChild(label1,label2,label3, label4);
    stage.update();
    createjs.Ticker.addEventListener("tick");
}
var audio = document.createElement('audio');

function handleInteraction(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('jeff-the-brotherhood_moog-14_synths_one_shot_.wav.wav');
    audio.play();
}
function nextHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('jeff-the-brotherhood_moog-9_synths_one_shot_.wav.wav');
    audio.play();
}
function thirdHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('jeff-the-brotherhood_moog-10_synths_one_shot_.wav.wav');
    audio.play();
}
function fourthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('jeff-the-brotherhood_moog-11_synths_one_shot_.wav.wav');
    audio.play();
    audio.w(25)
}
// function fifthHandle(event) {
//     event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
//     var audio = new Audio('jeff-the-brotherhood_moog-11_synths_one_shot_.wav.wav');
//     audio.play();
//     audio.w(25)
// }
// function sixthHandle(event) {
//     event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
//     var audio = new Audio('jeff-the-brotherhood_moog-11_synths_one_shot_.wav.wav');
//     audio.play();
//     audio.w(25)
// }
// function seventhHandle(event) {
//     event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
//     var audio = new Audio('jeff-the-brotherhood_moog-11_synths_one_shot_.wav.wav');
//     audio.play();
//     audio.w(25)
// }
// function eighthHandle(event) {
//     event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
//     var audio = new Audio('jeff-the-brotherhood_moog-11_synths_one_shot_.wav.wav');
//     audio.play();
//     audio.w(25)
// }

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
        context.beginPath( brush.clientY);
        context.beginPath();
        context.moveTo(brush.clientX, brush.clientY);
        // context.fillText("THIS",brush.clientX, brush.clientY);

        context.rotate(Math.PI*2);
        // context.opacity=.1
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
