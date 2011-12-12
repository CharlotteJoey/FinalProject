$(function(){  

  $('.scroll-pane5').hide();
  
  $(document).ready(function() {
	
	$('.fc a').click(function() {
	 $('.scroll-pane5').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content5').load(url + ' .class');
     $('.scroll-pane5').addClass("scroll-pane");
     $('.scroll-content5').addClass("scroll-content");
     $('.scroll-bar5').addClass("scroll-bar");
     $('.scroll-vertical5').addClass("scroll-vertical");
     $('.scroll-title5').addClass("scroll-title");
     return false;
  }); 
  
    $('#as a').click(function() {
	 $('.scroll-pane5').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content5').load('MainMenu/LevelEndPost.html' + ' .class',function(){  
         $('p:contains("AnimatedGameObject")').css("background-color","yellow");
          $('p:contains("currentFrame")').css("background-color","yellow");
          $('p:contains("timeBetweenFrames")').css("background-color","yellow");
          $('p:contains("timeSinceLastFrame")').css("background-color","yellow");
          $('p:contains("frameWidth")').css("background-color","yellow");
     });
     $('.scroll-pane5').addClass("scroll-pane");
     $('.scroll-content5').addClass("scroll-content");
     $('.scroll-bar5').addClass("scroll-bar");
     $('.scroll-vertical5').addClass("scroll-vertical");
     $('.scroll-title5').addClass("scroll-title");
     return false;
  }); 
  
  });
  
  $(function(scroll) {
		//scrollpane parts
		var scrollPane = $( ".scroll-pane5" ),
			scrollContent = $( ".scroll-content5" );
		
		//build slider
		var scrollbar = $( ".scroll-bar5" ).slider({
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
		var scrollbar = $( ".scroll-vertical5" ).slider({
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
 
 $(".scroll-title5").click(function(){
   
    $('.scroll-pane5').fadeOut();
  });
 
});