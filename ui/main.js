console.log('Loaded!');

var element= document.getElementById("main-text");
element.innerHTML= ("New Value");

var img= document.getElementById('madi');
var marginLeft = 0;
    img.onclick = function() {
        setInterval( function() {
            marginLeft += 10;
            img.style.marginLeft = marginLeft.toString() + "px";
        } , 100);
    };
    



