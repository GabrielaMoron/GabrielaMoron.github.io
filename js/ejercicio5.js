let perimetroC=document.getElementById("perimetroC");
let cerrarC=document.querySelector(".cerrarC");
let perimetroCirculo=document.getElementById("perimetroCirculo");



perimetroC.addEventListener("click",()=>{
    perimetroCirculo.style.display="block";
})

cerrarC.addEventListener("click",()=>{
    perimetroCirculo.style.display="none"; 
})

window.addEventListener("click",(e)=>{
    if(e.target==perimetroC){
        perimetroC.style.display="flex"; 
    }
})

const contarPC=document.getElementById("contarPC");

contarPC.addEventListener("click",()=>{
    const radio=document.getElementById("radio").value;
    parseInt(radio);
    let resultado = radio * 3.1416 * 2;
    swal(`El perímetro del circulo es ${resultado.toFixed(2)}`);
})

//Area
let areaC=document.getElementById("areaC");
let areaCirculo=document.getElementById("areaCirculo");
let cerrar=document.querySelector(".cerrar");

areaC.addEventListener("click",()=>{
    areaCirculo.style.display="block";
})

cerrar.addEventListener("click",()=>{
    areaCirculo.style.display="none"; 
})

window.addEventListener("click",(e)=>{
    if(e.target==areaC){
        areaC.style.display="flex"; 
    }
})

const contarAC=document.getElementById("contarAC");

contarAC.addEventListener("click",()=>{
    const radio=document.getElementById("radio").value;
    parseInt(radio);
    let resultado = 3.1416 * (radio *  radio);
    swal(`El área del circulo es ${resultado.toFixed(2)}`);
})

//Triangulo
//perimetro
let perimetroT=document.getElementById("perimetroT");
let perimetroTriangulo=document.getElementById("perimetroTriangulo");
let cerrarT=document.querySelector(".cerrarT");

perimetroT.addEventListener("click",()=>{
    perimetroTriangulo.style.display="block";
})

cerrarT.addEventListener("click",()=>{
    perimetroTriangulo.style.display="none"; 
})

window.addEventListener("click",(e)=>{
    if(e.target==perimetroT){
        perimetroT.style.display="flex"; 
    }
})


const contarPT=document.getElementById("contarPT");

contarPT.addEventListener("click",()=>{
    let lado1=document.getElementById("lado1").value;
    let lado2=document.getElementById("lado2").value;
    let lado3=document.getElementById("lado3").value;
    parseInt(lado1,lado2,lado3);
    let resultado = (parseInt(lado1) + parseInt(lado2) + parseInt(lado3));
    swal(`El perímetro del triangulo es ${resultado}`);
})


//Area
let areaT=document.getElementById("areaT");
let areaTriangulo=document.getElementById("areaTriangulo");
let cerrarT2=document.querySelector(".cerrarT2");

areaT.addEventListener("click",()=>{
    areaTriangulo.style.display="block";
})

cerrarT2.addEventListener("click",()=>{
    areaTriangulo.style.display="none"; 
})

window.addEventListener("click",(e)=>{
    if(e.target==areaT){
        areaT.style.display="flex"; 
    }
})


const contarAT=document.getElementById("contarAT");

contarAT.addEventListener("click",()=>{
    let baseT=document.getElementById("baseT").value;
    let alturaT=document.getElementById("alturaT").value;
    parseInt(baseT,alturaT);
    let resultado = (baseT * alturaT)/2;
    swal(`El perímetro del triangulo es ${resultado}`);
})

//Cuadrado
//perimetro
let perimetroCu=document.getElementById("perimetroCu");
let perimetroCuadrado=document.getElementById("perimetroCuadrado");
let cerrarCu=document.querySelector(".cerrarCu");

perimetroCu.addEventListener("click",()=>{
    perimetroCuadrado.style.display="block";
})

cerrarCu.addEventListener("click",()=>{
    perimetroCuadrado.style.display="none"; 
})

window.addEventListener("click",(e)=>{
    if(e.target==perimetroCu){
        perimetroCu.style.display="flex"; 
    }
})

const contarPCu=document.getElementById("contarPCu");

contarPCu.addEventListener("click",()=>{
    let ladoC=document.getElementById("ladoC").value;
    parseInt(ladoC);
    let resultado = ladoC * 4;
    swal(`El perímetro del cuadrado es ${resultado}`);
})


//Area
let areaCu=document.getElementById("areaCu");
let areaCuadrado=document.getElementById("areaCuadrado");
let cerrarCu2=document.querySelector(".cerrarCu2");

areaCu.addEventListener("click",()=>{
    areaCuadrado.style.display="block";
})

cerrarCu2.addEventListener("click",()=>{
    areaCuadrado.style.display="none"; 
})

window.addEventListener("click",(e)=>{
    if(e.target==areaCu){
        areaCu.style.display="flex"; 
    }
})

const contarACu=document.getElementById("contarACu");

contarACu.addEventListener("click",()=>{
    let ladoCA=document.getElementById("ladoCA").value;
    parseInt(ladoCA);
    let resultado = ladoCA * ladoCA;
    swal(`El área del triangulo es ${resultado}`);
})

//Rectangulo
//perimetro
let perimetroR=document.getElementById("perimetroR");
let perimetroRectangulo=document.getElementById("perimetroRectangulo");
let cerrarR=document.querySelector(".cerrarR");

perimetroR.addEventListener("click",()=>{
    perimetroRectangulo.style.display="block";
})

cerrarR.addEventListener("click",()=>{
    perimetroRectangulo.style.display="none"; 
})

window.addEventListener("click",(e)=>{
    if(e.target==perimetroR){
        perimetroR.style.display="flex"; 
    }
})

const contarPR=document.getElementById("contarPR");

contarPR.addEventListener("click",()=>{
    let baseR=document.getElementById("baseR").value;
    let alturaR=document.getElementById("alturaR").value;
    parseInt(baseR,alturaR);
    let resultado = 2 *(parseInt(baseR) + parseInt(alturaR));
    swal(`El perímetro del rectangulo es ${resultado}`);
})



//Area
let areaR=document.getElementById("areaR");
let areaRectangulo=document.getElementById("areaRectangulo");
let cerrarR2=document.querySelector(".cerrarR2");

areaR.addEventListener("click",()=>{
    areaRectangulo.style.display="block";
})

cerrarR2.addEventListener("click",()=>{
    areaRectangulo.style.display="none"; 
})

window.addEventListener("click",(e)=>{
    if(e.target==areaR){
        areaR.style.display="flex"; 
    }
})

const contarAR=document.getElementById("contarAR");

contarAR.addEventListener("click",()=>{
    let baseAR=document.getElementById("baseAR").value;
    let alturaAR=document.getElementById("alturaAR").value;
    parseInt(baseAR,alturaAR);
    let resultado = baseAR * alturaAR;
    swal(`El perímetro del triangulo es ${resultado}`);
})