'use strict';

/**
 * @ngdoc overview
 * @name dresdenjsApp
 * @description
 * # dresdenjsApp
 *
 * Theming of the application.
 */
angular
    .module('dresdenjsApp')
    .config(function ($mdThemingProvider) {

        // Use that theme for the accent intentions
        $mdThemingProvider
            .theme('default')
            .primaryPalette('grey')
            .accentPalette('deep-orange');
    });
