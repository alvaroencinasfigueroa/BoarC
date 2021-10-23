var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');
var rect=canvas.getBoundingClientRect();
var borrar = document.getElementById("borrar");
var dibujarCirculo = document.getElementById("circulo");
var dibujarRectangulo = document.getElementById("rectangulo");
var dibujarLinea = document.getElementById("linea");
var x=0, y=0, dibujando=false, color='black', grueso=1;
var boton_capturar = document.querySelector("#capturar_imagen");
var capturado = document.querySelector("#canvas");
var canvas_capturado = document.querySelector("#canvas_capturado"); 

function fColor(co){
    color = co;
}

function fGrueso(gr){
    grueso = gr;
}

canvas.addEventListener('mousedown', function(ev){
    x = ev.clientX - rect.left;
    y = ev.clientY - rect.top;
    dibujando = true;    
});

canvas.addEventListener('mousemove', function(ev){
    if(dibujando === true){
        dibujar(x, y, ev.clientX - rect.left, ev.clientY .rect.top);
        x = ev.clientX - rect.left;
        y = ev.clientY - rect.top;
    }
});

canvas.addEventListener('mouseup', function(ev){
    if(dibujando===true){
        dibujar(x,y,ev.clientX-rect.left,ev.clientY-rect.top);
        x = 0;
        y = 0;
        dibujando=false;
    }
});

 function dibujar(xa,ya,xb,yb){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=grueso;
    ctx.moveTo(xa,ya);
    ctx.lineTo(xb,yb);
    ctx.stroke();
    ctx.closePath;
 }

 //funcion para dibujar un redondo sobre el canvas
 dibujarCirculo.addEventListener("click", function(){
    ctx.arc(360,100, 100, 0,(Math.PI/180)*360,true);
    ctx.strokeStyle = "yellowgreen";
    ctx.lineWidth = 5;
    ctx.stroke();
 });

 //con esto dibujamos un rectagulo
 dibujarRectangulo.addEventListener("click", function(){
    ctx.strokeRect(10,5,400,200);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.stroke();
 });

 function dibujarLinea(dibujarLinea){
     dibujando === true;
 }

 //usamos esto para poder borrar la pizarra (el canvas en cuestion)
 borrar.addEventListener("click",function(){
    canvas.width = canvas.width;
 },false);

 //usamos estas lineas de codigo para poder capturar al canvas
boton_capturar.addEventListener("click", () => {
    html2canvas(capturado)
    .then(canvas => {
        canvas_capturado.appendChild(canvas);        
    });
});