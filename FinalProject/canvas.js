$(function(canvas) {

        $('.canvas-bar').hide();
		//scrollpane parts
		var scrollPane = $( "#canvas" ),
			scrollContent = $( ".scroll-canvas" );
		
		//build slider
		var scrollbar = $( ".canvas-bar" ).slider({
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
		

		//change handle position on window resize
		$( window ).resize(function() {
			resetValue();
			sizeScrollbar();
			reflowContent();
		});
		//init scrollbar size
//		setTimeout( sizeScrollbar, 10 );//safari wants a timeout*/
	});
