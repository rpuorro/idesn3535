/**
 * Created by rickypuorro on 11/19/16.
 */
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var stage;
function init() {
    stage = new createjs.Stage("canvas");
    stage.enableMouseOver(10);

    createjs.Sound.registerSound("Alliance Strings.m4a");


    //these are variables for the elements that contain the music sounds within artboards. Per CreatejsAPI, originally used as text elements hence "label".
    var label1 = new createjs.Text("g", "95px webdings", "#455A64");
    label1.x = 200;
    label1.y = 200;
    label1.alpha = .5;

    var label2 = new createjs.Text("g", "95px webdings", "#455A64");
    label2.x = 300;
    label2.y = 200;
    label2.alpha = 1;

    var label3 = new createjs.Text("g", "95px webdings", "#455A64");
    label3.x = 400;
    label3.y = 200;
    label3.alpha = 1;

    var label4 = new createjs.Text("g", "95px webdings", "#455A64");
    label4.x = 500;
    label4.y = 200;
    label4.alpha = 1;

    var label5 = new createjs.Text("g", "95px webdings", "#455A64");
    label5.x = 600;
    label5.y = 200;
    label5.alpha = 1;
    //
    var label6 = new createjs.Text("g", "95px webdings", "#455A64");
    label6.x = 700;
    label6.y = 200;
    label6.alpha = 1;

    var label7 = new createjs.Text("g", "95px webdings", "#455A64");
    label7.x = 200;
    label7.y = 350;
    label7.alpha = 1;
    //
    var label8 = new createjs.Text("g", "95px webdings", "#455A64");
    label8.x = 300;
    label8.y = 350;
    label8.alpha = 1;

    var label9 = new createjs.Text("g", "95px webdings", "#455A64");
    label9.x = 400;
    label9.y = 350;
    label9.alpha = 1;

    var label10 = new createjs.Text("g", "95px webdings", "#455A64");
    label10.x = 500;
    label10.y = 350;
    label10.alpha = 1;

    var label11 = new createjs.Text("g", "95px webdings", "#455A64");
    label11.x = 600;
    label11.y = 350;
    label11.alpha = 1;

    var label12 = new createjs.Text("g", "95px webdings", "#455A64");
    label12.x = 700;
    label12.y = 350;
    label12.alpha = 1;

    var label13 = new createjs.Text("g", "95px webdings", "#455A64");
    label13.x = 200;
    label13.y = 500;
    label13.alpha = 1;

    var label14 = new createjs.Text("g", "95px webdings", "#455A64");
    label14.x = 300;
    label14.y = 500;
    label14.alpha = 1;

    var label15 = new createjs.Text("g", "95px webdings", "#455A64");
    label15.x = 400;
    label15.y = 500;
    label15.alpha = 1;

    var label16 = new createjs.Text("g", "95px webdings", "#455A64");
    label16.x = 500;
    label16.y = 500;
    label16.alpha = 1;

    var label17 = new createjs.Text("g", "95px webdings", "#455A64");
    label17.x = 600;
    label17.y = 500;
    label17.alpha = 1;

    var label18 = new createjs.Text("g", "95px webdings", "#455A64");
    label18.x = 700;
    label18.y = 500;
    label18.alpha = 1;


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
    label13.on("mousedown", thirteenthHandle);
    label14.on("mousedown", fourteenthHandle);
    label15.on("mousedown", fifteenthHandle);
    label16.on("mousedown", sixteenthHandle);
    label17.on("mousedown", seventeenthHandle);
    label18.on("mousedown", eighteenthHandle);



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
    label13.on("mouseout", thirteenthHandle);
    label14.on("mouseout", fourteenthHandle);
    label15.on("mouseout", fifteenthHandle);
    label16.on("mouseout", sixteenthHandle);
    label17.on("mouseout", seventeenthHandle);
    label18.on("mouseout", eighteenthHandle);



    stage.addChild(label1,label2,label3, label4, label5, label6, label7, label8, label9, label10, label11, label12, label13, label14, label15, label16, label17, label18);
    stage.update();
    createjs.Ticker.addEventListener("tick");
}
var audio = document.createElement('audio');

function handleInteraction(event) {
    event.target.alpha = (event.type == "mouseover");
    var ppc = new createjs.PlayPropsConfig().set({interrupt: createjs.Sound.INTERRUPT_NONE, loop: 1, volume: 0.5});
    createjs.Sound.play("Alliance Strings.m4a", ppc);
    sound.play(ppc);


}
function nextHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('AllianceLowStrings01.m4a');
    audio.play();
}
function thirdHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    audio = new Audio('AllianceMidStrings02.m4a');
    audio.play();
}
function fourthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    audio = new Audio('Breaking Up Synth Chords.m4a');
    audio.play();
}
function fifthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('Blast Synth Layers 02.m4a');
    audio.play();
}
function sixthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('SuGrB01.aif');
    audio.play();
}
function seventhHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('Rack Chord E1.wav');
    audio.play();
}
function eighthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('Rack Chord E3.wav');
    audio.play();
}
function ninthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('Rack Chord E4.wav');
    audio.play();
}
function tenthHandle (event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('Blast Synth Layers 02.m4a');
    audio.play();
}
function eleventhHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('17f7aE3 M.wav');
    audio.play();
}
function twelfthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('34f2aE6.wav');
    audio.play();
}
function thirteenthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('Acoustic Guitar 2 Pchord 2 E3.wav');
    audio.play();
}
function fourteenthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('Acoustic Guitar 2 Pchord 2 E4.wav');
    audio.play();
}function fifteenthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('Acoustic Guitar 2 Pchord 2 E5.wav');
    audio.play();
}function sixteenthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('AperitifViola 01.m4a');
    audio.play();
}function seventeenthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('DigiA_57.aif');
    audio.play();
}function eighteenthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('mount-kimbie_synth-choir-3_synths_one_shot_.wav.wav');
    audio.play();
}

var radius = 2;
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = 1;

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

        // context.beginPath();
        // context.moveTo(0,0);
        // context.lineTo(window.innerHeight, window.innerHeight);
        // context.stroke();
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
    return true;
}
