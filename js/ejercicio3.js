const total = document.getElementById('total');
total.addEventListener('click', function(){

    const lado1 = document.getElementById('lado1').value;
    const lado2 = document.getElementById('lado2').value;
    const lado3 = document.getElementById('lado3').value;
    parseInt(lado1, lado2, lado3);
   
    if(lado1 == lado2 && lado1 == lado3 && lado2 == lado3){       
        swal({title:`El triangulo es equilatero`,icon:"info"});
    }

    else if(lado1 == lado2 || lado1 == lado3 ||lado2 == lado3){       
        swal({title:`El triangulo es isosceles`,icon:"info"});
    }

    else if(lado1 != lado2 && lado1 != lado3 ||lado2 != lado3){       
        swal({title:`El triangulo es escaleno`,icon:"info"});
    }
});