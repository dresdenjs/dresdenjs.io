'use strict';

/**
 * @ngdoc overview
 * @name dresdenjsApp
 * @description
 * # dresdenjsApp
 *
 * Config of the application.
 */
angular
    .module('dresdenjsApp')
    .constant('config', {
        views: {
            'home': {
                title: 'Home',
                templateUrl: 'views/home.md'
            },
            'termin': {
                title: 'Termin',
                templateUrl: 'views/termin.md'
            },
            'mitmachen': {
                title: 'Mitmachen',
                templateUrl: 'views/mitmachen.md'
            },
            'info': {
                title: 'Info',
                templateUrl: 'views/info.md'
            }
        }
    });
