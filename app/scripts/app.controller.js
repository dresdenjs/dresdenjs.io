'use strict';

/**
 * @ngdoc overview
 * @name dresdenjsApp
 * @description
 * # dresdenjsApp
 *
 * Main controller of the application.
 */
angular
    .module('dresdenjsApp')
    .controller('MainCtrl', function ($scope, $mdMedia, $log, config, smoothScroll) {
        $scope.$mdMedia = $mdMedia;

        $scope.views = config.views;

        $scope.scrollTo = function (region) {
            $log.info('scrolling to "%s"', region);
            var target = document.querySelector('section[ui-view="' + region + '"]');
            smoothScroll(target);
        };
    });
