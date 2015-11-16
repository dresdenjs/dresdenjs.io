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
    .config(function ($stateProvider, $urlRouterProvider, config) {

        // For any unmatched url, redirect to /main
        $urlRouterProvider.otherwise('/main');

        // Now set up the states
        $stateProvider
            .state('main', {
                url: '/main',
                views: config.views
            });
    });
