
$.extend($.easing,
{
    def: 'easeOutQuad',
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
});

(function( $ ) {

    var settings;
    var disableScrollFn = false;
    var navItems;
    var navs = {}, sections = {};

    $.fn.navScroller = function(options) {
        settings = $.extend({
            scrollToOffset: 170,
            scrollSpeed: 800,
            activateParentNode: true,
        }, options );
        navItems = this;

        //attatch click listeners
    	navItems.on('click', function(event){
    		event.preventDefault();
            var navID = $(this).attr("href").substring(1);
            disableScrollFn = true;
            activateNav(navID);
            populateDestinations(); //recalculate these!
        	$('html,body').animate({scrollTop: sections[navID] - settings.scrollToOffset},
                settings.scrollSpeed, "easeInOutExpo", function(){
                    disableScrollFn = false;
                }
            );
    	});

        //populate lookup of clicable elements and destination sections
        populateDestinations(); //should also be run on browser resize, btw
        // setup scroll listener
        $(document).scroll(function(){
            if (disableScrollFn) { return; }
            var page_height = $(window).height();
            var pos = $(this).scrollTop();
            for (i in sections) {
                if ((pos + settings.scrollToOffset >= sections[i]) && sections[i] < pos + page_height){
                    activateNav(i);
                }
            }
        });
    };

    function populateDestinations() {
        navItems.each(function(){
            var scrollID = $(this).attr('href').substring(1);
            navs[scrollID] = (settings.activateParentNode)? this.parentNode : this;
            sections[scrollID] = $(document.getElementById(scrollID)).offset().top;
        });
    }

    function activateNav(navID) {
        for (nav in navs) { $(navs[nav]).removeClass('active'); }
        $(navs[navID]).addClass('active');
    }
})( jQuery );


$(document).ready(function (){

    $('nav li a').navScroller();

    //section divider icon click gently scrolls to reveal the section
	$(".sectiondivider").on('click', function(event) {
    	$('html,body').animate({scrollTop: $(event.target.parentNode).offset().top - 50}, 400, "linear");
	});

    //links going to other sections nicely scroll
	$(".container a").each(function(){
        if ($(this).attr("href").charAt(0) == '#'){
            $(this).on('click', function(event) {
        		event.preventDefault();
              var target = $(event.target).closest("a");
              var targetHight =  $(target.attr("href")).offset().top;
            	$('html,body').animate({scrollTop: targetHight - 170}, 800, "easeInOutExpo");
            });
        }
	});


    $('.map').each(function() {
        var el = $(this),
            pos, map, opt, dot,
            lat = parseFloat(el.attr('data-lat')),
            lng = parseFloat(el.attr('data-lng')),
            zoom = parseFloat(el.attr('data-zoom')),
            showMap = function() {
                pos = new google.maps.LatLng(lat, lng);
                opt = {
                    center: pos,
                    zoom: zoom,
                    disableDefaultUI: true,
                    disableDoubleClickZoom: true,
                    draggable: false,
                    scrollwheel: false,
                    mapTypeID: google.maps.MapTypeId.ROADMAP
                };
                map = new google.maps.Map(el.get(0), opt);
                dot = new google.maps.Marker({
                    position: pos,
                    map: map,
                    draggable: false,
                    animation: google.maps.Animation.DROP
                });
            },
            centerMap = function() {
                map.setCenter(pos);
            };

        google.maps.event.addDomListener(window, 'load', showMap);
        google.maps.event.addDomListener(window, 'resize', centerMap);
    });

	$('#input-email').on('input',function(e){
		console.log('change');
		var emailInput = $('#input-email').val();
		if(emailInput !== '') {
			$('.email-label').animate({ opacity: 1 }, {duration: 'fast'});
			//validateEmail(emailInput);
		}
		else {
			$('.email-label').animate({ opacity: 0 }, {duration: 'fast'});
			$('.error-message').hide();
		}
	});


	$('#ddjs-distributor').on('click', function(e) {
		var emailInput = $('#input-email').val();
		if(emailInput !== '' && validateEmail(emailInput)) {
			sendMail(emailInput);
			$('.ok-message').show();
			$('.error-message').hide();
		}
		else {
			$('.error-message').show();
			$('.ok-message').hide();
		}
	});


});



function sendMail(mail) {
  $('#emailForm').submit();
}

function validateEmail(email) {
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	return re.test(email);
}