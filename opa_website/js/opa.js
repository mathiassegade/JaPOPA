

/*function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var segundos = Math.floor((t / 1000) % 60);
  var minutos = Math.floor((t / 1000 / 60) % 60);
  var horas = Math.floor((t / (1000 * 60 * 60)) % 24);
  
 
  return {
    'total': t,
    'horas': horas,
    'minutos': minutos,
    'segundos': segundos
  };
}
 
function initializeReloj(demo, endtime) {
  var reloj = document.getElementById(demo);
  var horaSpan = reloj.querySelector('.horas');
  var minutoSpan = reloj.querySelector('.minutos');
  var segundoSpan = reloj.querySelector('.segundos');
 
  function updateReloj() {
    var t = getTimeRemaining(endtime);
    
    horaSpan.innerHTML = ('0' + t.horas).slice(-2);
    minutoSpan.innerHTML = ('0' + t.minutos).slice(-2);
    segundoSpan.innerHTML = ('0' + t.segundos).slice(-2);
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
  updateReloj();
  var timeinterval = setInterval(updateReloj, 1000);
}
 
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeReloj('reloj', deadline);*/

//formulario de contacto//

    /*function postSubmit(){
    
      var nombre = document.getElementById("nombreId").value;
      var apellido = document.getElementsByName("apellido")[0].value;
      
      var mensaje = "Gracias por comunicarte con nosotros "+ nombre + " " + apellido;
      
      document.getElementById("mensajes").innerHTML = mensaje;
    
    }
  
    function preSubmit(){
      
      var nombre = document.getElementById("nombreId").value;
      var apellido = document.getElementsByName("apellido")[0].value;
      var telefono = document.getElementsByName("telefono")[0].value;
      var email = document.getElementsByName("email")[0].value;
      
      var nombreVacio = siVacio(nombre);
      var apellidoVacio = siVacio(apellido);
      var telefonoVacio = siVacio(telefono);
      var emailVacio = siVacio(email);
      
      
      if (nombreVacio || apellidoVacio || telefonoVacio || emailVacio){
        document.getElementById("mensajes").innerHTML = "Por favor complete los datos obligatorios";
      
        return false;
      }

      postSubmit();
      
      return false;
    }
    
    function siVacio(valor){
      if (valor == "")
        return true;
      else
        return false;
    }
    
    function siVacioV2(valor){
      return valor == "";
    }*/

    function enviar() {
  //verificamos que al enviar la contraseña y su confirmacion sean iguales

  var pass = document.getElementById("password").value;
  var compass = document.getElementById("confpassword").value;
  if (pass != compass){
   document.getElementById("alerta").innerHTML = "Su contraseña y su confirmación de contraseña deben ser identicos!";
    return false;
  }
}
    
 