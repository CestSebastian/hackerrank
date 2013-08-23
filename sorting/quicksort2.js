process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = '';
process.stdin.on("data", function (chunk) {
    input += chunk;
});

function quicksort(v) {
    if (v.length <= 1) {
        return v;
    }
    
    var part1 = [],
        part2 = [],
        sorted1 = [],
        sorted2 = [],
        p = v[0],
        i;

    for (i = 1; i < v.length; i++) {
        if (v[i] < p) {
            part1.push(v[i]);
        } else {
            part2.push(v[i]);
        }
    }
    
    sorted1 = quicksort(part1);
    
    //process.stdout.write(sorted1.join(' ') + '\n');
    
    sorted2 = quicksort(part2);
    
    process.stdout.write(sorted1.concat([p], sorted2).join(' ') + '\n');
    
    return sorted1.concat([p], sorted2);
}

process.stdin.on("end", function () {
    var inArray = input.split('\n'),
        v = inArray[1].split(' ').map(Number);
    
    quicksort(v);
});