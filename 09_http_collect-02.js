var http=require('http');
var bl=require('bl');

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
  response.pipe(bl(function (err, data) {
    if(!err) {
      console.log(data.length);
      console.log(data.toString());
    }
  }));
  response.on("error", console.error);
  // console.log(response);
}).on('error', console.error)
// this last one I am not sure about...



