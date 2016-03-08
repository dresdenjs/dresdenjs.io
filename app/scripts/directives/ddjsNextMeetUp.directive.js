'use strict';

/**
 * @ngdoc overview
 * @name dresdenjsApp
 * @description
 * # dresdenjsApp
 *
 * get date and time of next user group meetup
 */
angular
    .module('dresdenjsApp')
    .directive('ddjsNextMeetUp', function ($http, $filter) {
        return {
            restrict: 'EA',
            scope: false,
            link: function (scope, element, attrs) {
                $http
                    .jsonp('https://api.meetup.com/DresdenJS-io-JavaScript-User-Group/events?scroll=next_upcoming&photo-host=public&page=1&sig_id=197134912&sig=487da08abe555db4de460efc496e543dcd7c8f00&callback=JSON_CALLBACK')
                    .then(function (response) {
                        console.log(response.data.data[0]);
                        element.html($filter('date')(response.data.data[0].time, "dd. MMMM yyyy 'um' HH:mm 'Uhr'"));
                        element.parent().removeClass('hide');
                    })
                    .catch(function () {
                        element.parent().addClass('hide');
                    });
            }
        };
    });
