var http=require('http');

// fetch the URL from command line
var url=process.argv[2];

// console.log(url);

// callback function can be anonymous
http.get(url,function (response){
  response.setEncoding('utf8');
  var content = '';
  var nchars = 0;
  // lezione importante: non c'e' bisogno di una funzione,
  // basta chiamare direttamente console.log
  response.on("data", function(data) {
    content = content + data;
  });
  response.on("error", console.error);
  response.on("end", function (data) {
    console.log(content.length);
    console.log(content);
  });
  // console.log(response);
}).on('error', console.error)
// this last one I am not sure about...