jQuery(document).ready(function($) {
	$('.hide, #nav-main .sub, .modal').hide();

	$("a[data-target^='prettyPhoto']").prettyPhoto({
		show_title: true,
		gallery_markup: '',
		slideshow: '',
		social_tools: false
	});

	// $('#slider').slides({
	// 	preload: false,
	// 	effect: 'slide',
	// 	crossfade: true,
	// 	slideSpeed: 350,
	// 	fadeSpeed: 500,
	// 	play: 3000,
	// 	hoverPause: true,
	// 	generateNextPrev: false,
	// 	generatePagination: false
	// });

    $("a[data-window='new-window']").click( function() {
        window.open(this.href);
        return false;
    });

    $("#nav-main > li").hover(function (e) {
    	$(this).addClass('show');
    }, function (e) {
    	$(this).removeClass('show');
    });


	$("a[data-toggle='slideToggle']").click(function (e) {
		var target = $(this).attr("href");
		if($(target+":animated").length) {
			return false;
		} else {
			$(target).slideToggle();
			$(target).toggleClass('active');
			$(this).toggleClass('selected');
		}
		return false;
	});

	var width = $(document).width();
	var height = $(document).height();

	$('.modal').append('<span class="close">x</span>');
	$('body').append('<div class="modal-overlay"></div>');
	$(document).keyup(function(e) {
	  	if (e.keyCode == 27) {
			$('.modal, .modal-overlay').hide();
	  	}
	});

	$("a[data-target=modal]").click(function (e) {
		e.preventDefault;
		var target = $(this).attr("href");
		if(typeof target === 'undefined') {
			var target = $(this).attr("data-href");
		}
		$('.modal-overlay').show().css({'height':height,'width':width});
		$(target).show();
		return false;
	});

	$('.modal .close, .modal-overlay').click(function (e) {
		e.preventDefault();
		$('.modal').hide();
		$('.modal-overlay').hide();
		return false;
	});

    //$("*[required]").not('#input-search').prev('label').append('&nbsp;<span class="red">*</span>');

});
