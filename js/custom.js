jQuery(document).ready(function($) {
	$('.hide').hide();

	$("a[data-target^='prettyPhoto']").prettyPhoto({
		show_title: true,
		gallery_markup: '',
		slideshow: '',
		social_tools: false
	});

	$('#slider').slides({
		preload: false,
		effect: 'slide',
		crossfade: true,
		slideSpeed: 350,
		fadeSpeed: 500,
		play: 3000,
		hoverPause: true,
		generateNextPrev: false,
		generatePagination: false
	});

    $("a[data-window='new-window'], a[class='new-window']").click( function() {
        window.open(this.href);
        return false;
    });

    $("#nav-main > li").hover(function (e) {
    	$(this).addClass('show');
    }, function (e) {
    	$(this).removeClass('show');
    });

    $('#nav-guide a').click(function (e) {
    	e.preventDefault;
    	var target = $(this).attr('href');
    	if ($(this).parent().hasClass('selected') == false) {
    		$('#guide .listing-guide').slideUp();
    		$('#nav-guide li').removeClass('selected');
    		$(this).parent().addClass('selected');
    		$('#guide').find(target).slideDown();
    	};
    	return false;
    })

	$("*[data-target='toggle']").click(function (e) {
		var target = $(this).attr("href");
		if(typeof target === 'undefined') {
			var target = $(this).attr("data-href");
		}
		if($(target+":animated").length) {
			return false;
		} else {
			$(target).toggle();
		}
	});

	$("*[data-target='show']").click(function (e) {
		var target = $(this).attr("href");
		$('*[href="'+target+'"]').removeClass("selected");
		if(typeof target === 'undefined') {
			var target = $(this).attr("data-href");
		}
		if($(target+":animated").length) {
			return false;
		} else {
			$(this).addClass("selected");
			$(target).show();
		}
		return false;
	});

	$("*[data-target='hide']").click(function (e) {
		var target = $(this).attr("href");
		$('*[href="'+target+'"]').removeClass("selected");
		if(typeof target === 'undefined') {
			var target = $(this).attr("data-href");
		}
		if($(target+":animated").length) {
			return false;
		} else {
			$(this).addClass("selected");
			$(target).hide();
		}
		return false;
	});

  	$('*[data-toggle="toggle-hover"]').hover(function (e) {
  		var target = $(this).attr("data-target");
	    $(this).addClass('show');
  	}, function (e) {
  		$(this).removeClass('show');
  	});



	var width = $(document).width();
	var height = $(document).height();

	$('.modal').append('<span class="close">x</span>');

	$('.modal-overlay').css({'height':height,'width':width});
	$(document).keyup(function(e) {
	  	if (e.keyCode == 27) {
			$('.modal').hide();
			$('.modal-overlay').hide();
	  	}
	});

	$("*[data-target=modal]").click(function (e) {
		e.preventDefault;
		var target = $(this).attr("href");
		if(typeof target === 'undefined') {
			var target = $(this).attr("data-href");
		}
		$('.modal-overlay').show();
		$(target).show();
		return false;
	});

	$('.modal .close, .modal-overlay').click(function (e) {
		e.preventDefault();
		$('.modal').hide();
		$('.modal-overlay').hide();
		return false;
	});

    $("*[required]").prev('label').append('&nbsp;<span class="red">*</span>');

});
