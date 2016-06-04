// console.log(process.argv);
var c=0;
for (var i = 2; i < process.argv.length; i++) {
    c+=Number(process.argv[i]);
    // console.log(process.argv[i]);
}
console.log(c);