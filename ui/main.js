

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
         
              if (request.status === 200) 
                { 
                    var counter = request.responseText; 
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
                    console.log(request.responseText);
                } 
          } 
    }; 
    request.open("GET", "http://gpreethi.imad.hasura-app.io/counter", true);
    request.send(); 
    console.log('EXECUTED');
}

var nameInput= document.getElementById('name');
var n= nameInput.value;
var submit= document.getElementById('submit_btn');
submit.onClick= function(){
    var names=['name1', 'name2', 'name3', 'name4'];
    var list='';
    for (var i=0; i<names.length; i++) {
        list += '<li>' + names[i] + '</li>';
    }
    var ul= document.getElementById('namelist');
    ul.innerHTML= list;
};
