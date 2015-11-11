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
        'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {

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
    });
