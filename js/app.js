var textCaptacha = document.getElementById('captcha');
var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmonpqrstuvwxyz¡!´";
window.addEventListener('load',newCaptcha);
document.getElementById('newCaptcha').addEventListener('click',newCaptcha);

function newCaptcha(){
  textCaptacha.value = generarCaptcha(caracteres,7);
  textCaptacha.style.color = randColor();
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
