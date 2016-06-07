var fs = require('fs');
var path = require('path');

module.exports = function filtered_fs(dir,ext, callback) {

  // should do a bit of argument validation but...
  var my_ext = '.' + ext;
  var sublist = [];

  fs.readdir(dir,function(err,list){
    if (err) return callback(err);
    list.forEach(function(file){
      //console.log(file);
      if (path.extname(file) === my_ext) {
        sublist.push(file);
      }
    })
    callback(null,sublist);
  })
}
