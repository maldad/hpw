var Rot13 = (function () {
    var abc = {
        A: 'N', B: 'O', C: 'P', D: 'Q', E: 'R', F: 'S', G: 'T', H: 'U', I: 'V',
        J: 'W', K: 'X', L: 'Y', M: 'Z', N: 'A', O: 'B', P: 'C', Q: 'D', R: 'E',
        S: 'F', T: 'G', U: 'H', V: 'I', W: 'J', X: 'K', Y: 'L', Z: 'M',
        a: 'n', b: 'o', c: 'p', d: 'q', e: 'r', f: 's', g: 't', h: 'u', i: 'v',
        j: 'w', k: 'x', l: 'y', m: 'z', n: 'a', o: 'b', p: 'c', q: 'd', r: 'e',
        s: 'f', t: 'g', u: 'h', v: 'i', w: 'j', x: 'k', y: 'l', z: 'm',
        ' ': ' ', '\n': '\n', '\t': '\t'
    };

    var change = function(character) {
        return abc[character];
    };

    var encrypt = function(string) {
        var output = "";
        for(var i = 0; i < string.length; i++) { 
            var c = change(string[i]);
            if(typeof c === 'undefined')
                return ''; 
            if(typeof c === 'number')
                return ''; 
            output = output + c;
        }
        return output;
    }
    
    return {
        change: change,
        encrypt: encrypt
    };
})();
