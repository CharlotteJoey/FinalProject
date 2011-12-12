$(function(){  

  $('.scroll-pane13').hide();
  
  $(document).ready(function() {
	
	$('.nc a').click(function() {
	 $('.scroll-pane13').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content13').load(url + ' .class');
     $('.scroll-pane13').addClass("scroll-pane");
     $('.scroll-content13').addClass("scroll-content");
     $('.scroll-bar13').addClass("scroll-bar");
     $('.scroll-vertical13').addClass("scroll-vertical");
     $('.scroll-title13').addClass("scroll-title");
     return false;
  }); 
  
  $('#cs a').click(function() {
	 $('.scroll-pane13').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content13').load('MainMenu/VisualGameObject.html' + ' .class',function(){
         $('p:contains("GameObject")').css("background-color","yellow");
     });
     $('.scroll-pane13').addClass("scroll-pane");
     $('.scroll-content13').addClass("scroll-content");
     $('.scroll-bar13').addClass("scroll-bar");
     $('.scroll-vertical13').addClass("scroll-vertical");
     $('.scroll-title13').addClass("scroll-title");
     return false;
  }); 
  
  $('#hs a').click(function() {
	 $('.scroll-pane13').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content13').load('MainMenu/VisualGameObject.html' + ' .class',function(){
         $('p:contains("Rectangle")').css("background-color","yellow");
     });
     $('.scroll-pane13').addClass("scroll-pane");
     $('.scroll-content13').addClass("scroll-content");
     $('.scroll-bar13').addClass("scroll-bar");
     $('.scroll-vertical13').addClass("scroll-vertical");
     $('.scroll-title13').addClass("scroll-title");
     return false;
  }); 
  
  });
  
  $(function(scroll) {
		//scrollpane parts
		var scrollPane = $( ".scroll-pane13" ),
			scrollContent = $( ".scroll-content13" );
		
		//build slider
		var scrollbar = $( ".scroll-bar13" ).slider({
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
		var scrollbar = $( ".scroll-vertical13" ).slider({
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
 
 $(".scroll-title13").click(function(){
   
    $('.scroll-pane13').fadeOut();
  });
 
});