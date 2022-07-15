
//** 3.2 - Color verde por defecto al id "ele1"**/


let ele = document.getElementById("ele1");
ele.style.backgroundColor ="green";

//** 3.1 - se modifica la funcion para que el ele1 no **//
//** llamado nuevamente y al hacer click cambie al color amarillo **//

let dye = function(element,color) {
element.style.backgroundColor = color
};
ele.addEventListener("click", () => {
    dye(ele, "yellow");
});

