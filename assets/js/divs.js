
//4- crear 4 divs que tengan alto y ancho de 200px y de distintos colores de fondo//
//usando el atributo style. Cada uno de los divs debe tener un identificador único//
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");
div1.setAttribute("style","width:200px;height:200px;background-color:black");
div2.setAttribute("style","width:200px;height:200px;background-color:red");
div3.setAttribute("style","width:200px;height:200px;background-color:purple");
div4.setAttribute("style","width:200px;height:200px;background-color:gray");

// Crea un script que guarde dentro de una variable global un color
//dependiendo de la letra del teclado presionada. //
document.addEventListener("keydown", function(event) {
    if (event.key === "a") {
        backcolor = "brown";
    } else if (event.key === "s") {
        backcolor = "orange";
    } else if (event.key === "d") {
        backcolor = "green";
    }
});
// al hacer click en uno de los divs este cambia al color seleccionado//
div1.addEventListener('click', () => div1.style.backgroundColor = backcolor);
div2.addEventListener('click', () => div2.style.backgroundColor = backcolor);
div3.addEventListener('click', () => div3.style.backgroundColor = backcolor);
div4.addEventListener('click', () => div4.style.backgroundColor = backcolor);     