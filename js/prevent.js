var element = new Image;
var devtoolsOpen = false;
element.__defineGetter__("id", function() {
    devtoolsOpen = true;
});
setInterval(function() {
devtoolsOpen = false;
console.log(element);
document.getElementById('output').innerHTML = (devtoolsOpen ? location.replace("opps.html") : "dev tools is closed\n");
});
