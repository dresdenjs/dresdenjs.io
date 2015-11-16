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
    .directive('setStyleBackground', function () {
        return {
            restrict: 'A',
            template: 'test',
            link: function(scope, element, attrs) {
                console.log(element, attrs['setStyleBackground']);
            }
        };
    });
