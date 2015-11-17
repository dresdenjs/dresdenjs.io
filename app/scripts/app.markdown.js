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
    .config(function (markdownConverterProvider) {
        markdownConverterProvider.config({
            extensions: ['github', 'table', 'additionalAttributes']
        });
    });
