'use strict';

/**
 * @ngdoc overview
 * @name dresdenjsApp
 * @description
 * # dresdenjsApp
 *
 * set elements color directive.
 */
angular
    .module('dresdenjsApp')
    .directive('setStyleColor', function () {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element[0].style.setProperty('color', attrs['setStyleColor']);
            }
        };
    });
