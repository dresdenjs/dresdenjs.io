//
//  Class name Extension
//  <element>content</element>:{ #id }   ->  <element id="id">content</element>
//

(function(){
    var id = function(converter) {
        return [
            {
                // add class name
                type: 'html',
                filter: function (html) {
                    html = html.replace(
                        /\<(\w+)(\s*id=".*")*\>(.*)(\s*\{:\s*\#(\w+)\})+(\<\/.*\>)/gi,
                        function (wholeMatch, tagOpen, hasId, content, expression, newId, elemClose) {
                            return '<' + tagOpen + ' id="' + newId + '">' + content + elemClose;
                        }
                    );

                    return html;
                }
            }
        ];
    };

    // Client-side export
    if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.id = id; }
    // Server-side export
    if (typeof module !== 'undefined') module.exports = id;
}());
