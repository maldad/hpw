var BlazeCSS = (function(){
    return {
        'Button': undefined
    };
})();

BlazeCSS.Button = (function(){
    var _basic = function(){
        return HTML.new_element('button', {
            'class': 'c-button'
        });
    };

    var _error = function(){
        return HTML.new_element('button', {
            'class': 'c-button c-button--error'
        });
    };

    var _ghost = function(){
        return HTML.new_element('button', {
            'class': 'c-button c-button--ghost'
        });
    };

    return {
        'basic': _basic,
        'error': _error,
        'ghost': _ghost
    };
})();
