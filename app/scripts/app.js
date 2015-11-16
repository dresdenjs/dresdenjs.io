'use strict';

/**
 * @ngdoc overview
 * @name dresdenjsApp
 * @description
 * # dresdenjsApp
 *
 * Main module of the application.
 */
angular
    .module('dresdenjsApp', [
        'ui.router',
        'ngSanitize',
        'ngMaterial',
        'smoothScroll',
        'btford.markdown'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {

        // For any unmatched url, redirect to /main
        $urlRouterProvider.otherwise('/main');

        // Now set up the states
        $stateProvider
            .state('main', {
                url: '/main',
                views: {
                    'home': {
                        templateUrl: 'views/home/home.view.html',
                        controller: 'HomeCtrl'
                    },
                    'termin': {
                        templateUrl: 'views/termin/termin.view.html',
                        controller: 'TerminCtrl'
                    },
                    'mitmachen': {
                        templateUrl: 'views/mitmachen/mitmachen.view.html',
                        controller: 'MitmachenCtrl'
                    },
                    'info': {
                        templateUrl: 'views/info/info.view.html',
                        controller: 'InfoCtrl'
                    }
                }
            });

        // Use that theme for the accent intentions
        $mdThemingProvider
            .theme('default')
            .primaryPalette('grey')
            .accentPalette('deep-orange');
    })
    .controller('MainCtrl', function ($scope, $mdMedia, $log, smoothScroll) {
        $scope.$mdMedia = $mdMedia;
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.scrollTo = function (region) {
            var target = document.querySelector('section[ui-view="' + region + '"]');
            smoothScroll(target);
            $log.info('scrolling to %s', target);
        };
    });
