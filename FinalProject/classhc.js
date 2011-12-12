$(function(){  

  $('.scroll-pane7').hide();
  
  $(document).ready(function() {
	
	$('.hc a').click(function() {
	 $('.scroll-pane7').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content7').load(url + ' .class');
     $('.scroll-pane7').addClass("scroll-pane");
     $('.scroll-content7').addClass("scroll-content");
     $('.scroll-bar7').addClass("scroll-bar");
     $('.scroll-vertical7').addClass("scroll-vertical");
     $('.scroll-title7').addClass("scroll-title");
     return false;
  }); 
  
  $('#ks a').click(function() {
	 $('.scroll-pane7').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content7').load('MainMenu/MainMenu.html' + ' .class',function(){
          $('p:contains("VisualGameObject")').css("background-color","yellow");
     });
     $('.scroll-pane7').addClass("scroll-pane");
     $('.scroll-content7').addClass("scroll-content");
     $('.scroll-bar7').addClass("scroll-bar");
     $('.scroll-vertical7').addClass("scroll-vertical");
     $('.scroll-title7').addClass("scroll-title");
     return false;
  }); 

  
  });
  
  $(function(scroll) {
		//scrollpane parts
		var scrollPane = $( ".scroll-pane7" ),
			scrollContent = $( ".scroll-content7" );
		
		//build slider
		var scrollbar = $( ".scroll-bar7" ).slider({
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
		var scrollbar = $( ".scroll-vertical7" ).slider({
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
 
 $(".scroll-title7").click(function(){
   
    $('.scroll-pane7').fadeOut();
  });
 
});