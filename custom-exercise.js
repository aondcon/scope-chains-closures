var queue = (function() {
    var data = [];
    var get = function() { return data; };
    var enqueueFn = function(value) { data.push(value); };
    var dequeueFn = function() { return data.shift(); };

    return {
        get: get,
        enqueue: enqueueFn,
        dequeue: dequeueFn
    }
})();

queue.enqueue('Z');
console.log('Add', 'A', 'to queue:', queue.get());
queue.enqueue('K');
console.log('Add', 'B', 'to queue:', queue.get());
queue.enqueue('J');
console.log('Add', 'C', 'to queue:', queue.get());

console.log('Remove', queue.dequeue(), 'from queue:', queue.get());

queue.enqueue('A');
console.log('Add', 'D', 'to queue:', queue.get());
queue.enqueue('C');
console.log('Add', 'E', 'to queue:', queue.get());

console.log('Remove', queue.dequeue(), 'from queue:', queue.get());

queue.enqueue('K');
console.log('Add', 'E', 'to queue:', queue.get());
console.log('Remove', queue.dequeue(), 'from queue:', queue.get());
console.log('Remove', queue.dequeue(), 'from queue:', queue.get());