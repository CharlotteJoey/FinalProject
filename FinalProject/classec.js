$(function(){  

  $('.scroll-pane4').hide();
  
  $(document).ready(function() {
	
	$('.ec a').click(function() {
	 $('.scroll-pane4').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content4').load(url + ' .class');
     $('.scroll-pane4').addClass("scroll-pane");
     $('.scroll-content4').addClass("scroll-content");
     $('.scroll-bar4').addClass("scroll-bar");
     $('.scroll-vertical4').addClass("scroll-vertical");
     $('.scroll-title4').addClass("scroll-title");
     return false;
  }); 
  
    $('#gs a').click(function() {
	 $('.scroll-pane4').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content4').load('MainMenu/Level.html' + ' .class',function(){
          $('p:contains("Powerup")').css("background-color","yellow");
     });
     $('.scroll-pane4').addClass("scroll-pane");
     $('.scroll-content4').addClass("scroll-content");
     $('.scroll-bar4').addClass("scroll-bar");
     $('.scroll-vertical4').addClass("scroll-vertical");
     $('.scroll-title4').addClass("scroll-title");
     return false;
  }); 
  
    $('#ks a').click(function() {
	 $('.scroll-pane4').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content4').load('MainMenu/Level.html' + ' .class',function(){
          $('p:contains("VisualGameObject")').css("background-color","yellow");
     });
     $('.scroll-pane4').addClass("scroll-pane");
     $('.scroll-content4').addClass("scroll-content");
     $('.scroll-bar4').addClass("scroll-bar");
     $('.scroll-vertical4').addClass("scroll-vertical");
     $('.scroll-title4').addClass("scroll-title");
     return false;
  }); 
  
  });
  
  $(function(scroll) {
		//scrollpane parts
		var scrollPane = $( ".scroll-pane4" ),
			scrollContent = $( ".scroll-content4" );
		
		//build slider
		var scrollbar = $( ".scroll-bar4" ).slider({
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
		var scrollbar = $( ".scroll-vertical4" ).slider({
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
 
 $(".scroll-title4").click(function(){
   
    $('.scroll-pane4').fadeOut();
  });
 
});