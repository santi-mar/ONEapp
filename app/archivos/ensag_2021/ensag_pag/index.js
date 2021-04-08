// Obtenemos una referencia al canvas.
canvas = document.getElementById("spaceCanvas");
ctx = canvas.getContext("2d");

// Lo pintamos negro
ctx.fillStyle = "black";ctx.rect(0, 0, 300, 300);
ctx.fill();

// Dibujamos 100 estrellas blancas
ctx.fillStyle = "white";
for (i = 0; i <= 100; i++) {    
    // Generamos coordenadas al azar entre 20 y 299     
    var x = 20 + Math.floor(Math.random() * 279);     
    var y = 20 + Math.floor(Math.random() * 279);
    // Dibujamos la estrella    
    ctx.beginPath();    
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}
function nave() {
    // Dibujemos la nave usando curbas de bezier. 
    // Primero pintemos el fuselaje en azul
    ctx.fillStyle = "rgb(0, 0, 255)";
    ctx.beginPath();
    ctx.moveTo(28.4, 16.9);
    ctx.bezierCurveTo(28.
    	function gameLoop() {
    ctx.putImageData(oldBackground, oldX, oldY);
    ctx.putImageData(ship, newX, newY);
}
setInterval(gameLoop, 20);(4, 19.7, 22.9, 22.0, 16.0, 22.0){;
    ctx.bezierCurveTo(9.1, 22.0, 3.6, 19.7, 3.6, 16.9);
    ctx.bezierCurveTo(3.6, 14.1, 9.1, 11.8, 16.0, 11.8);
    ctx.bezierCurveTo(22.9, 11.8, 28.4, 14.1, 28.4, 16.9);
    ctx.closePath();
    ctx.fill();

// ahora la cabina en rojo
    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.beginPath();
    ctx.moveTo(22.3, 12.0);
    ctx.bezierCurveTo(22.3, 13.3, 19.4, 14.3, 15.9, 14.3);
    ctx.bezierCurveTo(12.4, 14.3, 9.6, 13.3, 9.6, 12.0);
    ctx.bezierCurveTo(9.6, 10.8, 12.4, 9.7, 15.9, 9.7);
    ctx.bezierCurveTo(19.4, 9.7, 22.3, 10.8, 22.3, 12.0);
    ctx.closePath();
    ctx.fill();
}
function gameLoop() {
    ctx.putImageData(oldBackground, oldX, oldY);
    ctx.putImageData(ship, newX, newY);
}
setInterval(gameLoop, 20);
document.addEventListener("mousedown", moverNave, true);
function moverNave (event) { 
    event.preventDefault(); //Para evitar el comportamiento default
    oldX = newX;
    oldY = newY;
    oldBackground = newBackground;
    ctx.putImageData(oldBackground, oldX,oldY);
    var eventTouch;
    eventTouch = event.changedTouches[0]; 
    newX = eventTouch.pageX - 15;
    newY = eventTouch.pageY - 60;
    newBackground = ctx.getImageData(newX, newY, 30, 30);
}