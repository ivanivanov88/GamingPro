window.onload=function(){
  init();
  window.addEventListener('resize', init,false);

}
function init(){
  var ltpc = document.getElementById('myCanvas');
  var context = ltpc.getContext('2d');
  var myWidth = window.innerWidth -5;
  var myHeight = window.innerHeight -5;
  context.canvas.width = myWidth;
  cotext.canvas.height = myHeight;
  context.fillStyle = '#000FFF';
  context.fillRect(0,0,myWidth,myHeight);
}
