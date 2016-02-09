'use strict';

/**
 * @ngdoc overview
 * @name dresdenjsApp
 * @description
 * # dresdenjsApp
 *
 * center maps on resize created by ui-gmap-google-map directive.
 */
angular
    .module('dresdenjsApp')
    .directive('uiGmapGoogleMap', function (uiGmapGoogleMapApi) {
        return {
            require: '^uiGmapGoogleMap',
            scope: false,
            link: function (scope, element, attrs, MapCtrl) {
                // uiGmapGoogleMapApi is a promise.
                // The "then" callback function provides the google.maps object.
                uiGmapGoogleMapApi.then(function(maps) {
                    // get map scope from maps controller
                    var mapScope = MapCtrl.getScope();

                    // bind resize event
                    // http://stackoverflow.com/a/8792945/1146207
                    // http://hsmoore.com/blog/keep-google-map-v3-centered-when-browser-is-resized/
                    maps.event.addDomListener(window, "resize", function() {
                        var gmap = mapScope.map,
                            center = gmap.getCenter();
                        maps.event.trigger(gmap, "resize");
                        gmap.setCenter(center);
                    });
                });
            }
        };
    });
