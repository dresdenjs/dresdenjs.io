'use strict';

/**
 * @ngdoc overview
 * @name dresdenjsApp
 * @description
 * # dresdenjsApp
 *
 * Section directive.
 */
angular
    .module('dresdenjsApp')
    .directive('setStyle', function () {
        return {
            restrict: 'A',
            template: 'test',
            link: function(scope, element, attrs) {
                console.log(element, attrs['setStyle']);
            }
        };
    });
