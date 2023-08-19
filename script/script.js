$(document).ready(function(){
	$(window).scroll(function () {
			// if ($(this).scrollTop() > 767 ) {
			// 	var element = document.getElementById("menuhold");
			// 	element.classList.add("menuhold-alt");
			// 	// $('#menuhold').classList.add("menuhold-alt");
			// 	// var element = document.getElementById("logo");
			// 	// element.classList.remove("d-none");
			// } 
			// else{
			// 	var element = document.getElementById("menuhold");
			// 	element.classList.remove("menuhold-alt");
			// 	// $('#menuhold').classList.add("menuhold-alt");

			// 	// var element = document.getElementById("logo");
			// 	// element.classList.add("d-none");
			// } 
		});
		// scroll body to 0px on click
		$('#down').click(function () {
			$('body,html').animate({
				scrollTop: 777
			}, 400);
			return false;
		});
		$('#home').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
		$('#team').click(function () {
			$('body,html').animate({
				scrollTop: 777
			}, 400);
			return false;
		});
		$('#partner').click(function () {
			$('body,html').animate({
				scrollTop: 1545
			}, 400);
			return false;
		});
		$('#learn').click(function () {
			$('body,html').animate({
				scrollTop: 3000
			}, 400);
			return false;
		});
		$('#contact').click(function () {
			$('body,html').animate({
				scrollTop: 3000
			}, 400);
			return false;
		});
		// feather.replace()
		// $('#menuhold').click(function(){
		// 	$('#menuexpend').add({

		// 	})
		// });
		//for morph menu
		
		
});
function morph(){
	var element = document.getElementById("menuexpend");

	if (element.classList) {
	element.classList.toggle("menuexpend");
	} else {
	// For IE9
	var classes = element.className.split(" ");
	var i = classes.indexOf("menuexpend");

	if (i >= 0)
		classes.splice(i, 1);
	else
		classes.push("menuexpend");
		element.className = classes.join(" ");
	}
	

	var element=document.getElementById("menuhold");
	if (element.classList) {
		element.classList.toggle("menuhold-close");
		} else {
		// For IE9
		var classes = element.className.split(" ");
		var i = classes.indexOf("menuhold-close");
	
		if (i >= 0)
			classes.splice(i, 1);
		else
			classes.push("menuhold-close");
			element.className = classes.join(" ");
		}
}
/*
    Carousel
*/
$('#carousel-example').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('.carousel-item').length;
 
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});