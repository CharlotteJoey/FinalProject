$(function(){  

  $('.scroll-pane10').hide();
  
  $(document).ready(function() {
	
	$('.kc a').click(function() {
	 $('.scroll-pane10').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content10').load(url + ' .class');
     $('.scroll-pane10').addClass("scroll-pane");
     $('.scroll-content10').addClass("scroll-content");
     $('.scroll-bar10').addClass("scroll-bar");
     $('.scroll-vertical10').addClass("scroll-vertical");
     $('.scroll-title10').addClass("scroll-title");
     return false;
  }); 
  
  });
  
  $(function(scroll) {
		//scrollpane parts
		var scrollPane = $( ".scroll-pane10" ),
			scrollContent = $( ".scroll-content10" );
		
		//build slider
		var scrollbar = $( ".scroll-bar10" ).slider({
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
		var scrollbar = $( ".scroll-vertical10" ).slider({
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
 
 $(".scroll-title10").click(function(){
   
    $('.scroll-pane10').fadeOut();
  });
 
});