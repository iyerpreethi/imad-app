console.log('Loaded!');

//var element= document.getElementById("main-text");
//element.innerHTML= ("New Value");

var img= document.getElementById('madi');
var marginLeft = 0;
    img.onclick = function() {
        setInterval( function() {
            marginLeft= marginLeft + 10;
            img.style.marginLeft = marginLeft + 'px';
        } , 100);
    };
    
var button = 0;
var button= document.getElementById ('button');
button.onclick = function (){
    button= button + 1;
    var span= document.getElementById ('count');
    span.innerHTML= button.toString;
};


