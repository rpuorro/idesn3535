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
    label1.y = 100;
    label1.alpha = .2;

    var label2 = new createjs.Text("g", "95px webdings", "#455A64");
    label2.x = 300;
    label2.y = 100;
    label2.alpha = .2;

    var label3 = new createjs.Text("g", "95px webdings", "#455A64");
    label3.x = 400;
    label3.y = 100;
    label3.alpha = .2;

    var label4 = new createjs.Text("g", "95px webdings", "#455A64");
    label4.x = 500;
    label4.y = 100;
    label4.alpha = .2;

    var label5 = new createjs.Text("g", "95px webdings", "#455A64");
    label5.x = 600;
    label5.y = 100;
    label5.alpha = .2;

    var label6 = new createjs.Text("g", "95px webdings", "#455A64");
    label6.x = 700;
    label6.y = 100;
    label6.alpha = .2;

    var label7 = new createjs.Text("g", "95px webdings", "#455A64");
    label7.x = 800;
    label7.y = 100;
    label7.alpha = .2;

    var label8 = new createjs.Text("g", "95px webdings", "#455A64");
    label8.x = 900;
    label8.y = 100;
    label8.alpha = .2;

    var label9 = new createjs.Text("g", "95px webdings", "#455A64");
    label9.x = 200;
    label9.y = 200;
    label9.alpha = .2;

    var label10 = new createjs.Text("g", "95px webdings", "#455A64");
    label10.x = 300;
    label10.y = 200;
    label10.alpha = .2;

    var label11 = new createjs.Text("g", "95px webdings", "#455A64");
    label11.x = 400;
    label11.y = 200;
    label11.alpha = .2;

    var label12 = new createjs.Text("g", "95px webdings", "#455A64");
    label12.x = 500;
    label12.y = 200;
    label12.alpha = .2;

    var label13 = new createjs.Text("g", "95px webdings", "#455A64");
    label13.x = 600;
    label13.y = 200;
    label13.alpha = .2;

    var label14 = new createjs.Text("g", "95px webdings", "#455A64");
    label14.x = 700;
    label14.y = 200;
    label14.alpha = .2;

    var label15 = new createjs.Text("g", "95px webdings", "#455A64");
    label15.x = 800;
    label15.y = 200;
    label15.alpha = .2;

    var label16 = new createjs.Text("g", "95px webdings", "#455A64");
    label16.x = 900;
    label16.y = 200;
    label16.alpha = .2;

    var label17 = new createjs.Text("g", "95px webdings", "#455A64");
    label17.x = 200;
    label17.y = 300;
    label17.alpha = .2;

    var label18 = new createjs.Text("g", "95px webdings", "#455A64");
    label18.x = 300;
    label18.y = 300;
    label18.alpha = .2;

    var label19 = new createjs.Text("g", "95px webdings", "#455A64");
    label19.x = 400;
    label19.y = 300;
    label19.alpha = .2;

    var label20 = new createjs.Text("g", "95px webdings", "#455A64");
    label20.x = 500;
    label20.y = 300;
    label20.alpha = .2;

    var label21 = new createjs.Text("g", "95px webdings", "#455A64");
    label21.x = 600;
    label21.y = 300;
    label21.alpha = .2;

    var label22 = new createjs.Text("g", "95px webdings", "#455A64");
    label22.x = 700;
    label22.y = 300;
    label22.alpha = .2;
    var label23 = new createjs.Text("g", "95px webdings", "#455A64");
    label23.x = 800;
    label23.y = 300;
    label23.alpha = .2;

    var label24 = new createjs.Text("g", "95px webdings", "#455A64");
    label24.x = 900;
    label24.y = 300;
    label24.alpha = .2;

    var label25 = new createjs.Text("g", "95px webdings", "#455A64");
    label25.x = 200;
    label25.y = 400;
    label25.alpha = .2;

    var label26 = new createjs.Text("g", "95px webdings", "#455A64");
    label26.x = 300;
    label26.y = 400;
    label26.alpha = .2;

    var label27 = new createjs.Text("g", "95px webdings", "#455A64");
    label27.x = 400;
    label27.y = 400;
    label27.alpha = .2;

    var label28 = new createjs.Text("g", "95px webdings", "#455A64");
    label28.x = 500;
    label28.y = 400;
    label28.alpha = .2;

    var label29 = new createjs.Text("g", "95px webdings", "#455A64");
    label29.x = 600;
    label29.y = 400;
    label29.alpha = .2;

    var label30 = new createjs.Text("g", "95px webdings", "#455A64");
    label30.x = 700;
    label30.y = 400;
    label30.alpha = .2;

    var label31 = new createjs.Text("g", "95px webdings", "#455A64");
    label31.x = 800;
    label31.y = 400;
    label31.alpha = .2;

    var label32 = new createjs.Text("g", "95px webdings", "#455A64");
    label32.x = 900;
    label32.y = 400;
    label32.alpha = .2;

    var label33 = new createjs.Text("g", "95px webdings", "#455A64");
    label33.x = 200;
    label33.y = 500;
    label33.alpha = .2;

    var label34 = new createjs.Text("g", "95px webdings", "#455A64");
    label34.x = 300;
    label34.y = 500;
    label34.alpha = .2;

    var label35 = new createjs.Text("g", "95px webdings", "#455A64");
    label35.x = 400;
    label35.y = 500;
    label35.alpha = .2;

    var label36 = new createjs.Text("g", "95px webdings", "#455A64");
    label36.x = 500;
    label36.y = 500;
    label36.alpha = .2;

    var label37 = new createjs.Text("g", "95px webdings", "#455A64");
    label37.x = 600;
    label37.y = 500;
    label37.alpha = .2;

    var label38 = new createjs.Text("g", "95px webdings", "#455A64");
    label38.x = 700;
    label38.y = 500;
    label38.alpha = .2;

    var label39 = new createjs.Text("g", "95px webdings", "#455A64");
    label39.x = 800;
    label39.y = 500;
    label39.alpha = .2;

    var label40 = new createjs.Text("g", "95px webdings", "#455A64");
    label40.x = 900;
    label40.y = 500;
    label40.alpha = .2;

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
    label19.on("mousedown", nineteenthHandle);
    label20.on("mousedown", twentyHandle);
    label21.on("mousedown", twentyoneHandle);
    label22.on("mousedown", twentytwoHandle);
    label23.on("mousedown", twentythreeHandle);
    label24.on("mousedown", twentyfourHandle);
    label25.on("mousedown", twentyfiveHandle);
    label26.on("mousedown", twentysixHandle);
    label27.on("mousedown", twentysevenHandle);
    label28.on("mousedown", twentyeightHandle);
    label29.on("mousedown", twentynineHandle);
    label30.on("mousedown", thirtyHandle);
    label31.on("mousedown", thirtyoneHandle);
    label32.on("mousedown", thirtytwoHandle);
    label33.on("mousedown", thirtythreeHandle);
    label34.on("mousedown", thirtyfourHandle);
    label35.on("mousedown", thirtyfiveHandle);
    label36.on("mousedown", thirtysixHandle);
    label37.on("mousedown", thirtysevenHandle);
    label38.on("mousedown", thirtyeightHandle);
    label39.on("mousedown", thirtynineHandle);
    label40.on("mousedown", fortyHandle);




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
    label19.on("mouseout", nineteenthHandle);
    label20.on("mouseout", twentyHandle);
    label21.on("mouseout", twentyoneHandle);
    label22.on("mouseout", twentytwoHandle);
    label23.on("mouseout", twentythreeHandle);
    label24.on("mouseout", twentyfourHandle);
    label25.on("mouseout", twentyfiveHandle);
    label26.on("mouseout", twentysixHandle);
    label27.on("mouseout", twentysevenHandle);
    label28.on("mouseout", twentyeightHandle);
    label29.on("mouseout", twentynineHandle);
    label30.on("mouseout", thirtyHandle);
    label31.on("mouseout", thirtyoneHandle);
    label32.on("mouseout",thirtytwoHandle);
    label33.on("mouseout",thirtythreeHandle);
    label34.on("mouseout",thirtyfourHandle);
    label35.on("mouseout",thirtyfiveHandle);
    label36.on("mouseout",thirtysixHandle);
    label37.on("mouseout",thirtysevenHandle);
    label38.on("mouseout",thirtyeightHandle);
    label39.on("mouseout",thirtynineHandle);
    label40.on("mouseout",fortyHandle);




    stage.addChild(label1,label2,label3, label4, label5, label6, label7, label8, label9, label10, label11, label12, label13, label14, label15, label16, label17, label18, label19, label20, label21, label22, label23, label24, label25, label26, label27, label28, label29, label30,label31, label32, label33, label34, label35, label36, label37, label38, label39, label40);
    stage.update();
    createjs.Ticker.addEventListener("tick");
}
var audio = document.createElement('audio');

