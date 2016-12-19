/**
 * Created by rickypuorro on 11/19/16.
 */
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var stage;
function init() {
    stage = new createjs.Stage("canvas");
    stage.enableMouseOver(10);
    createjs.Touch.enable(stage);


    //these are variables for the elements that contain the music sounds within artboards. Per CreatejsAPI, originally used as text elements hence "label".
    var label1 = new createjs.Text("g", "95px webdings", "#989fa8");
    label1.x = 0;
    label1.y = 50;
    label1.alpha = .2;

    var label2 = new createjs.Text("g", "95px webdings", "#989fa8");
    label2.x = 100;
    label2.y = 50;
    label2.alpha = .2;

    var label3 = new createjs.Text("g", "95px webdings", "#989fa8");
    label3.x = 200;
    label3.y = 50;
    label3.alpha = .2;

    var label4 = new createjs.Text("g", "95px webdings", "#989fa8");
    label4.x = 300;
    label4.y =50;
    label4.alpha = .2;

    var label5 = new createjs.Text("g", "95px webdings", "#989fa8");
    label5.x = 400;
    label5.y = 50;
    label5.alpha = .2;

    var label6 = new createjs.Text("g", "95px webdings", "#989fa8");
    label6.x = 500;
    label6.y = 50;
    label6.alpha = .2;

    var label7 = new createjs.Text("g", "95px webdings", "#989fa8");
    label7.x = 600;
    label7.y =  50;
    label7.alpha = .2;

    var label8 = new createjs.Text("g", "95px webdings", "#989fa8");
    label8.x = 700;
    label8.y = 50;
    label8.alpha = .2;

    var label9 = new createjs.Text("g", "95px webdings", "#989fa8");
    label9.x = 800;
    label9.y = 50;
    label9.alpha = .2;

    var label10 = new createjs.Text("g", "95px webdings", "#989fa8");
    label10.x = 900;
    label10.y = 50;
    label10.alpha = .2;

    var label11 = new createjs.Text("g", "95px webdings", "#989fa8");
    label11.x = 1000;
    label11.y = 50;
    label11.alpha = .2;

    var label12 = new createjs.Text("g", "95px webdings", "#989fa8");
    label12.x = 0;
    label12.y = 150;
    label12.alpha = .2;

    var label13 = new createjs.Text("g", "95px webdings", "#989fa8");
    label13.x = 100;
    label13.y = 150;
    label13.alpha = .2;

    var label14 = new createjs.Text("g", "95px webdings", "#989fa8");
    label14.x = 200;
    label14.y = 150;
    label14.alpha = .2;

    var label15 = new createjs.Text("g", "95px webdings", "#989fa8");
    label15.x = 300;
    label15.y = 150;
    label15.alpha = .2;

    var label16 = new createjs.Text("g", "95px webdings", "#989fa8");
    label16.x = 400;
    label16.y = 150;
    label16.alpha = .2;

    var label17 = new createjs.Text("g", "95px webdings", "#989fa8");
    label17.x = 500;
    label17.y = 150;
    label17.alpha = .2;

    var label18 = new createjs.Text("g", "95px webdings", "#989fa8");
    label18.x = 600;
    label18.y = 150;
    label18.alpha = .2;

    var label19 = new createjs.Text("g", "95px webdings", "#989fa8");
    label19.x = 700;
    label19.y = 150;
    label19.alpha = .2;

    var label20 = new createjs.Text("g", "95px webdings", "#989fa8");
    label20.x = 800;
    label20.y = 150;
    label20.alpha = .2;

    var label21 = new createjs.Text("g", "95px webdings", "#989fa8");
    label21.x = 900;
    label21.y = 150;
    label21.alpha = .2;

    var label22 = new createjs.Text("g", "95px webdings", "#989fa8");
    label22.x = 1000;
    label22.y = 150;
    label22.alpha = .2;
    var label23 = new createjs.Text("g", "95px webdings", "#989fa8");
    label23.x = 0;
    label23.y = 250;
    label23.alpha = .2;

    var label24 = new createjs.Text("g", "95px webdings", "#989fa8");
    label24.x = 100;
    label24.y = 250;
    label24.alpha = .2;

    var label25 = new createjs.Text("g", "95px webdings", "#989fa8");
    label25.x = 200;
    label25.y = 250;
    label25.alpha = .2;

    var label26 = new createjs.Text("g", "95px webdings", "#989fa8");
    label26.x = 300;
    label26.y = 250;
    label26.alpha = .2;

    var label27 = new createjs.Text("g", "95px webdings", "#989fa8");
    label27.x = 400;
    label27.y = 250;
    label27.alpha = .2;

    var label28 = new createjs.Text("g", "95px webdings", "#989fa8");
    label28.x = 500;
    label28.y = 250;
    label28.alpha = .2;

    var label29 = new createjs.Text("g", "95px webdings", "#989fa8");
    label29.x = 600;
    label29.y = 250;
    label29.alpha = .2;

    var label30 = new createjs.Text("g", "95px webdings", "#989fa8");
    label30.x = 700;
    label30.y = 250;
    label30.alpha = .2;

    var label31 = new createjs.Text("g", "95px webdings", "#989fa8");
    label31.x = 800;
    label31.y = 250;
    label31.alpha = .2;

    var label32 = new createjs.Text("g", "95px webdings", "#989fa8");
    label32.x = 900;
    label32.y = 250;
    label32.alpha = .2;

    var label33 = new createjs.Text("g", "95px webdings", "#989fa8");
    label33.x = 1000;
    label33.y = 250;
    label33.alpha = .2;

    var label34 = new createjs.Text("g", "95px webdings", "#989fa8");
    label34.x = 0;
    label34.y = 350;
    label34.alpha = .2;

    var label35 = new createjs.Text("g", "95px webdings", "#989fa8");
    label35.x = 100;
    label35.y = 350;
    label35.alpha = .2;

    var label36 = new createjs.Text("g", "95px webdings", "#989fa8");
    label36.x = 200;
    label36.y = 350;
    label36.alpha = .2;

    var label37 = new createjs.Text("g", "95px webdings", "#989fa8");
    label37.x = 300;
    label37.y = 350;
    label37.alpha = .2;

    var label38 = new createjs.Text("g", "95px webdings", "#989fa8");
    label38.x = 400;
    label38.y = 350;
    label38.alpha = .2;

    var label39 = new createjs.Text("g", "95px webdings", "#989fa8");
    label39.x = 500;
    label39.y = 350;
    label39.alpha = .2;

    var label40 = new createjs.Text("g", "95px webdings", "#989fa8");
    label40.x = 600;
    label40.y = 350;
    label40.alpha = .2;


    var label41 = new createjs.Text("g", "95px webdings", "#989fa8");
    label41.x = 700;
    label41.y = 350;
    label41.alpha = .2;

    var label42 = new createjs.Text("g", "95px webdings", "#989fa8");
    label42.x = 800;
    label42.y = 350;
    label42.alpha = .2;

    var label43 = new createjs.Text("g", "95px webdings", "#989fa8");
    label43.x = 900;
    label43.y = 350;
    label43.alpha = .2;

    var label44 = new createjs.Text("g", "95px webdings", "#989fa8");
    label44.x = 1000;
    label44.y = 350;
    label44.alpha = .2;

    var label45 = new createjs.Text("g", "95px webdings", "#989fa8");
    label45.x = 0;
    label45.y = 450;
    label45.alpha = .2;

    var label46 = new createjs.Text("g", "95px webdings", "#989fa8");
    label46.x = 100;
    label46.y = 450;
    label46.alpha = .2;

    var label47 = new createjs.Text("g", "95px webdings", "#989fa8");
    label47.x = 200;
    label47.y = 450;
    label47.alpha = .2;

    var label48 = new createjs.Text("g", "95px webdings", "#989fa8");
    label48.x = 300;
    label48.y = 450;
    label48.alpha = .2;

    var label49 = new createjs.Text("g", "95px webdings", "#989fa8");
    label49.x = 400;
    label49.y = 450;
    label49.alpha = .2;

    var label50 = new createjs.Text("g", "95px webdings", "#989fa8");
    label50.x = 500;
    label50.y = 450;
    label50.alpha = .2;


    var label51 = new createjs.Text("g", "95px webdings", "#989fa8");
    label51.x = 600;
    label51.y = 450;
    label51.alpha = .2;

    var label52 = new createjs.Text("g", "95px webdings", "#989fa8");
    label52.x = 700;
    label52.y = 450;
    label52.alpha = .2;

    var label53 = new createjs.Text("g", "95px webdings", "#989fa8");
    label53.x = 800;
    label53.y = 450;
    label53.alpha = .2;

    var label54 = new createjs.Text("g", "95px webdings", "#989fa8");
    label54.x = 900;
    label54.y = 450;
    label54.alpha = .2;

    var label55 = new createjs.Text("g", "95px webdings", "#989fa8");
    label55.x = 1000;
    label55.y = 450;
    label55.alpha = .2;

    var label56 = new createjs.Text("g", "95px webdings", "#989fa8");
    label56.x = 0;
    label56.y = 550;
    label56.alpha = .2;

    var label57 = new createjs.Text("g", "95px webdings", "#989fa8");
    label57.x = 100;
    label57.y = 550;
    label57.alpha = .2;

    var label58 = new createjs.Text("g", "95px webdings", "#989fa8");
    label58.x = 200;
    label58.y = 550;
    label58.alpha = .2;

    var label59 = new createjs.Text("g", "95px webdings", "#989fa8");
    label59.x = 300;
    label59.y = 550;
    label59.alpha = .2;

    var label60 = new createjs.Text("g", "95px webdings", "#989fa8");
    label60.x = 400;
    label60.y = 550;
    label60.alpha = .2;

    var label61 = new createjs.Text("g", "95px webdings", "#989fa8");
    label61.x = 500;
    label61.y = 550;
    label61.alpha = .2;

    var label62 = new createjs.Text("g", "95px webdings", "#989fa8");
    label62.x = 600;
    label62.y = 550;
    label62.alpha = .2;

    var label63 = new createjs.Text("g", "95px webdings", "#989fa8");
    label63.x = 700;
    label63.y = 550;
    label63.alpha = .2;

    var label64 = new createjs.Text("g", "95px webdings", "#989fa8");
    label64.x = 800;
    label64.y = 550;
    label64.alpha = .2;

    var label65 = new createjs.Text("g", "95px webdings", "#989fa8");
    label65.x = 900;
    label65.y = 550;
    label65.alpha = .2;

    var label66 = new createjs.Text("g", "95px webdings", "#989fa8");
    label66.x = 1000;
    label66.y = 550;
    label66.alpha = .2;


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
    label41.on("mousedown", fortyoneHandle);
    label42.on("mousedown", fortytwoHandle);
    label43.on("mousedown", fortythreeHandle);
    label44.on("mousedown", fortyfourHandle);
    label45.on("mousedown", fortyfiveHandle);
    label46.on("mousedown", fortysixHandle);
    label47.on("mousedown", fortysevenHandle);
    label48.on("mousedown", fortyeightHandle);
    label49.on("mousedown", fortynineHandle);
    label50.on("mousedown", fiftyHandle);
    label51.on("mousedown", fiftyoneHandle);
    label52.on("mousedown", fiftytwoHandle);
    label53.on("mousedown", fiftythreeHandle);
    label54.on("mousedown", fiftyfourHandle);
    label55.on("mousedown", fiftyfiveHandle);
    label56.on("mousedown", fiftysixHandle);
    label57.on("mousedown", fiftysevenHandle);
    label58.on("mousedown", fiftyeightHandle);
    label59.on("mousedown", fiftynineHandle);
    label60.on("mousedown", sixtyHandle);
    label61.on("mousedown", sixtyoneHandle);
    label62.on("mousedown", sixtytwoHandle);
    label63.on("mousedown", sixtythreeHandle);
    label64.on("mousedown", sixtyfourHandle);
    label65.on("mousedown", sixtyfiveHandle);
    label66.on("mousedown", sixtysixHandle);





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
    label32.on("mouseout", thirtytwoHandle);
    label33.on("mouseout", thirtythreeHandle);
    label34.on("mouseout", thirtyfourHandle);
    label35.on("mouseout", thirtyfiveHandle);
    label36.on("mouseout", thirtysixHandle);
    label37.on("mouseout", thirtysevenHandle);
    label38.on("mouseout", thirtyeightHandle);
    label39.on("mouseout", thirtynineHandle);
    label40.on("mouseout", fortyHandle);
    label41.on("mouseout", fortyoneHandle);
    label42.on("mouseout", fortytwoHandle);
    label43.on("mouseout", fortythreeHandle);
    label44.on("mouseout", fortyfourHandle);
    label45.on("mouseout", fortyfiveHandle);
    label46.on("mouseout", fortysixHandle);
    label47.on("mouseout", fortysevenHandle);
    label48.on("mouseout", fortyeightHandle);
    label49.on("mouseout", fortynineHandle);
    label50.on("mouseout", fiftyHandle);
    label51.on("mouseout", fiftyoneHandle);
    label52.on("mouseout", fiftytwoHandle);
    label53.on("mouseout", fiftythreeHandle);
    label54.on("mouseout", fiftyfourHandle);
    label55.on("mouseout", fiftyfiveHandle);
    label56.on("mouseout", fiftyfiveHandle);
    label57.on("mouseout", fiftyfiveHandle);
    label58.on("mouseout", fiftyfiveHandle);
    label59.on("mouseout", fiftyfiveHandle);
    label60.on("mouseout", fiftyfiveHandle);
    label61.on("mouseout", fiftyfiveHandle);
    label62.on("mouseout", fiftyfiveHandle);
    label63.on("mouseout", fiftyfiveHandle);
    label64.on("mouseout", fiftyfiveHandle);
    label65.on("mouseout", fiftyfiveHandle);
    label66.on("mouseout", fiftyfiveHandle);




    stage.addChild(label1,label2,label3, label4, label5, label6, label7, label8, label9, label10, label11, label12, label13, label14, label15, label16, label17, label18, label19, label20, label21, label22, label23, label24, label25, label26, label27, label28, label29, label30,label31, label32, label33, label34, label35, label36, label37, label38, label39, label40, label41,label42 ,label43 , label44, label45, label46,label47 ,label48 ,label49 ,label50 ,label51,label52 ,label53 ,label54, label55,  label56,label57, label58, label59, label60, label61, label62,label63, label64, label65, label66);
    stage.update();
    createjs.Ticker.addEventListener("tick");
}

