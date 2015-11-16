'use strict';

/**
 * @ngdoc overview
 * @name dresdenjsApp
 * @description
 * # dresdenjsApp
 *
 * activate current tab on scroll.
 */
angular
    .module('dresdenjsApp')
    .directive('scrollUpdateTabs', function ($rootScope, $window, $timeout, $log) {
        return {
            restrict: 'A',
            require: '^mdTabs',
            link: function (scope, element, attrs, tabsCtrl) {
                angular.element($window).bind('scroll', function () {
                    // prevent directive to pull in when
                    // scrolling is animated by click action
                    if (!$rootScope.scrolledByClick) {
                        var currentIndex = tabsCtrl.selectedIndex,
                            nextIndex = currentIndex,
                            offsetTop = $window.scrollY,
                            sectionElements = document.querySelectorAll('section'),
                            offsets = [],
                            closest = 0;

                        // collect offsets of sections
                        angular.forEach(sectionElements, function (section) {
                            //offsets.push(section.offsetTop + section.getBoundingClientRect().height / 2);
                            offsets.push(section.offsetTop);
                        });

                        // find closest section to current viewport
                        closest = offsets.reduce(function (prev, curr) {
                            return (Math.abs(curr - offsetTop) < Math.abs(prev - offsetTop) ? curr : prev);
                        });
                        nextIndex = offsets.indexOf(closest);

                        // update tabs and ink bar color
                        if (currentIndex != nextIndex) {
                            $timeout(function () {
                                tabsCtrl.selectedIndex = nextIndex;
                                scope.tintInkBarTo(scope.views[Object.keys(scope.views)[nextIndex]].background, true);
                            });
                        }
                    }
                });
            }
        };
    });
