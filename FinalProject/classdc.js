$(function(){  

  $('.scroll-pane3').hide();
  
  $(document).ready(function() {
	
	$('.dc a').click(function() {
	 $('.scroll-pane3').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content3').load(url + ' .class');
     $('.scroll-pane3').addClass("scroll-pane");
     $('.scroll-content3').addClass("scroll-content");
     $('.scroll-bar3').addClass("scroll-bar");
     $('.scroll-vertical3').addClass("scroll-vertical");
     $('.scroll-title3').addClass("scroll-title");
     return false;
  }); 
  
    $('#bs a').click(function() {
	 $('.scroll-pane3').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content3').load('MainMenu/GameObjectManager.html' + ' .class',function(){
          $('p:contains("ApplicationManager")').css("background-color","yellow");
          });
     $('.scroll-pane3').addClass("scroll-pane");
     $('.scroll-content3').addClass("scroll-content");
     $('.scroll-bar3').addClass("scroll-bar");
     $('.scroll-vertical3').addClass("scroll-vertical");
     $('.scroll-title3').addClass("scroll-title");
     return false;
  });
  
  $('#js a').click(function() {
	 $('.scroll-pane3').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content3').load('MainMenu/GameObjectManager.html' + ' .class',function(){
          $('p:contains("ResourceManager")').css("background-color","yellow");
           });
     $('.scroll-pane3').addClass("scroll-pane");
     $('.scroll-content3').addClass("scroll-content");
     $('.scroll-bar3').addClass("scroll-bar");
     $('.scroll-vertical3').addClass("scroll-vertical");
     $('.scroll-title3').addClass("scroll-title");
     return false;
  });
  
  });
  
  $(function(scroll) {
		//scrollpane parts
		var scrollPane = $( ".scroll-pane3" ),
			scrollContent = $( ".scroll-content3" );
		
		//build slider
		var scrollbar = $( ".scroll-bar3" ).slider({
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
		var scrollbar = $( ".scroll-vertical3" ).slider({
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
 
 $(".scroll-title3").click(function(){
   
    $('.scroll-pane3').fadeOut();
  });
 
});