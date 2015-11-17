//
//  Additional Attributes Extension (WIP)
//  :{ .className, attr:value }   ->  <element class="className" attr="value">text</element>
//

(function(){
    var additionalAttributes = function(converter) {
        return [
            {
                // add class name
                // NOTE: showdown already replaced "~" with "~T", so we need to adjust accordingly.
                type    : 'lang',
/*
                regex   : '(~T){2}([^~]+)(~T){2}',
                replace : function(match, prefix, content, suffix) {
                    return '<del>' + content + '</del>';
                }
*/
                filter: function (text) {
                    console.log(arguments);
                }
            }
        ];
    };

    // Client-side export
    if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.additionalAttributes = additionalAttributes; }
    // Server-side export
    if (typeof module !== 'undefined') module.exports = additionalAttributes;
}());
