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

        var _setStyle = function (el, prop, val, force) {
            el.style.setProperty(prop, val, force ? 'important' : null);
        };

        var _colorInkBar = function (background, force) {
            var el = document.querySelector('md-tabs md-ink-bar');
            _setStyle(el, 'background-color', config.colors[background], force);
        };

        var _setSectionStyles = function (name, background, color) {
            var el = document.querySelector('section[ui-view="' + name + '"]');
            $log.debug(arguments, el, 'section[ui-view="' + name + '"]');
            //_setStyle(el, 'background-color', config.colors[background], force);
        };

        var _scrollTo = function (region, background) {
            $log.info('scrolling to "%s" with color "%s" (%s)', region, background, config.colors[background]);
            var target = document.querySelector('section[ui-view="' + region + '"]');
            smoothScroll(target);
            _colorInkBar(background, true);
        };

        var _init = function () {
            $scope.$mdMedia = $mdMedia;
            $scope.colors = config.colors;
            $scope.site = config.content;
            $scope.views = config.views;
            $scope.scrollTo = _scrollTo;
        };

        _init();
    });
