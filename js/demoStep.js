// This code have been maded by Théophiel Vast in 2018. Switches triggered function that add value to variables

var Profil1= 0 ;
var Profil2= 0 ;
var Profil3= 0 ;
var Profil4= 0;
var Profil5= 0 ;
var Profil6= 0 ;
var Profil7= 0 ;
var Profil8= 0;

// Triggered first question
document.getElementById("qui1").addEventListener("click", grabIt);  
function grabIt() {
	var checkbox = document.getElementById('qui1').checked;


  if (checkbox == true) {

      Profil1++ ;
      Profil2++ ;
      Profil3++ ;
      Profil4++;
     
  }
  if(checkbox == false) {
  	
      Profil1-- ;
      Profil2-- ;
      Profil3-- ;
      Profil4-- ;
    
  }

  else {
    return console.log("goal !")
  }


}
//... second question
document.getElementById("qui2").addEventListener("click", grabIt1);  
function grabIt1() {
  var checkbox = document.getElementById('qui2').checked;


  if (checkbox == true) {
      
      Profil5++ ;
      Profil6++ ;
      Profil7++ ;
      Profil8++ ;
      
  }
  if(checkbox == false) {
    
      Profil5-- ;
      Profil6-- ;
      Profil7-- ;
      Profil8-- ;
    
  }

  else {
    return console.log("goal !")
  }


}
//Third question
document.getElementById("qui3").addEventListener("click", grabIt2);  
function grabIt2() {
  var checkbox = document.getElementById('qui3').checked;


  if (checkbox == true) {
      
      Profil1++ ;
      Profil2++ ;
      Profil3-- ;
      Profil4-- ;
      
  }
  if(checkbox == false) {
     
      Profil1-- ;
      Profil2-- ;
      Profil3++ ;
      Profil4++ ;
  }

  else {
    return console.log("goal !")
  }


}
//la réponse b
document.getElementById("qui4").addEventListener("click", grabIt3);  
function grabIt3() {
  var checkbox = document.getElementById('qui4').checked;


  if (checkbox == true) {
      
      Profil5++ ;
      Profil6++ ;
      Profil7-- ;
      Profil8-- ;
      
  }
  if(checkbox == false) {
      
      Profil5-- ;
      Profil6-- ;
      
      Profil7++ ;
      Profil8++ ;
  }

  else {
    return console.log("goal !")
  }


}

document.getElementById("qui5").addEventListener("click", grabIt4);  
function grabIt4() {
  var checkbox = document.getElementById('qui5').checked;


  if (checkbox == true) {
      
      Profil1++ ;
      Profil2-- ;
      Profil3-- ;
      Profil4++ ;
  }
  if(checkbox == false) {
    
      Profil1-- ;
      Profil2++ ;
      Profil3++ ;
      Profil4-- ;
  }

  else {
    return console.log("goal !")
  }


}

document.getElementById("qui6").addEventListener("click", grabIt5);  
function grabIt5() {
  var checkbox = document.getElementById('qui6').checked;


  if (checkbox == true) {
      
      Profil5++ ;
      Profil6-- ;
      Profil7-- ;
      Profil8++ ;
  }
  if(checkbox == false) {
    
      Profil5-- ;
      Profil6++ ;
      Profil7++ ;
      Profil8-- ;
  }

  else {
    return console.log("goal !")
  }


}

