$(function() {
  var owl = $(".carousel_1,.carousel_3,.carousel_4");
  owl.owlCarousel({
    items: 1,
    margin: 5,
    loop: true,
    nav: false,
  dots: true
  });
});


$(document).ready(function() {
	    $('.carousel_2').owlCarousel({
	        loop:true,
	        margin:10,
	        nav:true,
	        navText: ['<span class="prev"></span>', '<span class="next"></span>'],
	        dots: false,	        
	        responsive:{
	            0:{
	                items:1,
	                 nav:false,
	        		dots: true
	            },
	            992:{
	                items:2,
	                 nav:false,
	        		dots: true
	            },
	            1200:{
	                items:4
	            }
	        }
	    });
	});


