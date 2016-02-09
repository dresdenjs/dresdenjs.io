'use strict';

/**
 * @ngdoc overview
 * @name dresdenjsApp
 * @description
 * # dresdenjsApp
 *
 * Route of the application.
 */
angular
    .module('dresdenjsApp')
    .config(function ($locationProvider, $stateProvider, $urlRouterProvider, config) {
        // Disable hash in url
        $locationProvider.html5Mode(true);

        // For any unmatched url, redirect to /main
        $urlRouterProvider.otherwise('/main');

        // Now set up the states
        $stateProvider
            .state('main', {
                abstract: true,
                controller: 'MainCtrl',
                templateUrl: 'layouts/default.layout.html'
            })
            .state('views', {
                parent: 'main',
                url: '/main',
                views: config.views
            });
    });
