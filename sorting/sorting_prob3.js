process.stdin.resume();
process.stdin.setEncoding("ascii");

var swaps = 0;

function merge(v, i, mid, j) {
    var x = i,
        y = mid + 1,
        aux = [];
    
    while (x <= mid && y <= j) {
        if (v[x] <= v[y]) {
            aux.push(v[x]);
            x++;
        } else {
            aux.push(v[y]);
            y++;
            swaps+= mid - x + 1;
        }
    }
    
    if (x <= mid) {
        for (x; x <= mid; x++) {
            aux.push(v[x]);
        }
    }
    
    if (y <= j) {
        for (y; y <= j; y++) {
            aux.push(v[y]);
        }
    }
    
    for (var k = i; k <= j; k++) {
        v[k] = aux[k - i];
    }
}

function merge_sort(v, i, j) {
    if (i < j) {
        var mid = Math.floor((i + j) / 2);
        merge_sort(v, i, mid);
        merge_sort(v, mid + 1, j);
        merge(v, i, mid, j);
    }
}

function countShifts (a) {
    swaps = 0;
    
    merge_sort(a, 0, a.length - 1);
    
//     for (var i = 1; i < a.length; i++) {
//         for (var j = 0; j < i; j++) {
//             if (a[i] < a[j]) shifts++;
//         }
//     }
    
    return swaps;
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
        
        if (!inArray[(i - 1) * 2 + 2]) {
            process.stdout.write(i + '\n');
        }
        arrays.push(inArray[(i - 1) * 2 + 2].split(' ').map(Number));
    }
    
    for (var i=0; i<arrays.length; i++) {
        process.stdout.write(countShifts(arrays[i]) + '\n');
    }
});
