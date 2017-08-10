var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
    articleone: {
    title:'article-one',
    date: '8th Aug 2017',
    content: `
    <p>
      This is my first article. This is my first article. This is my first article. This is my first article.
      This is my first article. This is my first article. This is my first article. This is my first article.
      This is my first article. This is my first article. This is my first article. This is my first article.
    </p>
    <p>
      This is my first article. This is my first article. This is my first article. This is my first article.
      This is my first article. This is my first article. This is my first article. This is my first article.
      This is my first article. This is my first article. This is my first article. This is my first article.
    </p>
    <p>
      This is my first article. This is my first article. This is my first article. This is my first article.
      This is my first article. This is my first article. This is my first article. This is my first article.
      This is my first article. This is my first article. This is my first article. This is my first article.
    </p>`
    },
    
    articletwo: {
    title:'article-two',
    date: '18th Aug 2017',
    content: `
    <p>
      This is my second article. 
    </p>`
    },
      
    articlethree: {
    title:'article-three',
    date: '28th Aug 2017',
    content: `
    <p>
      This is my third article. 
    </p>`
    }
};
    
   

function createtemplate (data) {
    var title= data.title;
    var date= data.date;
    var content= data.content;
    var htmltemplate= `
<html>
  <head>
      <title>
          ${title}
      </title>
      <meta name="viewport" content= "width= device-width initial scale=1" />
      <link href="/ui/style.css" rel="stylesheet" />
  </head>   
  <body>
      <div>
          <a Href='/'>Home</a>
      </div>
      <hr/>
    <div class="container">
      <div>
          <h1>
              Preethi Ganeshan
          </h1>
      </div>
      <div>
          <h3>
              ${date}
          </h3>
      </div>
      <div>
          ${content}
      </div>
    </div>
  </body>
</html>`;
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one', function (req, res) {
    res.send(createtemplate(articles(articleone)));
});

app.get('/article-two', function (req, res) {
    res.send(createtemplate(articles(articletwo)));
});

app.get('/article-three', function (req, res) {
    res.send(createtemplate(articles(articlethree)));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
