/**
 * Created by rickypuorro on 12/12/16.
 */
// context.globalAlpha = 0.2;

var setRadius=function(newRadius) {
    if (newRadius < minRad)
        newRadius = minRad;
    else if (newRadius > maxRad)
        newRadius = maxRad;


    radius=newRadius;
    context.lineWidth=radius*2;
    radSpan.innerHTML=radius ;
};
    var minRad = 1;
    var maxRad=9;
    var defaultRad=1;
    var interval=1;
    var radSpan=document.getElementById('radval');
    var decRad=document.getElementById('decrad');
    var incRad=document.getElementById('incrad');

    decRad.addEventListener('click', function(){
        setRadius(radius-interval);
    });
    incRad.addEventListener('click', function(){
        setRadius(radius+interval)
    });

setRadius(defaultRad);
