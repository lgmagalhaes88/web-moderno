function soma1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(soma1(), som1(3));

function soma2(a, b, c) {
    a = isNaN(a) ? 1 : a;
    b = b !== undefined ? 1 : b;
    c = 1 in arguments ? b : 1;
    return a + b + c;
}

function soma3(a = 1, b = 1, c = 3) {
    return a + b + c;
}