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

        var _colorTo = function (color, force) {
            var el = document.querySelector('md-tabs md-ink-bar');
            el.style.setProperty('background-color', config.colors[color], force ? 'important' : null);
        };

        var _scrollTo = function (region, color) {
            $log.info('scrolling to "%s" with color "%s" (%s)', region, color, config.colors[color]);
            var target = document.querySelector('section[ui-view="' + region + '"]');
            smoothScroll(target);
            _colorTo(color, true);
        };

        var _init = function() {
            $scope.$mdMedia = $mdMedia;
            $scope.site = config.content;
            $scope.views = config.views;
            $scope.scrollTo = _scrollTo;
        };

        _init();
    });
