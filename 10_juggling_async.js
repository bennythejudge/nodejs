var http = require("http");

var urls = process.argv.slice(2);

//console.log(process);
//console.log(process.argv);
//console.log(urls);

var allData = [];
var count = 0;

urls.forEach(function(url, index) {
//    console.log("index: " + index);

    http.get(url, function(response) {

        response.setEncoding("utf8");
        var data = "";

        response.on("data", function(chunk) {
            data += chunk;
        });

        response.on("end", function() {
            allData[index] = data;
            count++;
            if (count === urls.length) {
//                console.log("inside end index: " + index);
                allData.forEach(function(data) {
                    console.log(data);
                });
            }
        });
    });
});