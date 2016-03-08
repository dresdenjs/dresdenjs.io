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
                    .get('https://api.meetup.com/DresdenJS-io-JavaScript-User-Group/events?scroll=next_upcoming&photo-host=public&page=1&sig_id=197134912&sig=487da08abe555db4de460efc496e543dcd7c8f00')
                    .then(function (response) {
                        console.log(response);
                        element.html($filter(response[0].time, 'dd. MMMM YYYY hh:mm Uhr'))
                    })
                    .catch(function () {
                        element.parent().addClass('hide');
                    });
            }
        };
    });
