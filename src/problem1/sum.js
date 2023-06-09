var sum_to_n_a = function(n) {
    return (n * (n + 1)) / 2;
}

var sum_to_n_b = function(n) {
    if (n <= 0) {
        return 0;
    }
    return n + sum_to_n_a(n - 1);
}

var sum_to_n_c = function(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}


for (let n = 0; n <= 10; n++) {
    console.log("Result a: " + sum_to_n_a(n));
    console.log("Result b: " + sum_to_n_b(n));
    console.log("Result c: " + sum_to_n_c(n));
}