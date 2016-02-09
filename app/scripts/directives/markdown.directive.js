'use strict';

angular
    .module('dresdenjsApp')
    .provider('markdown', function () {
        var self = this;
        this.opts = {};
        return {
            config: function (newOpts) {
                self.opts = newOpts;
            },
            $get: function () {
                return {
                    getConverter: function () {
                        return new Showdown.converter(self.opts);
                    },
                    getOptions: function () {
                        return self.opts;
                    }
                };
            }
        };
    })
    .directive('markdown', ['$sanitize', 'markdown', function ($sanitize, markdown) {
        return {
            restrict: 'AE',
            link: function (scope, element, attrs) {
                var converter = markdown.getConverter();
                var options = markdown.getOptions();

                if (attrs.markdown) {
                    scope.$watch(attrs.markdown, function (newVal) {
                        var html = newVal ? (!!options.unsanitized ? converter.makeHtml(newVal) : $sanitize(converter.makeHtml(newVal))) : '';
                        element.html(html);
                    });
                } else {
                    var html = !!options.unsanitized ? converter.makeHtml(element.text()) : $sanitize(converter.makeHtml(element.text()));
                    element.html(html);
                }
            }
        };
    }]);
