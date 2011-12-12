$(function(){  

  $('.scroll-pane12').hide();
  
  $(document).ready(function() {
	
	$('.mc a').click(function() {
	 $('.scroll-pane12').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content12').load(url + ' .class');
     $('.scroll-pane12').addClass("scroll-pane");
     $('.scroll-content12').addClass("scroll-content");
     $('.scroll-bar12').addClass("scroll-bar");
     $('.scroll-vertical12').addClass("scroll-vertical");
     $('.scroll-title12').addClass("scroll-title");
     return false;
  }); 
  
  });
  
  $(function(scroll) {
		//scrollpane parts
		var scrollPane = $( ".scroll-pane12" ),
			scrollContent = $( ".scroll-content12" );
		
		//build slider
		var scrollbar = $( ".scroll-bar12" ).slider({
			slide: function( event, ui ) {
				if ( scrollContent.width() > scrollPane.width() ) {
					scrollContent.css( "margin-left", Math.round(
						ui.value / 100 * ( scrollPane.width() - scrollContent.width() )
					) + "px" );
				} else {
					scrollContent.css( "margin-left", 0 );
				}
			}
		});

		
		//build slider
		var scrollbar = $( ".scroll-vertical12" ).slider({
			orientation: "vertical",
			value: 80,
			slide: function( event, ui ) {
				if ( scrollContent.height() > scrollPane.height() ) {
					scrollContent.css( "margin-top", Math.round(
						ui.value / 100 * ( scrollPane.height() - scrollContent.height() )
					) + "px" );
				} else {
					scrollContent.css( "margin-top", 0 );
				}
			}
		});
		
		$( window ).resize(function() {
			resetValue();
			sizeScrollbar();
			reflowContent();
		});
		//init scrollbar size
/*		setTimeout( sizeScrollbar, 10 );//safari wants a timeout*/
});
 
 $(".scroll-title12").click(function(){
   
    $('.scroll-pane12').fadeOut();
  });
 
});