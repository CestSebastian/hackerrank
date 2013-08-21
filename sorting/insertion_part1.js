process.stdin.resume();
process.stdin.setEncoding("ascii");
var count = 0;
process.stdin.on("data", function (input) {
    var inputA = input.split('\n');
    
    var len = Number(inputA[0]);
    var v = inputA[1].split(' ');

    var key = v[v.length - 1];
    var inserted = false, index = v.length - 1;
    
    while (index > 0 && v[index - 1] > key) {
        v[index] = v[index - 1];
        index--;
        process.stdout.write(v.join(' ') + '\n');
    }
    
    v[index] = key;
    process.stdout.write(v.join(' ') + '\n');
});
