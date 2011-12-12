$(function(){  
  
  $(document).ready(function() {
	
	$('#a a').click(function() {
     var url=$(this).attr('href');
     $('.scroll-content').load(url + ' .class');
     return false;
  }); 
  
    $('#b a').click(function() {
     var url=$(this).attr('href');
    $('.scroll-content').load(url + ' .class',function(){
          $('p:contains("GameObject")').css("background-color","yellow");
          $('p:contains("zOrder")').css("background-color","yellow");
    });
     return false;
    }); 
    
    $('#c a').click(function() {
     var url=$(this).attr('href');
    $('.scroll-content').load(url + ' .class',function(){
          $('p:contains("VisualGameObject")').css("background-color","yellow");
          $('p:contains("image")').css("background-color","yellow");
    });
     return false;
    });
    
    $('#d a').click(function() {
     var url=$(this).attr('href');
    $('.scroll-content').load(url + ' .class',function(){
          $('p:contains("AnimatedGameObject")').css("background-color","yellow");
          $('p:contains("currentFrame")').css("background-color","yellow");
          $('p:contains("timeBetweenFrames")').css("background-color","yellow");
          $('p:contains("timeSinceLastFrame")').css("background-color","yellow");
          $('p:contains("frameWidth")').css("background-color","yellow");
    });
     return false;
    });
  });
  
  $(function() {
		//scrollpane parts
		var scrollPane = $( ".scroll-pane" ),
			scrollContent = $( ".scroll-content" );
		
		//build slider
		var scrollbar = $( ".scroll-bar" ).slider({
		    value: 5,
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
		var scrollbar = $( ".scroll-vertical" ).slider({
			orientation: "vertical",
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

    $('.control').drawLine(300,92,300,145);
    $('.control').drawLine(300,178,300,230);
    $('.control').drawLine(300,178,100,223);
    $('.control').drawLine(300,178,500,223);
    $('.control').drawLine(300,262,300,314);
    $('.control').drawLine(300,262,100,306);
    $('.control').drawLine(300,262,500,306);
});

