$(function(){  

  $('.scroll-pane11').hide();
  
  $(document).ready(function() {
	
	$('.lc a').click(function() {
	 $('.scroll-pane11').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content11').load(url + ' .class');
     $('.scroll-pane11').addClass("scroll-pane");
     $('.scroll-content11').addClass("scroll-content");
     $('.scroll-bar11').addClass("scroll-bar");
     $('.scroll-vertical11').addClass("scroll-vertical");
     $('.scroll-title11').addClass("scroll-title");
     return false;
  }); 
  
     $('#ks a').click(function() {
	 $('.scroll-pane11').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content11').load('MainMenu/RepeatingGameObject.html' + ' .class',function(){
          $('p:contains("VisualGameObject")').css("background-color","yellow");
     });
     $('.scroll-pane11').addClass("scroll-pane");
     $('.scroll-content11').addClass("scroll-content");
     $('.scroll-bar11').addClass("scroll-bar");
     $('.scroll-vertical11').addClass("scroll-vertical");
     $('.scroll-title11').addClass("scroll-title");
     return false;
  });
  
  });
  
  $(function(scroll) {
		//scrollpane parts
		var scrollPane = $( ".scroll-pane11" ),
			scrollContent = $( ".scroll-content11" );
		
		//build slider
		var scrollbar = $( ".scroll-bar11" ).slider({
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
		var scrollbar = $( ".scroll-vertical11" ).slider({
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
 
 $(".scroll-title11").click(function(){
   
    $('.scroll-pane11').fadeOut();
  });
 
});