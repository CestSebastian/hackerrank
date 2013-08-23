process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = '';
process.stdin.on("data", function (chunk) {
    input += chunk;
});

process.stdin.on("end", function () {
    var inArray = input.split('\n'),
        len = Number(inArray[0]),
        v = inArray[1].split(' ').map(Number),
        p = v[0],
        part1 = [],
        part2 = [],
        i;
    
    for (i = 1; i < len; i++) {
        if (v[i] < p) {
            part1.push(v[i]);
        } else {
            part2.push(v[i]);
        }
    }
    
    process.stdout.write(part1.concat([p], part2).join(' ') + '\n');
});