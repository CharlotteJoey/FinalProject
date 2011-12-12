$(function(){  

  $('.scroll-pane2').hide();
  
  $(document).ready(function() {
	
	$('.ccc a').click(function() {
	 $('.scroll-pane2').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content2').load(url + ' .class');
     
     $('.scroll-pane2').addClass("scroll-pane");
     $('.scroll-content2').addClass("scroll-content");
     $('.scroll-bar2').addClass("scroll-bar");
     $('.scroll-vertical2').addClass("scroll-vertical");
     $('.scroll-title2').addClass("scroll-title");
     return false;
  }); 
  
  });
  
  $(function(scroll) {
		//scrollpane parts
		var scrollPane = $( ".scroll-pane2" ),
			scrollContent = $( ".scroll-content2" );
		
		//build slider
		var scrollbar = $( ".scroll-bar2" ).slider({
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
		var scrollbar = $( ".scroll-vertical2" ).slider({
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
 
 $(".scroll-title2").click(function(){
   
    $('.scroll-pane2').fadeOut();
  });
 
});