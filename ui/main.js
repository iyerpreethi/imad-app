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
    

var button= document.getElementById("counter");
button.onclick = function (){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'http://gpreethi.imad.hasura-app.io/counter',true);
    xhr.send();
    xhr.onReadyStateChange= function(){
        if (xhr.readyState=== XMLHttpRequest.DONE && xhr.status=== 200);
        var counter= xhr.responseText;
        var span= document.getElementById("count");
        span.innerHTML= counter.toString();
    };
};


