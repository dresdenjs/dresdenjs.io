'use strict';

/**
 * @ngdoc overview
 * @name dresdenjsApp
 * @description
 * # dresdenjsApp
 *
 * set elements background color directive.
 */
angular
    .module('dresdenjsApp')
    .directive('setStyleBackgroundColor', function () {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element[0].style.setProperty('background-color', attrs['setStyleBackgroundColor']);
            }
        };
    });