function total() {

var nombreJugador = document.getElementById("nombre").value


  if (Profil1 == 3) {
    document.getElementById("input1").innerHTML = 
    "Hola"+ " " +nombreJugador + "Vous êtes« Sweet Marx » de Thierry Marx" 
    document.getElementById("input2").innerHTML = 
    "";
    document.getElementById("myImg").src = 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkTCVKITPzhvZv3ES2wm3l4zT6WQXt6iRJHtCay7jXR1bsiVh";
    document.getElementById("target").href = "http://www.institutfrancais.es/madrid/cursosdefrances/adultos/preparacion-examenes-oficiales-frances/";

  }    
  if (Profil2 == 2) {
    document.getElementById("input1").innerHTML = 
    "Hola"+ " " +nombreJugador + "Vous êtes « Toute la cuisine de Paul Bocuse »"
    document.getElementById("input2").innerHTML = 
    "";
    document.getElementById("myImg").src = 
    "https://images-na.ssl-images-amazon.com/images/I/41gGSeUWs8L._SX340_BO1,204,203,200_.jpg";
    document.getElementById("target").href = "http://www.institutfrancais.es/madrid/cursosdefrances/adultos/cursos-intensivos-frances-adultos/";
    
  }
  if (Profil3 == 1) {
    document.getElementById("input1").innerHTML = 
    "Hola"+ " " +nombreJugador + "Vous êtes « L’art de recevoir » de Ladurée" 
    document.getElementById("input2").innerHTML =
    "";
    document.getElementById("myImg").src = 
    "https://www.hachette.fr/sites/default/files/styles/echelle_458x718/public/images/livres/couv/9782812304811-T.jpg?itok=Cv8eG1c-";
    document.getElementById("target").href = "http://www.institutfrancais.es/madrid/cursosdefrances/adultos/preparacion-examenes-oficiales-frances/";
    
  }
  if (Profil4 == 2) {
   document.getElementById("input1").innerHTML = 
    "Hola"+ " " +nombreJugador + "Vous êtes« Sweet Marx » de Thierry Marx" 
    document.getElementById("input2").innerHTML = 
    "";
    document.getElementById("myImg").src = 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkTCVKITPzhvZv3ES2wm3l4zT6WQXt6iRJHtCay7jXR1bsiVh";
    document.getElementById("target").href = "http://www.institutfrancais.es/madrid/cursosdefrances/adultos/preparacion-examenes-oficiales-frances/";

  }
   if (Profil5 == 2) {
   document.getElementById("input1").innerHTML = 
    "Hola"+ " " +nombreJugador + "Vous êtes « Toute la cuisine de Paul Bocuse »"
    document.getElementById("input2").innerHTML = 
    "";
    document.getElementById("myImg").src = 
    "https://images-na.ssl-images-amazon.com/images/I/41gGSeUWs8L._SX340_BO1,204,203,200_.jpg";
    document.getElementById("target").href = "http://www.institutfrancais.es/madrid/cursosdefrances/adultos/cursos-intensivos-frances-adultos/";
    
  }
    if (Profil6 == 2) {
    document.getElementById("input1").innerHTML = 
    "Hola"+ " " +nombreJugador + "Vous êtes « L’art de recevoir » de Ladurée" 
    document.getElementById("input2").innerHTML =
    "";
    document.getElementById("myImg").src = 
    "https://www.hachette.fr/sites/default/files/styles/echelle_458x718/public/images/livres/couv/9782812304811-T.jpg?itok=Cv8eG1c-";
    document.getElementById("target").href = "http://www.institutfrancais.es/madrid/cursosdefrances/adultos/preparacion-examenes-oficiales-frances/";
    
  }

  if (Profil7 == 1) {
    document.getElementById("input1").innerHTML = 
    "Hola"+ " " +nombreJugador + "Vous êtes« Sweet Marx » de Thierry Marx" 
    document.getElementById("input2").innerHTML = 
    "";
    document.getElementById("myImg").src = 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkTCVKITPzhvZv3ES2wm3l4zT6WQXt6iRJHtCay7jXR1bsiVh";
    document.getElementById("target").href = "http://www.institutfrancais.es/madrid/cursosdefrances/adultos/preparacion-examenes-oficiales-frances/";

  }
    if (Profil8 == 1) {
  document.getElementById("input1").innerHTML = 
    "Hola"+ " " +nombreJugador + "Vous êtes « L’art de recevoir » de Ladurée" 
    document.getElementById("input2").innerHTML =
    "";
    document.getElementById("myImg").src = 
    "https://www.hachette.fr/sites/default/files/styles/echelle_458x718/public/images/livres/couv/9782812304811-T.jpg?itok=Cv8eG1c-";
    document.getElementById("target").href = "http://www.institutfrancais.es/madrid/cursosdefrances/adultos/preparacion-examenes-oficiales-frances/";
    
  }

    else {
    // return alert(Profil1+" - "+Profil2 +" - "+ Profil3 +" - "+ Profil4 +" - "+ Profil5 +" - "+ Profil6 +" - "+ Profil7 +" - "+ Profil8)
  }
}

