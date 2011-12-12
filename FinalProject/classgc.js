$(function(){  

  $('.scroll-pane6').hide();
  
  $(document).ready(function() {
	
	$('.gc a').click(function() {
	 $('.scroll-pane6').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content6').load(url + ' .class');
     $('.scroll-pane6').addClass("scroll-pane");
     $('.scroll-content6').addClass("scroll-content");
     $('.scroll-bar6').addClass("scroll-bar");
     $('.scroll-vertical6').addClass("scroll-vertical");
     $('.scroll-title6').addClass("scroll-title");
     return false;
  }); 
  
  });
  
  $(function(scroll) {
		//scrollpane parts
		var scrollPane = $( ".scroll-pane6" ),
			scrollContent = $( ".scroll-content6" );
		
		//build slider
		var scrollbar = $( ".scroll-bar6" ).slider({
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
		var scrollbar = $( ".scroll-vertical6" ).slider({
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
 
 $(".scroll-title6").click(function(){
   
    $('.scroll-pane6').fadeOut();
  });
 
});