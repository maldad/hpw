var M = (function () {
    var a = function(x) {
        return 2 * x;
    }
    var b = function(x) {
        return 3 * x;
    }
    var c = function(x) {
        return a(x) + b(x);
    }
    return {
        "c": c
    }
})();
