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
    var label1 = new createjs.Text("g", "50px webdings", "#3949AB");
    label1.x = 200;
    label1.y = 200;
    label1.alpha = 1;

    var label2 = new createjs.Text("g", "50px webdings", "#3949AB");
    label2.x = 300;
    label2.y = 200;
    label2.alpha = 1;

    var label3 = new createjs.Text("g", "50px webdings", "#3949AB");
    label3.x = 400;
    label3.y = 200;
    label3.alpha = 1;

    var label4 = new createjs.Text("g", "50px webdings", "#3949AB");
    label4.x = 500;
    label4.y = 200;
    label4.alpha = 1;

    var label5 = new createjs.Text("g", "50px webdings", "#3949AB");
    label5.x = 600;
    label5.y = 200;
    label5.alpha = 1;
    //
    var label6 = new createjs.Text("g", "50px webdings", "#3949AB");
    label6.x = 700;
    label6.y = 200;
    label6.alpha = 1;

    var label7 = new createjs.Text("g", "50px webdings", "#3949AB");
    label7.x = 200;
    label7.y = 350;
    label7.alpha = 1;
    //
    var label8 = new createjs.Text("g", "50px webdings", "#3949AB");
    label8.x = 300;
    label8.y = 350;
    label8.alpha = 1;

    var label9 = new createjs.Text("g", "50px webdings", "#3949AB");
    label9.x = 400;
    label9.y = 350;
    label9.alpha = 1;

    var label10 = new createjs.Text("g", "50px webdings", "#3949AB");
    label10.x = 500;
    label10.y = 350;
    label10.alpha = 1;

    var label11 = new createjs.Text("g", "50px webdings", "#3949AB");
    label11.x = 600;
    label11.y = 350;
    label11.alpha = 1;

    var label12 = new createjs.Text("g", "50px webdings", "#3949AB");
    label12.x = 700;
    label12.y = 350;
    label12.alpha = 1;

// each variable needs its own function, because every trigger-able element within the artboard contains a unique musical note-IE handleInteraction is the function of label1, when label1 is passed over, moog10 synth plays
    label1.on("mousedown", handleInteraction);
    label2.on("mousedown", nextHandle);
    label3.on("mousedown", thirdHandle);
    label4.on("mousedown", fourthHandle);
    label5.on("mousedown", fifthHandle);
    label6.on("mousedown", sixthHandle);
    label7.on("mousedown", seventhHandle);
    label8.on("mousedown", eighthHandle);
    label9.on("mousedown", ninthHandle);
    label10.on("mousedown", tenthHandle);
    label11.on("mousedown", eleventhHandle);
    label12.on("mousedown", twelfthHandle);


    label1.on("mouseout", handleInteraction);
    label2.on("mouseout", nextHandle);
    label3.on("mouseout", thirdHandle);
    label4.on("mouseout", fourthHandle);
    label5.on("mouseout", fifthHandle);
    label6.on("mouseout", sixthHandle);
    label7.on("mouseout", seventhHandle);
    label8.on("mouseout", eighthHandle);
    label9.on("mouseout", ninthHandle);
    label10.on("mouseout", tenthHandle);
    label11.on("mouseout", eleventhHandle);
    label12.on("mouseout", twelfthHandle);



    stage.addChild(label1,label2,label3, label4, label5, label6, label7, label8, label9, label10, label11, label12);
    stage.update();
    createjs.Ticker.addEventListener("tick");
}
var audio = document.createElement('audio');

function handleInteraction(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    audio = new Audio('mount-kimbie_long-synth-3_synths_one_shot_.wav.wav');
    audio.play();
}
function nextHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('mount-kimbie_synth-choir-4_synths_one_shot_.wav.wav');
    audio.play();
}
function thirdHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    audio = new Audio('mount-kimbie_synth-choir-3_synths_one_shot_.wav.wav');
    audio.play();
}
function fourthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    audio = new Audio('mount-kimbie_piano-synth-1_synths_one_shot_.wav.wav');
    audio.play();
}
function fifthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('mount-kimbie_long-synth-3_synths_one_shot_.wav.wav');
    audio.play();
}
function sixthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('mount-kimbie_synth-chord-4_synths_one_shot_.wav.wav');
    audio.play();
}
function seventhHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('mount-kimbie_synth-chord-8_synths_one_shot_.wav.wav');
    audio.play();
}
function eighthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('mount-kimbie_synth-chord-10_synths_one_shot_.wav.wav');
    audio.play();
}
function ninthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('mount-kimbie_synth-chord-11_synths_one_shot_.wav.wav');
    audio.play();
}
function tenthHandle (event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('mount-kimbie_synth-chord-14_synths_one_shot_.wav.wav');
    audio.play();
}
function eleventhHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('mount-kimbie_synth-chord-12_synths_one_shot_.wav.wav');
    audio.play();
}
function twelfthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('mount-kimbie_synth-chord-9_synths_one_shot_.wav.wav');
    audio.play();
}

var radius = .3;
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = .6;

var putPoint = function (brush) {
    if (dragging) {
        context.lineTo(brush.clientX, brush.clientY);
        context.stroke();
        context.beginPath();
        context.arc(brush.clientX, brush.clientY, radius, 3, Math.PI*2);
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
