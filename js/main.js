// Fade Image on load
$(document).ready(function(){
	$('img').fadeIn();
});

/*Auto close on navbar click*/
$('.navbar-collapse .main-loader').click(function(){
    $(".navbar-collapse").collapse('hide');
}); 

$(".nav li").on("click", function() {
    $(".nav li").removeClass("active");
    $(this).addClass("active");
  });
 // Add slide-down animation to Bootstrap dropdown when collapsing.

 $('.dropdown').hover(function() {
		$(this).find('.dropdown-menu').first().stop(true, true).delay(200).show(250);
},function() {
		$(this).find('.dropdown-menu').first().stop(true, true).delay(100).hide(200);

});

  // Hiding the dropdown
$('.dropdown').on('hide.bs.dropdown', function() {
  $(this).find('.dropdown-menu').first().stop(true, true).hide();
});

/*The FOLLOWING SCRIPT ONLY WORKS IN SPECIFIC PAGES since it listens to AjaxComplete*/
$('#ss-submit').click(function(){
  // replace the "It works!" with what you want to appear in the Javascript dialogue
  alert("Your input has been submitted to the tracker.!")
  // replace "ss-form" with the ID of your form
  setTimeout(function() {
  $('#ss-form').reset();
  }, 10);
});

//load external DIVs into main container
$('.main-loader').click(function(e){
		e.preventDefault();
		var toload=$(this).attr('rel');
		$('.main').load(toload);
})

// Datepicker
    $(document).ajaxComplete(function(){
			$( "#datepicker" ).datepicker({
			    format: "yyyy/mm/dd",
					orientation: "bottom auto",
					autoclose: true,
					todayHighlight: true
			});
		});
//Disable submit button if nothing is there
$(document).ajaxComplete(function(){
	$('.ss-q-short').keyup(function() {
	if($($('.ss-q-short')[0]).val() || $($('.ss-q-short')[2]).val() || $($('.ss-q-short')[6]).val()) {
		$('#ss-submit,#ss-conf').prop('disabled',false);
	} else {
		$('#ss-submit,#ss-conf').prop('disabled',true);
	}
	});
});
//Enabling and disabling Status Edit
$(document).ajaxComplete(function(){
	$('#edit-status').click(function(){
		var srcedit=$(this).attr('rel');
		$(this).hide();
		$('#save-status').removeClass('hidden');
		$('#frame-view').attr('src',srcedit);
	});
	$('#save-status').click(function(){
		var srcview=$(this).attr('rel');
		$(this).addClass('hidden');
		$('#edit-status').show();
		$('#frame-view').attr('src','');
		setTimeout (function(){
			$('#frame-view').attr('src',srcview);
	    	},50);
	});
});

/* Top Stats Show Hide */
	$(document).ready(function() {
		setTimeout(function() {
  		  $(".loading").fadeOut();
  		}, 50);
		
		$("#topstats").click(function() {
			$(".topstats").slideToggle(100);
		});
		$(document).ajaxStart(function(){
			$(".loading").fadeIn();
		});
		$(document).ajaxStop(function(){
			$(".loading").fadeOut();
		});
	});

