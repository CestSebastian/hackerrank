process.stdin.resume();
process.stdin.setEncoding("ascii");

function insertionSort(a) {
    for (var i = 1, len = a.length; i < len; i++) {
        var key = a[i], j=i;
        while (j>0 && a[j-1] > key) {
            a[j] = a[j-1];
            j--;
        }
        a[j] = key;
        process.stdout.write(a.join(' ') + '\n');
    }
}

process.stdin.on("data", function (input) {
    var inArray = input.split('\n'),
        len = Number(inArray[0]),
        v = inArray[1].split(' ');
    
    insertionSort(v);
});
