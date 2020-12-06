var d = new Date();
var time = d.getHours();

if (time>=0&&time<=11) {
  document.write("selamat pagi");
}
if (time>=12&&time<=14) {
  document.write("selamat siang");
}
if (time>=15&&time<=17) {
  document.write("selamat sore");
}
if (time>=18&&time<=23) {
  document.write("selamat malam");
}
