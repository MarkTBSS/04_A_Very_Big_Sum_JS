function aVeryBigSum(ar) {
    var n = ar.length 
    var result = 0 
    for (var i = 0; i < n; i++) {
        result = result + ar[i];
    }
    return result
}

var a = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
console.log(aVeryBigSum(a))

function aVeryBigSumB(ar) {
    function accumulater(accumulator, currentValue) {
        return accumulator + currentValue;
    }
    return ar.reduce(accumulater)
}

var a = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
console.log(aVeryBigSumB(a))

function aVeryBigSumC(ar) {
    return ar.reduce((x, y) => x + y)
}

var a = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
console.log(aVeryBigSumC(a))