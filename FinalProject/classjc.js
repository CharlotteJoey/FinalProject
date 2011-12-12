$(function(){  

  $('.scroll-pane9').hide();
  
  $(document).ready(function() {
	
	$('.jc a').click(function() {
	 $('.scroll-pane9').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content9').load(url + ' .class');
     $('.scroll-pane9').addClass("scroll-pane");
     $('.scroll-content9').addClass("scroll-content");
     $('.scroll-bar9').addClass("scroll-bar");
     $('.scroll-vertical9').addClass("scroll-vertical");
     $('.scroll-title9').addClass("scroll-title");
     return false;
  }); 
  
  $('#as a').click(function() {
	 $('.scroll-pane9').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content9').load('MainMenu/Powerup.html' + ' .class',function(){
         $('p:contains("AnimatedGameObject")').css("background-color","yellow");
          $('p:contains("currentFrame")').css("background-color","yellow");
          $('p:contains("timeBetweenFrames")').css("background-color","yellow");
          $('p:contains("timeSinceLastFrame")').css("background-color","yellow");
          $('p:contains("frameWidth")').css("background-color","yellow");
     });
     $('.scroll-pane9').addClass("scroll-pane");
     $('.scroll-content9').addClass("scroll-content");
     $('.scroll-bar9').addClass("scroll-bar");
     $('.scroll-vertical9').addClass("scroll-vertical");
     $('.scroll-title9').addClass("scroll-title");
     return false;
  }); 

  
  });
  
  $(function(scroll) {
		//scrollpane parts
		var scrollPane = $( ".scroll-pane9" ),
			scrollContent = $( ".scroll-content9" );
		
		//build slider
		var scrollbar = $( ".scroll-bar9" ).slider({
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
		var scrollbar = $( ".scroll-vertical9" ).slider({
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
 
 $(".scroll-title9").click(function(){
   
    $('.scroll-pane9').fadeOut();
  });
 
});