var textCaptcha = document.getElementById('captcha');
var answerCaptcha = document.getElementById('textCaptcha');
var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmonpqrstuvwxyz¡!´";
window.addEventListener('load',newCaptcha);
document.getElementById('newCaptcha').addEventListener('click',newCaptcha);
document.getElementById('checkCaptcha').addEventListener('click',validarCaptcha);
function newCaptcha(){
  textCaptcha.value = generarCaptcha(caracteres,7);
  textCaptcha.style.color = randColor();
}
function generarCaptcha(chars, longitud){
  var captcha = "";
  for (var i=0; i < longitud; i++)
  {
    rand = Math.floor(Math.random()*chars.length);
    captcha += chars.substr(rand, 1);
  }
  return captcha;
}
function randColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
function validarCaptcha(){
  if(textCaptcha.value === answerCaptcha.value ){
    alert('Captcha Correcta');
  }
  else {
    alert('Incorrecto');
  }
  newCaptcha();
}
