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
    return {
        'basic': _basic
    };
})();
