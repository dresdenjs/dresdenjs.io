'use strict';

/**
 * @ngdoc overview
 * @name dresdenjsApp
 * @description
 * # dresdenjsApp
 *
 * Markdown configuration of the application.
 */
angular
    .module('dresdenjsApp')
    .config(['markdownConverterProvider', function(markdownConverterProvider) {
        markdownConverterProvider.config({
            // getting error when extension name is camel-cased!
            // Extension 'undefined' could not be loaded.
            // It was either not found or is not a valid extension.
            extensions: ['github', 'table', 'classname']
        });
    }]);
