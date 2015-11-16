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

        content: {
            title: 'DresdenJS User Group',
            keywords: 'JavaScript, AngularJS, REACT, user group, stammtisch, vorträge, netzwerken, austausch, web-technology, zalari, dresden',
            description: 'Eine JavaScript User Group in Dresden mit regelmäßigen Meetups für Vorträge, Wissenstransfer & Netzwerken',
            source_link: 'https://dresdenjs.io',
            favicon: 'images/favicon.ico',
            touch_icon: 'images/apple-touch-icon.png',
            google_analytics_key: '## put YOUR key here to enable tracking! (blank to disable)'
        },

        colors: {
            black: '#111111',
            white: '#f8f8f8',
            grey: '#e5e3df',
            blue: '#49a7e9',
            green: '#9bcf2f',
            purple: '#c869bf',
            orange: '#fab125',
            turquoise: '#0fbfcf'
        },

        views: {
            'home': {
                title: 'Home',
                color: 'black',
                background: 'white',
                alignment: 'center center',
                templateUrl: 'views/home.md'
            },
            'map': {
                templateUrl: 'views/karte.md'
            },
            'termin': {
                title: 'Termin',
                color: 'black',
                background: 'orange',
                alignment: 'center start',
                templateUrl: 'views/termin.md'
            },
            'mitmachen': {
                title: 'Mitmachen',
                color: 'white',
                background: 'blue',
                alignment: 'center start',
                templateUrl: 'views/mitmachen.md'
            },
            'info': {
                title: 'Info',
                color: 'black',
                background: 'green',
                alignment: 'center start',
                templateUrl: 'views/info.md'
            }
        }

    });
