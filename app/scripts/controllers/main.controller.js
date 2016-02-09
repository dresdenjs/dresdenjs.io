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
    .controller('MainCtrl', function ($rootScope, $scope, $mdMedia, $timeout, $anchorScroll, $log, config, smoothScroll, CgMailChimpService) {

        var _setStyle = function (el, prop, val, force) {
            el.style.setProperty(prop, val, force ? 'important' : null);
        };

        var _tintInkBarTo = function (background, force) {
            var el = document.querySelector('md-tabs md-ink-bar');
            _setStyle(el, 'background-color', config.colors[background], force);
        };

        var _scrollToSection = function (name, background) {
            // get section by name
            var target = document.querySelector('section > [ui-view="' + name + '"]');

            // set global var to pass by scroll directive
            $rootScope.scrolledByClick = true;

            // set section color to ink bar
            _tintInkBarTo(background, true);

            // initialize scroll animation
            smoothScroll(target, {
                offset: 70,
                duration: 375,
                easing: 'easeInOutQuart',
                callbackAfter: function () {
                    $timeout(function () {
                        $rootScope.scrolledByClick = false;
                    });
                }
            });
        };

        var _resetDistributionResponses = function () {
            $scope.distributionResponses.sent = false;
            $scope.distributionResponses.success = false;
            $scope.distributionResponses.error = false;
        };

        var _submitDistribution = function (event, isValid) {
            event.preventDefault();

            if (!isValid) {
                return isValid;
            }

            $scope.distributionResponses.sent = true;

            CgMailChimpService
                .subscribe($scope.chimp)
                .then(function () {
                    $scope.distributionResponses.success = true;
                    $scope.chimp = {
                        EMAIL: '',
                        FNAME: '',
                        LNAME: ''
                    };
                    $scope.DistributionForm.email.$pristine = true;
                    $scope.DistributionForm.email.$dirty = false;
                })
                .catch(function (error) {
                    if (error.result) {
                        $scope.errorMessage = error.msg;
                    }
                    $scope.distributionResponses.error = true;
                })
                .finally(function () {
                    $scope.distributionResponses.sent = false;
                });
        };

        var _init = function () {
            $scope.$mdMedia = $mdMedia;
            $scope.colors = config.colors;
            $scope.site = config.site;
            $scope.views = config.views;
            $scope.tabs = {};
            $scope.distributionResponses = {
                'sent': false,
                'success': false,
                'error': false
            };
            $scope.chimp = {
                EMAIL: '',
                FNAME: '',
                LNAME: ''
            };
            $scope.tintInkBarTo = _tintInkBarTo;
            $scope.scrollToSection = _scrollToSection;
            $scope.submitDistribution = _submitDistribution;
            $scope.resetDistributionResponses = _resetDistributionResponses;

            // set tabs
            for (var name in config.views) {
                if (!config.views[name].title) {
                    continue;
                }
                $scope.tabs[name] = config.views[name];
            }

            // set first section color
            _tintInkBarTo($scope.tabs[Object.keys($scope.tabs)[0]].background, true);
        };

        _init();
    });
