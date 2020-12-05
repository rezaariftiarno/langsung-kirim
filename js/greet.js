var d = new Date();
var time = d.getHours();

if (time < 12) {
  document.write("selamat pagi");
}
if (time > 12) {
  document.write("selamat siang");
}
if (time > 15) {
  document.write("selamat sore");
}
if (time > 18) {
  document.write("selamat malam");
}