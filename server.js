var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
    title :'Articleone | Prasanna Kumar',
    heading:'Articleone',
    date:'Aug 2, 2017',
    link:` <a href="/">home</a>
                    <a href="/article-two">articletwo</a>`,
    content: `
            <p>
                Hai guys this is my first web site designed by my own by learning some basics that have been learnt from the nptel.
            </p>
            <p>
                Hope you will appreciate me. Soner I will design my own webapp
            </p>
            <p>
                I am very glad to say that I am making my own web app.
            </p>`
},
    'article-two':{
         title :'Articletwo | Prasanna Kumar',
         heading:'Articletwo',
         date:'Aug 10, 2017',
         link:`<a href="/">home</a>
            <a href="/article-one">articleone</a>`,
         content: `
            <p>
                Hi guys my date of birth is August 11, 1995
            </p>
            <p>
                hope every one wish for my birthday
            </p>
            `
    }
};
function createTemplate (data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var link=data.link;
    
        var htmlTemplate=`
        <html>
         <head>
             <title>
                 ${title}
             </title>
             <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link href="/ui/style.css" rel="stylesheet" />
         </head>
              <div class="container">
                <div>
                   ${link}
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>  
              </div>
                
        </html>
        `;
        return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
