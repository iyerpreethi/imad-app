

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
    

function exec(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() 
    {
          if (request.readyState === XMLHttpRequest.DONE) 
          {
              //Take Some Action
              if (request.status === 200) 
                { 
                    var counter = request.responseText; 
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
                } 
          } 
    }; 
    request.open("GET", "http://gpreethi.imad.hasura-app.io/counter", true);
    request.send(); 
    console.log('EXECUTED');
}