var d = new Date();
var time = d.getHours();
var minutes = d.getMinutes();

if (time < 12) {
  document.write("selamat pagi");
}
if (time > 12 || minutes > 0) {
  document.write("selamat siang");
}
if (time > 15) {
  document.write("selamat sore");
}
if (time > 18) {
  document.write("selamat malam");
}
