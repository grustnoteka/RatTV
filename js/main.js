$(document).ready(function(){
  // градиент
  var colors = new Array(
    [62,35,255],
    [60,255,60],
    [255,35,98],
    [45,175,230],
    [255,0,255],
    [255,128,0]);

  var step = 0;

  var colorIndices = [0,1,2,3];

  var gradientSpeed = 0.002;

  function updateGradient()
  {

    if ( $===undefined ) return;

  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];

  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";

  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";

   $('#gradient').css({
     background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
      background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

    step += gradientSpeed;
    if ( step >= 1 )
    {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];

      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

    }
  }

  setInterval(updateGradient,10);


var counter = 0;
var $switcher =   $('.richag');
  $switcher.on("click", function () {
  if(counter == 180){
    counter = -45;
  }
  counter += 45;

  $switcher.css("transform", "rotate("+counter+"deg)");
  if(counter == 0){
     $('.perviykanal').css("visibility","visible");
      $('#audio2')[0].play();
  }else{
    $('.perviykanal').css("visibility","hidden");
    $('#audio2')[0].pause();
  }
  if(counter == 45){
     $('.vtoroykanal').css("visibility","visible");
     $('#audio')[0].play();
  }else{
    $('.vtoroykanal').css("visibility","hidden");
   $('#audio')[0].pause();
  }
  if(counter == 90){
     $('.tretiykanal').css("visibility","visible");
     $('#audio3')[0].play();
  }else{
    $('.tretiykanal').css("visibility","hidden");
    $('#audio3')[0].pause();
  }
  if(counter == 135){
     $('.chetvertiykanal').css("visibility","visible");
     $('#audio4')[0].play();
  }else{
    $('.chetvertiykanal').css("visibility","hidden");
    $('#audio4')[0].pause();
  }
  if(counter == 180){
     $('.pyatiykanal').css("visibility","visible");
     $('#audio5')[0].play();
  }else{
    $('.pyatiykanal').css("visibility","hidden");
    $('#audio5')[0].pause();
  }
});
var black = true;

  $('.onoff').mousedown(function() {
    $(".onoff").attr({ src: "images/17.svg"});
    if(black){
      $(".blackekran").css("visibility","hidden");
      black = !black
    }else{
        $(".blackekran").css("visibility","visible");
        black = !black
    }


  });
  $('.onoff').mouseup(function() {
    $(".onoff").attr({ src: "images/14.svg"});
  });

})
