

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = 
{
	numdoc: /^\d{8,10}$/, // 8 a 10 numeros.
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	fecha: /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/, //Formato de fecha (dd/MM/YYYY)
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = 
{
	numdoc: false,
	nombre: false,
	fecha: false,
	password: false,
	correo: false
}

const validarFormulario = (e) => 
{
	switch (e.target.name) 

	{
		
		case "numdoc":
			validarCampo(expresiones.numdoc, e.target, 'numdoc');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.nombre, e.target, 'apellido');
		break;
		case "fecha":
			
		validarCampo(expresiones.fecha, e.target,'fecha')
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
	}
}

const validarCampo = (expresion, input, campo) => 
{
	if(expresion.test(input.value))
	{
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarFecha=() =>{
	if(expresiones.fecha.test(e.target.value)) 
	{
		document.getElementById('grupo__fecha').classList.add('formulario__grupo-incorrecto');
		document.getElementById('grupo__fecha').classList.remove('formulario__grupo-correcto');
		document.querySelector('#grupo__fecha .formulario__input-error').classList.add('formulario__input-error-activo');
		campos['fecha'] = false;
	
	}
	else
	{
		document.getElementById('grupo__fecha').classList.remove('formulario__grupo-incorrecto');
		document.getElementById('grupo__fecha').classList.add('formulario__grupo-correcto');
		document.querySelector('#grupo__fecha .formulario__input-error').classList.remove('formulario__input-error-activo');
		campos['fecha'] = true;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => 
{
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => 
{
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.numdoc  && campos.fecha && campos.nombre && campos.password && campos.correo  && terminos.checked )
	{
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => 
		{
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => 
		{
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else 
	{
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});