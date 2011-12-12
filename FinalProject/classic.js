$(function(){  

  $('.scroll-pane8').hide();
  
  $(document).ready(function() {
	
	$('.ic a').click(function() {
	 $('.scroll-pane8').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content8').load(url + ' .class');
     $('.scroll-pane8').addClass("scroll-pane");
     $('.scroll-content8').addClass("scroll-content");
     $('.scroll-bar8').addClass("scroll-bar");
     $('.scroll-vertical8').addClass("scroll-vertical");
     $('.scroll-title8').addClass("scroll-title");
     return false;
  }); 
  
  $('#as a').click(function() {
	 $('.scroll-pane8').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content8').load('MainMenu/Player.html' + ' .class',function(){
         $('p:contains("AnimatedGameObject")').css("background-color","yellow");
          $('p:contains("currentFrame")').css("background-color","yellow");
          $('p:contains("timeBetweenFrames")').css("background-color","yellow");
          $('p:contains("timeSinceLastFrame")').css("background-color","yellow");
          $('p:contains("frameWidth")').css("background-color","yellow");
     });
     $('.scroll-pane8').addClass("scroll-pane");
     $('.scroll-content8').addClass("scroll-content");
     $('.scroll-bar8').addClass("scroll-bar");
     $('.scroll-vertical8').addClass("scroll-vertical");
     $('.scroll-title8').addClass("scroll-title");
     return false;
  }); 
  });
  
  $(function(scroll) {
		//scrollpane parts
		var scrollPane = $( ".scroll-pane8" ),
			scrollContent = $( ".scroll-content8" );
		
		//build slider
		var scrollbar = $( ".scroll-bar8" ).slider({
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
		var scrollbar = $( ".scroll-vertical8" ).slider({
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
 
 $(".scroll-title8").click(function(){
   
    $('.scroll-pane8').fadeOut();
  });
 
});