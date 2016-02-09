'use strict';

/**
 * @ngdoc overview
 * @name dresdenjsApp
 * @description
 * # dresdenjsApp
 *
 * Markdown configuration of the application.
 */
angular
    .module('dresdenjsApp')
    .config(['CgMailChimpServiceProvider', function (CgMailChimpServiceProvider) {
        // s. https://github.com/cgarnier/angular-mailchimp-subscribe#usage
        //<username>.<dc>.list-manage1.com/subscribe/post?u=<u>&id=<id>
        //dresdenjs.us12.list-manage.com/subscribe/post?u=c67b001e752f7f9acb80b159b&amp;id=3975382663
        CgMailChimpServiceProvider.setConfig({
            username: 'dresdenjs',
            dc: 'us12',
            u: 'c67b001e752f7f9acb80b159b',
            id: '3975382663'
        });
    }]);
