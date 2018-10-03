$(document).ready(function(){

console.log('jQ loaded');

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
var bands = ['Cage the Elephant', 'Mitski', 'Lana Del Rey'];
var html = '';

$('#box1').click(function(){
  console.log('box 1 clicked');
  $.each(bands, function(i, band){
    html += '<li>' + bands[i] + '</li>';
  });
  $('#bands-list').html(html);
  $('#modal1').fadeToggle();
  $('#modal1').css('display', 'flex');
});

$('#box2').click(function(){
  console.log('box 1 clicked');
  $('#modal2').fadeToggle();
  $('#modal2').css('display', 'flex');
});

$('.timeline').mouseenter(function(){
  $(this).css('background', 'orange');
});

});
