$(function(){  

  $('.scroll-pane0').hide();

  
  $(document).ready(function() {
	
	$('.ac a').click(function() {
	 $('.canvas-bar').show();
	 $('.scroll-pane0').show();
     var url=$(this).attr('href');
     $('.scroll-content0').load(url + ' .class');
     $('.scroll-pane0').addClass("scroll-pane");
     $('.scroll-content0').addClass("scroll-content");
     $('.scroll-bar0').addClass("scroll-bar");
     $('.scroll-vertical0').addClass("scroll-vertical");
     $('.scroll-title0').addClass("scroll-title");
     return false;
  }); 
  
  $('#ks a').click(function() {
     $('.canvas-bar').show();
	 $('.scroll-pane0').show();
     var url=$(this).attr('href');
     $('.scroll-content0').load('MainMenu/AnimatedGameObject.html' + ' .class',function(){
          $('p:contains("VisualGameObject")').css("background-color","yellow");
     });
     $('.scroll-pane0').addClass("scroll-pane");
     $('.scroll-content0').addClass("scroll-content");
     $('.scroll-bar0').addClass("scroll-bar");
     $('.scroll-vertical0').addClass("scroll-vertical");
     $('.scroll-title0').addClass("scroll-title");
     return false;
  });
  
  $('#hs a').click(function() {
     $('.canvas-bar').show();
	 $('.scroll-pane0').show();
     var url=$(this).attr('href');
     $('.scroll-content0').load('MainMenu/AnimatedGameObject.html' + ' .class',function(){
          $('p:contains("Rectangle")').css("background-color","yellow");
     });
     $('.scroll-pane0').addClass("scroll-pane");
     $('.scroll-content0').addClass("scroll-content");
     $('.scroll-bar0').addClass("scroll-bar");
     $('.scroll-vertical0').addClass("scroll-vertical");
     $('.scroll-title0').addClass("scroll-title");
     return false;
  });
  
  $('#ds a').click(function() {
	 $('.scroll-pane0').show();
     var url=$(this).attr('href');
     $('.scroll-content0').load('MainMenu/Main.html' + ' .function',function(){
          $('p:contains("GameObjectManager")').css("background-color","yellow");
     });
     $('.scroll-pane0').addClass("scroll-pane");
     $('.scroll-content0').addClass("scroll-content");
     $('.scroll-bar0').addClass("scroll-bar");
     $('.scroll-vertical0').addClass("scroll-vertical");
     $('.scroll-title0').addClass("scroll-title");
     return false;
  });
  
  });
  
  $(function(scroll) {
		//scrollpane parts
		var scrollPane = $( ".scroll-pane0" ),
			scrollContent = $( ".scroll-content0" );
		
		//build slider
		var scrollbar = $( ".scroll-bar0" ).slider({
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
		var scrollbar = $( ".scroll-vertical0" ).slider({
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
 
 $(".scroll-title0").click(function(){
    $('.scroll-pane0').fadeOut();
  });
 
});
