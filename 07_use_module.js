var filtered_fs = require('./06_module_fs_filtered.js');

var dir = process.argv[2];
var ext = process.argv[3];



filtered_fs(dir, ext, function(err,data){
  if (err) {
    console.log("there was an error " + err);
    return;
  } else {
    //console.log('here');
    data.forEach(function(d){
      console.log(d);
    })
  }
});
