process.stdin.resume();
process.stdin.setEncoding("ascii");

function countShifts (a) {
    var shifts = 0;
    
    for (var i = 1; i < a.length; i++) {
        for (var j = 0; j < i; j++) {
            if (a[i] < a[j]) shifts++;
        }
    }
    
    return shifts;
}

var input = '';

process.stdin.on("data", function (chunk) {
    input += chunk;
});

process.stdin.on("end", function () {
    var inArray = input.split('\n'),
        count = inArray[0],
        lengths = [],
        arrays = [];
    
    for (var i=1;i<=count;i++) {
        lengths.push(Number(inArray[(i-1) * 2 + 1]));
        arrays.push(inArray[(i - 1) * 2 + 2].split(' ').map(Number));
    }
    console.time('AllTime');
    for (var i=0; i<arrays.length; i++) {
        console.time('time_' + i);
        process.stdout.write(countShifts(arrays[i]) + '\n');
        console.timeEnd('time_' + i);
    }
    console.timeEnd('AllTime');
});
