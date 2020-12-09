function darkMode() {
   var element = document.body;
   var x = element.classList.toggle("dark-mode");
   if (x == true){
   document.getElementById("dark").innerHTML = "Nyalakan Lampu";
   }
   if (x == false){
   document.getElementById("dark").innerHTML = "Matikan Lampu";
   }
}
