'use strict';

/**
 * @ngdoc overview
 * @name dresdenjsApp
 * @description
 * # dresdenjsApp
 *
 * Icons of the application.
 */
angular
    .module('dresdenjsApp')
    .config(function ($mdIconProvider) {
        $mdIconProvider
            .iconSet('action', 'assets/svg/action-icons.svg', 24)
            .iconSet('alert', 'assets/svg/alert-icons.svg', 24)
            .iconSet('av', 'assets/svg/av-icons.svg', 24)
            .iconSet('communication', 'assets/svg/communication-icons.svg', 24)
            .iconSet('content', 'assets/svg/content-icons.svg', 24)
            .iconSet('device', 'assets/svg/device-icons.svg', 24)
            .iconSet('editor', 'assets/svg/editor-icons.svg', 24)
            .iconSet('file', 'assets/svg/file-icons.svg', 24)
            .iconSet('hardware', 'assets/svg/hardware-icons.svg', 24)
            .iconSet('icons', 'assets/svg/icons-icons.svg', 24)
            .iconSet('image', 'assets/svg/image-icons.svg', 24)
            .iconSet('maps', 'assets/svg/maps-icons.svg', 24)
            .iconSet('navigation', 'assets/svg/navigation-icons.svg', 24)
            .iconSet('notification', 'assets/svg/notification-icons.svg', 24)
            .iconSet('social', 'assets/svg/social-icons.svg', 24)
            .iconSet('toggle', 'assets/svg/toggle-icons.svg', 24)
            .icon('social:github-alt', 'assets/svg/social-github-alt.svg')
            .icon('social:facebook', 'assets/svg/social-facebook.svg')
            .icon('social:twitter', 'assets/svg/social-twitter.svg')
            .icon('social:meetup', 'assets/svg/social-meetup.svg')
            .icon('social:slack', 'assets/svg/social-slack.svg');
    });
