$(function(){
  
  // ui code
  var openWin = $("#openWin");
  openWin.hide();
 
  $(".btn").mouseenter(function(){
    $(this).animate({"backgroundColor" : "white"}, 200);
  }).mouseleave(function(){
    $(this).animate({"backgroundColor" : "#efefef"});
  });
  $("#clear").click(function(){
    $('.pane').fadeOut();
    $('#global').fadeOut();
    $('#composited').fadeOut();
    $('#drop').fadeOut();
    $('.canvas-bar').fadeOut();
    $('.scroll-pane0').fadeOut();
    $('.scroll-pane1').fadeOut();
    $('.scroll-pane2').fadeOut();
    $('.scroll-pane3').fadeOut();
    $('.scroll-pane4').fadeOut();
    $('.scroll-pane5').fadeOut();
    $('.scroll-pane9').fadeOut();
    $('.scroll-pane7').fadeOut();
    $('.scroll-pane8').fadeOut();
    $('.scroll-pane10').fadeOut();
    $('.scroll-pane11').fadeOut();
    $('.scroll-pane13').fadeOut();
    $('.scroll-pane12').fadeOut();
  });

  $("#view").click(function(){
    window.open("Inheritance.html", "_blank");
  });
  
  $("#effect").hide();
  $("#drop").hide();
  $(function() {
		function runEffect() {
			$( "#effect" ).toggle( 'slide', 500 );
		};

		$( "#panel" ).click(function() {
			runEffect();
			return false;
		});	
	});
	  
  $(function(){
       function handler(event) {
            var $target = $(event.target);
            if( $target.is("dt") ) {
            $target.children().toggle();
            }
        }
        
        $("dl").click(handler).find("dl").hide();
    });
       
  $("#fileTitle").click(function(){
    openWin.fadeOut();
  });

  $("#empty").click(function(){
    $('#drop').empty();
  });
  
  $("#show").click(function(){
    $('#drop').show();
  });
  
  $("#open").click(function(){
    openWin.fadeIn();
  });
  
  
  $( "#accordion" ).accordion({
			autoHeight: false,
			navigation: true
		});
     
  var nameMessage = "Enter your file name";
  var filename = $("#filename").val(nameMessage);

  filename.focus(function(){
    if ($(this).val() == nameMessage){
      $(this).val("");
    }
  }).blur(function(){
    if ($(this).val() == ""){
      $(this).val(nameMessage);
    }
  });
  
  $(function(){
  var drop = document.getElementById('drop');
  drop.ondragover = function (event) { return false; };
  drop.ondrop = function (event) {
  event = event || window.event;
  this.innerHTML += '<p>' + event.dataTransfer.getData('Text') + '</p>';
  // return false;
  };
  });
  
  $("#nameForm").submit(function(e){
    e.preventDefault();
    saveFile();
  });
  
  $(".file").live('click', function() {
    var name = $(this).text();
    $.getJSON("files/" + name + ".json", {n:Math.random()}, function(data){
       graph.fromJSON(data);
       
       filename.val(name);
    });
  }).live('mouseover', function(){
    $(this).css({"background-color": "#ededed"});
  }).live("mouseout", function(){
    $(this).css({"background-color": "white"});
  });
   
});