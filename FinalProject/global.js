$(function(){ 

   $('#global').hide();
   
   $('#aa a').click(function() {
     $('#global').show();
     var url=$(this).attr('href');
     $('.name1').html('<mark>Main</mark>');
     $('#global1').load(url + ' .global:eq(3)');
     
     $('.name2').html('<mark>ApplicationManager</mark>');
     $('#global2').load('MainMenu/ApplicationManager.html' + ' .score');
     
     $('.name3').html('<mark>Powerup</mark>');
     $('#global3').load('MainMenu/Powerup.html' + ' .score');
     
     $('.name4').hide();
     $('#global4').hide();
     $('.name5').hide();
     $('#global5').hide();
     return false;
  });
  
  $('#bb a').click(function() {
     $('#global').show();
     var url=$(this).attr('href');
     $('.name1').html('<mark>Main</mark>');
     $('#global1').load(url + ' .global:last');
     
     $('.name2').html('<mark>ApplicationManager</mark>');
     $('#global2').load('MainMenu/ApplicationManager.html' + ' .player');
     
     $('.name3').html('<mark>Powerup</mark>');
     $('#global3').load('MainMenu/Powerup.html' + ' .player');
     
     $('.name4').hide();
     $('#global4').hide();
     $('.name5').hide();
     $('#global5').hide();
     return false;    
   });
   
   $('#cc a').click(function() {
     $('#global').show();
     var url=$(this).attr('href'); 
     $('.name1').html('<mark>Main</mark>');
     $('#global1').load(url + ' .global:first');
     
     $('.name2').html('<mark>GameObjectManager</mark>');
     $('#global2').load('MainMenu/GameObjectManager.html' + ' .GameObject');
     
     $('.name3').html('<mark>GameObject</mark>');
     $('#global3').load('MainMenu/GameObject.html' + ' .GameObject');
    
     $('.name4').show();
     $('#global4').show();
     $('.name4').html('<mark>ApplicationManager</mark>');
     $('#global4').load('MainMenu/ApplicationManager.html' + ' .GameObject');

     $('.name5').hide();
     $('#global5').hide();
     return false;
  });
  
  $('#dd a').click(function() {
     $('#global').show();
     var url=$(this).attr('href');
     $('.name1').html('<mark>Main</mark>');
     $('#global1').load(url + ' .global:eq(1)');
     
     $('.name2').html('<mark>ApplicationManager</mark>');
     $('#global2').load('MainMenu/ApplicationManager.html' + ' .application');
     
     $('.name3').html('<mark>MainMenu</mark>');
     $('#global3').load('MainMenu/MainMenu.html' + ' .application');
     
     $('.name4').show();
     $('#global4').show();
     $('.name4').html('<mark>LevelEndPost</mark>');
     $('#global4').load('MainMenu/LevelEndPost.html' + ' .application');
     
     $('.name5').show();
     $('#global5').show();
     $('.name5').html('<mark>Powerup</mark>');
     $('#global5').load('MainMenu/Powerup.html' + ' .applicaiton');
     return false;
  });
  
  $('#ee a').click(function() {
     $('#global').show();
     var url=$(this).attr('href');
     $('.name1').html('<mark>Main</mark>');
     $('#global1').load(url + ' .global:eq(2)');
     
     $('.name2').html('<mark>ResourceManager</mark>');
     $('#global2').load('MainMenu/ResourceManager.html' + ' .resource');
     
     $('.name3').html('<mark>MainMenu</mark>');
     $('#global3').load('MainMenu/MainMenu.html' + ' .resource');
     
     $('.name4').show();
     $('#global4').show();
     $('.name4').html('<mark>Level</mark>');
     $('#global4').load('MainMenu/Level.html' + ' .resource');
     
     $('.name5').show();
     $('#global5').show();
     $('.name5').html('<mark>Player</mark>');
     $('#global5').load('MainMenu/Player.html' + ' .resource');
     return false;
 });

});