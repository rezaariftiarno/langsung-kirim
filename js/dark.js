function darkMode() {
   var element = document.body;
   var x = element.classList.toggle("dark-mode");
   if (x == true){
   document.getElementById("dark").innerHTML = "Dark Mode <strong style='color: #47eb45 !important'>On</strong>";
   }
   if (x == false){
   document.getElementById("dark").innerHTML = "Dark Mode <strong style='color: #f1573e !important'>Off</strong>";
   }
}
