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
    .config(['markdownProvider', function(markdownProvider) {
        markdownProvider.config({
            // getting error when extension name is camel-cased!
            // Extension 'undefined' could not be loaded.
            // It was either not found or is not a valid extension.
            extensions: ['github', 'table', 'classname', 'id'],
            unsanitized: true,
            simplifiedAutoLink: true
        });
    }]);
