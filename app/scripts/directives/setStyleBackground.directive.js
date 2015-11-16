'use strict';

/**
 * @ngdoc overview
 * @name dresdenjsApp
 * @description
 * # dresdenjsApp
 *
 * set elements background directive.
 */
angular
    .module('dresdenjsApp')
    .directive('setStyleBackground', function () {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element[0].style.setProperty('background', attrs['setStyleBackground']);
            }
        };
    });
