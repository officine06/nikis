jQuery(document).foundation(),jQuery(document).ready(function(){function e(){if(jQuery("footer").length>0){var e=jQuery(window).height(),t=jQuery("footer").height(),i=jQuery("footer").position().top+t;i<e&&jQuery("footer").css("margin-top",e-i-1+"px")}}jQuery.cookieBar({message:"Cliccando su OK, l’utente accetta l’utilizzo dei cookie di terze parti. Per maggiori informazioni, anche in ordine alla disattivazione, è possibile consultare l'<a class='cookie-link-2' href='https://nikis.app/cookie/'>informativa cookie completa</a>.",acceptText:"Ok",fixed:!0,bottom:!0}),jQuery("header").sticky({topSpacing:30}),jQuery(".menu__mobile").on("click",function(){jQuery(".header__menu_mobile").toggleClass("show"),jQuery(".menu__mobile").toggleClass("shrink")}),AOS.init({disable:"mobile"}),jQuery(".top__bar--reserve").on("click",function(){jQuery(".top__bar--reserve-form").toggleClass("show")}),jQuery(".wpcf7-select").select2({minimumResultsForSearch:1/0}),jQuery(".wpcf7-submit").addClass("is--disabled"),jQuery(".checkbox__material label span").on("click",function(){jQuery(".checkbox__material").toggleClass("check"),jQuery(".wpcf7-submit").toggleClass("is--disabled")}),jQuery(".top__bar--lang").on("click",function(){jQuery(".top__bar--lang-change").toggleClass("show"),jQuery(".top__bar--lang i.fa-angle-down").toggleClass("is--rotate")}),jQuery(".section__container--gallery").magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0,preload:[1,3],navigateByImgClick:!0,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:'<span class="mfp-counter">%curr% of %total%</span>'}});new Swiper(".swiper-grid-container",{direction:"horizontal",loop:!0,autoplay:{delay:5e3},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".swiper-hero",{direction:"vertical",effect:"fade",loop:!0,autoplay:{delay:5e3}}),new Swiper(".swiper-cta",{direction:"vertical",loop:!0,autoplay:{delay:4e3}});jQuery(".pop").click(function(e){return e.preventDefault(),newwindow=window.open(jQuery(this).attr("href"),"name","height=450,width=550"),window.focus&&newwindow.focus(),!1}),jQuery(function(){function e(){var e={center:new google.maps.LatLng(43.3132208,12.404928),zoom:14,scrollwheel:!1,styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#6195a0"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"geometry",stylers:[{lightness:"0"},{saturation:"0"},{color:"#f5f5f2"},{gamma:"1"}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{lightness:"-3"},{gamma:"1.00"}]},{featureType:"landscape.natural.terrain",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#bae5ce"},{visibility:"on"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45},{visibility:"simplified"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#fac9a9"},{visibility:"simplified"}]},{featureType:"road.highway",elementType:"labels.text",stylers:[{color:"#4e4e4e"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#787878"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"transit.station.airport",elementType:"labels.icon",stylers:[{hue:"#0a00ff"},{saturation:"-77"},{gamma:"0.57"},{lightness:"0"}]},{featureType:"transit.station.rail",elementType:"labels.text.fill",stylers:[{color:"#43321e"}]},{featureType:"transit.station.rail",elementType:"labels.icon",stylers:[{hue:"#ff6c00"},{lightness:"4"},{gamma:"0.75"},{saturation:"-68"}]},{featureType:"water",elementType:"all",stylers:[{color:"#eaf6f8"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c7eced"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{lightness:"-49"},{saturation:"-53"},{gamma:"0.79"}]}]},t=new google.maps.Map(document.getElementById("map-nikis"),e);new google.maps.Marker({position:new google.maps.LatLng(43.3132208,12.404928),map:t})}$("#cookie-bar").length?$(".cb-enable").on("click",e):e()}),jQuery(window).width()>767&&e(),jQuery(window).resize(function(){e()})});