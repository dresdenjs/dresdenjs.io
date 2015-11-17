//
//  Class name Extension
//  <element>content</element>:{ .class.names }   ->  <element class="class names">content</element>
//

(function(){
    var classname = function(converter) {
        return [
            {
                // add class name
                type: 'html',
                filter: function (html) {
                    html = html.replace(
                        /\<(.*)(\s*class="(.*)")*\>(.*)(\<\/.*\>)\n*\<p\>\{:\s*\.(.*)\}\<\/p\>/gi,
                        function (wholeMatch, tagOpen, hasClass, existingClass, content, elemClose, classes) {
                            return '<' + tagOpen + ' class="' + classes.replace('.', ' ') + '">' + content + elemClose;
                        }
                    );

                    return html;
                }
            }
        ];
    };

    // Client-side export
    if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.classname = classname; }
    // Server-side export
    if (typeof module !== 'undefined') module.exports = classname;
}());
