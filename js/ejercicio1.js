
    let longitud = document.getElementById('longitud');
    longitud.addEventListener('click', function(){
            const palabra = document.getElementById('palabra').value;
            swal({ title:`La longitud de la palabra ${palabra} es: ` + palabra.length,
                    icon: "success"
              });
    });
    let may = document.getElementById('mayus');
    may.addEventListener('click', function(){
                const palabra = document.getElementById('palabra').value;
                swal({ title:`La palabra "${palabra}" en mayúsculas es ` + palabra.toUpperCase(),icon: "success"
                   });
    });
        let min= document.getElementById('minus');
        min.addEventListener('click', function(){
                const palabra = document.getElementById('palabra').value;
                swal({title:`La palabra "${palabra}" en minúscula es ` + palabra.toLowerCase(), icon: "success"});
    });
        let pCaracter = document.getElementById('primero');
        pCaracter.addEventListener('click',function(){
                const palabra = document.getElementById('palabra').value;
                swal({title:`El primer caracter de la palabra "${palabra}" es ` + palabra.charAt(), icon:"success"});
            });