function handleInteraction(event) {
    event.target.alpha = (event.type == "mouseover")? 1 : 0.5;
    var audio = new Audio('piano2.wav');
    audio.play();

}
function nextHandle(event) {
    event.target.alpha = (event.type == "mouseover")? 1 : 0.5;
    var audio = new Audio('nice2.wav');
    audio.play();
}
function thirdHandle(event) {
    event.target.alpha = (event.type == "mouseover")? 1 : 0.5;
    audio = new Audio('piano5.wav');
    audio.play();
}
function fourthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    audio = new Audio('piano12.wav');
    audio.play();
}
function fifthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('singlenotepiano2.wav');
    audio.play();
}
function sixthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('piano2.wav');
    audio.play();
}
function seventhHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('singlenotepiano.wav');
    audio.play();
}
function eighthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('stringsync1.wav');
    audio.play();
}
function ninthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('Ambient Tom 4.wav');
    audio.play();
}
function tenthHandle (event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('Ambient Tom 2.wav');
    audio.play();
}
function eleventhHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('Ambient Tom 3.wav');
    audio.play();
}
function twelfthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('Designer Drums Hat 8.wav');
    audio.play();
}
function thirteenthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('Finger Snap Ambience.wav');
    audio.play();
}
function fourteenthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('Ambient Cymbal 1.wav');
    audio.play();
}function fifteenthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('Ambient Tom 2.wav');
    audio.play();
}function sixteenthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('Ambient Cymbal 1.wav');
    audio.play();
}function seventeenthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('low1.wav');
    audio.play();
}function eighteenthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('nice.wav');
    audio.play();
}function nineteenthHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('2lowoctvio.wav');
    audio.play();
}function twentyHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('lowoctviolin.wav');
    audio.play();
}function twentyoneHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('guitaro2.m4a');
    audio.play();
}function twentytwoHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('low2piano.wav');
    audio.play();
}function twentythreeHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('lowoctviolin.wav');
    audio.play();
}function twentyfourHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('low3piano.wav');
    audio.play();
}function twentyfiveHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('jungle.m4a');
    audio.play();
}function twentysixHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('thunderr.m4a');
    audio.play();
}function twentysevenHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('Crickets.m4a');
    audio.play();
}function twentyeightHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('Cinematic Drum Hit 06.wav');
    audio.play();
}function twentynineHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('Cinematic Drum Hit 02.wav');
    audio.play();
}function thirtyHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('Triangle Alarm.wav');
    audio.play();
}function thirtyoneHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('Cinematic Drum Hit 06.wav');
    audio.play();
}function thirtytwoHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('Dark Strike Clash 3.wav');
    audio.play();
}function thirtythreeHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('singlenotepiano2.wav');
    audio.play();
}function thirtyfourHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('singlenotepiano.wav');
    audio.play();
}function thirtyfiveHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('low2piano.wav');
    audio.play();
}function thirtysixHandle(event) {
    event.target.alpha = event.type == "mouseover" ? 1 : 0.5;
    var audio = new Audio('low1.wav');
    audio.play();
}function thirtysevenHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('low2piano.wav');
    audio.play();
}function thirtyeightHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('singlenotepiano2.wav');
    audio.play();
}function thirtynineHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('low3piano.wav');
    audio.play();
}function fortyHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('low1.wav');
    audio.play();
}
var radius = 1;
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = radius*2;


var putPoint = function (e) {
    if (dragging) {
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.arc(e.clientX, e.clientY, radius,0, Math.PI*2);
        context.fill();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
        context.rotate(Math.PI*2);
        context.moveTo(e.clientX, e.clientY);
             }
};
var engage = function(e) {
    dragging = true;
    putPoint(e);
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

