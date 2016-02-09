'use strict';

/**
 * @ngdoc overview
 * @name dresdenjsApp
 * @description
 * # dresdenjsApp
 *
 * Modules of the application.
 */
angular
    .module('dresdenjsApp', [
        'ui.router',
        'ngSanitize',
        'ngMaterial',
        'ngMessages',
        'ngTouch',
        'smoothScroll',
        'cg.mailchimp',
        'btford.markdown',
        'uiGmapgoogle-maps'
    ]);
