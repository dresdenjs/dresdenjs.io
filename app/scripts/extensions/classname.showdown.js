//
//  Class name Extension
//  <element>content</element>:{ .class.names }   ->  <element class="class names">content</element>
//

(function () {
    var classname = function (converter) {
        return [
            {
                // add class name
                type: 'html',
                filter: function (html) {
                    html = html.replace(
                        /<(.+)(\s*class="(.*)")*(.*)>(.*?)(\{:\s([\.\w]+)\})+</gi,
                        function (wholeMatch, tagOpen, hasClass, existingClass, tagOpenExtra, content, expression, newClass) {
                            var classes = (existingClass || '').split(' ');
                            classes = classes.concat(newClass.split('.'));
                            classes = classes.filter(function (e) {
                                return e;
                            });
                            return '<' + tagOpen + ' class="' + classes.join(' ') + '"' + tagOpenExtra + '>' + content + '<';
                        }
                    );

                    return html;
                }
            }
        ];
    };

    // Client-side export
    if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) {
        window.Showdown.extensions.classname = classname;
    }
    // Server-side export
    if (typeof module !== 'undefined') module.exports = classname;
}());
