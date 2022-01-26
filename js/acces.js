function verifica() 
{ 
if((formclave.clave.value!="2018")||(formclave.usuario.value!="PresupTest")) 
{ 
alert("ERROR, verifique la clave de acceso"); 
window.open.formclave.clave; 
} 
window.location = document.formclave.usuario.value + document.formclave.clave.value + ".html"	
} 

function bloqueo_de_boton() 
{ 
if(event.button==2) 
{alert('Botón bloqueado')} 
} 
document.onmousedown=bloqueo_de_boton 