var audio = document.createElement('audio');

function handleInteraction(event) {
        event.target.alpha = (event.type == "mouseover")? 1 : 0.5;
        var audio = new Audio('piano2.wav');
        audio.play();
    //document.getElementById("canvas").style.background = "#40444f";

    }
    function nextHandle(event) {
        event.target.alpha = (event.type == "mouseover")? 1 : 0.5;
        var audio = new Audio('piano5.wav');
        audio.play();
        audio.volume=.5;
        event.target.alpha = (event.type == "mouseover")? 1 : 0.5;
         //document.getElementById("canvas").style.background = "#263238";


    }
    function thirdHandle(event) {
        event.target.alpha = (event.type == "mouseover")? 1 : 0.5;
        audio = new Audio('singlenotepiano2.wav');
        audio.play();
        audio.volume=.5;
        event.target.alpha = (event.type == "mouseover")? 1 : 0.5;

    }
    function fourthHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        audio = new Audio('048_ped_h.wav');
        audio.play();
        audio.volume=.5;

    }
    function fifthHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('Tuning Fork Piano ff C3.wav');
        audio.play();
        audio.volume=.5;

    }
    function sixthHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('highchordstrum.m4a');
        audio.play();
        audio.volume=1;

    }
    function seventhHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('guitarg.m4a');
        audio.play();
        audio.volume=.5;

    }
    function eighthHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('stringsync1.wav');
        audio.play();
        audio.volume=.5;

    }
    function ninthHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('middlegacoustic.m4a');
        audio.play();
        audio.volume=1;

    }
    function tenthHandle (event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('VI1-L_legato_f_C4.wav');
        audio.play();
        audio.volume=.5;

    }
    function eleventhHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('Tibetan Bowl 01.wav');
        audio.play();
    }
    function twelfthHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('Planetary Chord C2.wav');
        audio.play();
        audio.volume=.5;

    }
    function thirteenthHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('mid12stringstrum.m4a');
        audio.play();
    }
    function fourteenthHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('stringsync1.wav');
        audio.play();
    }function fifteenthHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('Soft Crunchy D2.wav');
        audio.play();
    }function sixteenthHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('17f7aE3 M.wav');
        audio.play();
    }function seventeenthHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('low1.wav');
        audio.play();
    }function eighteenthHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('Soft Crunchy G2.wav');
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
        var audio = new Audio('low1.wav');
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
        var audio = new Audio('036_ped_h.wav', 'chordc2.m4a');
        audio.play();
    audio.volume=1;

}function twentysixHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('041_ped_h.wav');
        audio.play();
    audio.volume=1;

}function twentysevenHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('043_ped_mf.wav');
        audio.play();
    audio.volume=1;

}function twentyeightHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('Modular Strings C2.wav');
        audio.play();
        audio.volume=.4;

}function twentynineHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('Pad Room Pluck D2.wav');
        audio.volume=.4;

    audio.play();
    }function thirtyHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('050_ped_mf.wav');
        audio.play();
       audio.volume=.8;

}function thirtyoneHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('Bellsp48.m4a');
        audio.play();
        audio.volume=.5;

}function thirtytwoHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('withpiano2.wav');
        audio.play();

}function thirtythreeHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('Soft Crunchy D2.wav');
        audio.play();
       audio.volume=.5;

}function thirtyfourHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('08n7aG2.wav');
        audio.play();
    }function thirtyfiveHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('low2piano.wav');
        audio.play();
    }function thirtysixHandle(event) {
        event.target.alpha = event.type == "mouseover" ? 1 : 0.5;
        var audio = new Audio('048_ped_s.wav');
        audio.play();
    }function thirtysevenHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('048_ped_s.wav');
        audio.play();
    }function thirtyeightHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('050_ped_mf.wav');
        audio.play();
    }function thirtynineHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('050_ped_mf.wav');
        audio.play();
    }function fortyHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('052_ped_h.wav');
        audio.play();
        audio.volume=.5;

}function fortyoneHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('052_ped_h.wav');
    audio.play();
    }function fortytwoHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('076_ped_h.wav');
        audio.play();
        audio.volume=.5;

}function fortythreeHandle(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
    var audio = new Audio('076_E4KM56_H.wav');
    audio.play();
    audio.volume=.5;
    }function fortyfourHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('084_C5KM56_S.wav');
        audio.play();
    audio.volume=.5;
    }function fortyfiveHandle(event) {
        event.target.alpha = (event.type == "mouseover")? 1 : 0.5;
        var audio = new Audio('036_ped_h.wav');
        audio.play();
    }function fortysixHandle(event) {
        event.target.alpha = (event.type == "mouseover")? 1 : 0.5;
        audio = new Audio('piano5.wav');
        audio.play();
    }function fortysevenHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('singlenotepiano2.wav');
        audio.play();
    }function fortyeightHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('guitarooo3.m4a');
        audio.play();
    }function fortynineHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('guitarooo3.m4a');
        audio.play();
    }function fiftyHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('guitarooo3.m4a');
        audio.play();
    }function fiftyoneHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('guitarooo3.m4a');
        audio.play();
    }function fiftytwoHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('guitarooo3.m4a');
        audio.play();
    }function fiftythreeHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('guitarooo3.m4a');
        audio.play();
    }function fiftyfourHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('guitarooo3.m4a');
        audio.play();
    }function fiftyfiveHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('guitarooo3.m4a');
        audio.play();
    }function fiftysixHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('guitarooo3.m4a');
        audio.play();
    }function fiftysevenHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('guitarooo3.m4a');
        audio.play();
    }function fiftyeightHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('guitarooo3.m4a');
        audio.play();
    }function fiftynineHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('guitarooo3.m4a');
        audio.play();
    }function sixtyHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('guitarooo3.m4a');
        audio.play();
    }function sixtyoneHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('guitarooo3.m4a');
        audio.play();
    }function sixtytwoHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('guitarooo3.m4a');
        audio.play();
    }function sixtythreeHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('guitarooo3.m4a');
        audio.play();
    }function sixtyfourHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('guitarooo3.m4a');
        audio.play();
    }function sixtyfiveHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('guitarooo3.m4a');
        audio.play();
    }function sixtysixHandle(event) {
        event.target.alpha = (event.type == "mouseover") ? 1 : 0.5;
        var audio = new Audio('guitarooo3.m4a');
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
canvas.addEventListener('touchstart', engage);
canvas.addEventListener('touchmove', putPoint);
canvas.addEventListener('touchend', disengage);




function changeBackground1(){
        document.getElementById("canvas").style.background = "#382e36";
}
function changeBackground2(){
        document.getElementById("canvas").style.background = "#cbd1ef";
}
function changeBackground3(){
    document.getElementById("canvas").style.background = "#332823";
}
function changeBackground4(){
    document.getElementById("canvas").style.background = "#bae8d9";
}
function changeBackground5(){
    document.getElementById("canvas").style.background = "#bfcee0";
}
function changeBackground6(){
    document.getElementById("canvas").style.background = "#ffffff";
}
function changeBackground7(){
    document.getElementById("canvas").style.background = "#cbd1ef";
}
function changeBackground8(){
    document.getElementById("canvas").style.background = "#332823";
}

function changeColor(color) {
    context.strokeStyle = color;
    context.fillStyle = color;
}


$.fn.drawTouch = function() {
    var start = function(e) {
        var touchEvent = e.originalEvent.changedTouches[0];
        context.beginPath();
        context.moveTo(touchEvent.pageX, touchEvent.pageY);
    };
    var move = function(e) {
        var touchEvent = e.originalEvent.changedTouches[0];
        e.preventDefault();
        context.lineTo(touchEvent.pageX, touchEvent.pageY);
        context.stroke();
    };
    $(this).touchstart(start);
    $(this).touchmove(move);
};
window.addEventListener("keydown", function(e) {
    // space, page up, page down and arrow keys:
    if([32, 33, 34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);