$(function(){  

  
  $('.pane').hide();
  
  $(document).ready(function() { 
  
  $('.a a').click(function() {
	 $('.pane').show();
     var url=$(this).attr('href');
     $('.content').load(url + ' .function:first');
     return false;
  }); 
  
	
	$('.b a').click(function() {
	 $('.pane').show();
     var url=$(this).attr('href');
     $('.content').load(url + ' .function:eq(1)');
     return false;
  }); 
  
	
	$('.c a').click(function() {
	 $('.pane').show();
     var url=$(this).attr('href');
     $('.content').load(url + ' .function:eq(2)');
     return false;
  }); 
  
	
	
	$('.d a').click(function() {
	 $('.pane').show();
     var url=$(this).attr('href');
     $('.content').load(url + ' .function:eq(3)');
     return false;
  });  
  
	
	$('.e a').click(function() {
	 $('.pane').show();
     var url=$(this).attr('href');
     $('.content').load(url + ' .function:eq(4)');
     return false;
  }); 
  
	$('.f a').click(function() {
	 $('.pane').show();
     var url=$(this).attr('href');
     $('.content').load(url + ' .function:eq(5)');
     return false;
  });
  
  $('.g a').click(function() {
	 $('.pane').show();
     var url=$(this).attr('href');
     $('.content').load(url + ' .function:eq(6)');
     return false;
  });
  
  $('.h a').click(function() {
	 $('.pane').show();
     var url=$(this).attr('href');
     $('.content').load(url + ' .function:eq(7)');
     return false;
  });
  
  $('.i a').click(function() {
	 $('.pane').show();
     var url=$(this).attr('href');
     $('.content').load(url + ' .function:eq(8)');
     return false;
  });
  
  $('.j a').click(function() {
	 $('.pane').show();
     var url=$(this).attr('href');
     $('.content').load(url + ' .function:eq(9)');
     return false;
  }); 
  });
  
  $(function(scroll) {
		//scrollpane parts
		var scrollPane = $( ".pane" ),
			scrollContent = $( ".content" );
		
       //build slider
		var scrollbar = $( ".vertical" ).slider({
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

$(".scroll-title").click(function(){
    $('.pane').fadeOut();
  });
 
});
