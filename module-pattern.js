var stack = (function() {
    var a = [];

    var pushFn = function(value) {
         a.push(value);
         return value;
    };

    var popFn = function() {
        return a.pop();
    }

    var getA = function() {
        return a;
    }

    return {
        push: pushFn,
        pop: popFn,
        get: getA
    }
})();

console.log('Push',stack.push(1),'to stack:', stack.get());
console.log('Push',stack.push(2),'to stack:', stack.get());
console.log('Push',stack.push(3),'to stack:', stack.get());

console.log('Pop ',stack.pop(),' from stack:', stack.get());
console.log('Pop ',stack.pop(),' from stack:', stack.get());

console.log('Push',stack.push(5),'to stack:', stack.get());
console.log('Push',stack.push(6),'to stack:', stack.get());

console.log('Pop ',stack.pop(),' from stack:', stack.get());