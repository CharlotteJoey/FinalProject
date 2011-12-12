$(function(){  

  $('.scroll-pane1').hide();
  
  $(document).ready(function() {
	
	$('.bc a').click(function() {
	 $('.scroll-pane1').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content1').load(url + ' .class');
     
     $('.scroll-pane1').addClass("scroll-pane");
     $('.scroll-content1').addClass("scroll-content");
     $('.scroll-bar1').addClass("scroll-bar");
     $('.scroll-vertical1').addClass("scroll-vertical");
     $('.scroll-title1').addClass("scroll-title");
     return false;
  }); 
  
  $('#es a').click(function() {
	 $('.scroll-pane1').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content1').load('MainMenu/ApplicationManager.html' + ' .class',function(){
         $('p:contains("MainMenu")').css("background-color","yellow");
     });
     
     $('.scroll-pane1').addClass("scroll-pane");
     $('.scroll-content1').addClass("scroll-content");
     $('.scroll-bar1').addClass("scroll-bar");
     $('.scroll-vertical1').addClass("scroll-vertical");
     $('.scroll-title1').addClass("scroll-title");
     return false;
  });
  
  $('#fs a').click(function() {
	 $('.scroll-pane1').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content1').load('MainMenu/ApplicationManager.html' + ' .class',function(){
         $('p:contains("Player")').css("background-color","yellow");
     });
     
     $('.scroll-pane1').addClass("scroll-pane");
     $('.scroll-content1').addClass("scroll-content");
     $('.scroll-bar1').addClass("scroll-bar");
     $('.scroll-vertical1').addClass("scroll-vertical");
     $('.scroll-title1').addClass("scroll-title");
     return false;
  });
  
  $('#is a').click(function() {
	 $('.scroll-pane1').show();
     $('.canvas-bar').show();
     var url=$(this).attr('href');
     $('.scroll-content1').load('MainMenu/ApplicationManager.html' + ' .class',function(){
         $('p:contains("RepeatingGameObject")').css("background-color","yellow");
     });
     
     $('.scroll-pane1').addClass("scroll-pane");
     $('.scroll-content1').addClass("scroll-content");
     $('.scroll-bar1').addClass("scroll-bar");
     $('.scroll-vertical1').addClass("scroll-vertical");
     $('.scroll-title1').addClass("scroll-title");
     return false;
  });
  });
  
  $(function(scroll) {
		//scrollpane parts
		var scrollPane = $( ".scroll-pane1" ),
			scrollContent = $( ".scroll-content1" );
		
		//build slider
		var scrollbar = $( ".scroll-bar1" ).slider({
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
		var scrollbar = $( ".scroll-vertical1" ).slider({
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
 
 $(".scroll-title1").click(function(){
   
    $('.scroll-pane1').fadeOut();
  });
 
});