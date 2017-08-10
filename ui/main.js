console.log('Loaded!');

var element= document.getElementById("main-text");
element.innerHTML= ("New Value");

var img= document.getElementById('madi');
var marginLeft = 0;
    img.onclick = function() {
        setInterval( function() {
            marginLeft= marginLeft + "10 px";
            img.style.marginLeft = marginLeft;
        } , 100);
    };
    



