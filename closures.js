function foo() {
    var bar;
    quux = 'outer';

    function zip() {
        var quux;
        bar = true;
    }

    return zip;
}