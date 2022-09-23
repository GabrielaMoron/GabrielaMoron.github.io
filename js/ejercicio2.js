const bt = document.getElementById('bt');
bt.addEventListener('click', function(){
    const grados = document.getElementById('grados').value;
    parseFloat(grados);
    const valor = document.getElementById('valor').value;
    const valor2 = document.getElementById('valor2').value;
    parseInt(valor, valor2);
   
    if(valor == 1 && valor2 == 4){       
        swal({title:`Los grados ${grados}º ya esta  en el valor seleccionado`,icon:"warning"});
    }
    else if(valor == 1 && valor2 == 5){  
             
        let resultado = (grados - 32)/1.8;
        swal(`Los grados ${grados}º Fahrenheit convertida en Celsius es
         ${resultado.toFixed(2)}º`);
    }

    else if(valor == 1 && valor2 == 6){
        let resultado = 5/9*(grados - 32) + 273.15;
        swal(`Los grados ${grados}º Fahrenheit convertida en Kelvin es 
        ${resultado.toFixed(2)}º`);
    }
  
    else if(valor == 2 && valor2 == 4){
        let resultado = (grados * 1.8) + 32;
        swal(`Los grados ${grados}º Celsius convertida a Fahrenheit es 
        ${resultado.toFixed(2)}º`);
    }
    else if(valor == 2 && valor2 == 5){
        swal({title:`Los grados ${grados}º ya esta  en el valor seleccionado`,icon:"warning"});
    }
    else if(valor == 2 && valor2 == 6){
        let resultado = parseFloat(grados) + 273.15;
        swal(`Los  grados ${grados}º Celsius convertida en Kelvin es
         ${resultado.toFixed(2)}º`);     
    }

    else if(valor == 3 && valor2 == 4){
        let resultado = (grados - 273.15) * 9/5 + 32
        swal(`Los  grados ${grados}º Kelvin convertida en Fahrenheit es
         ${resultado.toFixed(2)}`);  
    }

    else if(valor == 3 && valor2== 5){
        let resultado = parseFloat(grados) - 273.15;
        swal(`Los grados ${grados}º Kelvin convertida en Celcius son:
         ${resultado.toFixed(2)}º`);  
    }
    else if(valor == 3 && valor2 == 6){
        swal({title:`Los grados ${grados}º ya esta  en el valor seleccionado`,icon:"warning"});
    }
})