window.addEventListener("load", function(){
	var boxSelector = document.getElementById("boxSelector");
	var selector = document.getElementById("select");
	selector.addEventListener("change", function(){
		var selectorValor = selector.value;
		switch(selectorValor){
			case "texto":
				texto();
				break;
			case "cita":
				cita();
				break;
			case "enlace":
				enlace();
				break;
			case "frase":
				frase();
				break;
		}
	});
	
	function texto(){
		var contenedorTexto = document.createElement("div");
		var inputTexto = document.createElement("input");
		var textareaTexto = document.createElement("textarea");
		var btnCerrar = document.createElement("button");
		var btnPublicar = document.createElement("button");

		contenedorTexto.setAttribute("id", "contenedor");
		inputTexto.setAttribute("placeholder", "Título");
		textareaTexto.setAttribute("placeholder", "Ingrese texto");
		
		btnCerrar.textContent = "Cerrar";
		btnPublicar.textContent = "Publicar"

		inputTexto.classList.add("input-texto");
		textareaTexto.classList.add("textarea-texto");
		btnCerrar.classList.add("btn-cerrar");
		btnPublicar.classList.add("btn-publicar");

		contenedorTexto.appendChild(inputTexto);
		contenedorTexto.appendChild(textareaTexto);
		contenedorTexto.appendChild(btnCerrar);
		contenedorTexto.appendChild(btnPublicar);

		boxSelector.appendChild(contenedorTexto);
	}

	function cita(){
		var contenedorCita = document.createElement("div");
		var textareaCita = document.createElement("textarea");
		var inputCita = document.createElement("input");
		var btnCerrar = document.createElement("button");
		var btnPublicar = document.createElement("button");

		contenedorCita.setAttribute("id", "contenedor-cita");
		textareaCita.setAttribute("placeholder", "Ingrese una cita");
		inputCita.setAttribute("placeholder", "Autor");

		btnCerrar.textContent = "Cerrar";
		btnPublicar.textContent = "Publicar";

		textareaCita.classList.add("textarea-cita");
		inputCita.classList.add("input-cita");
		btnCerrar.classList.add("btn-cerrar");
		btnPublicar.classList.add("btn-publicar");

		contenedorCita.appendChild(textareaCita);
		contenedorCita.appendChild(inputCita);
		contenedorCita.appendChild(btnCerrar);
		contenedorCita.appendChild(btnPublicar);

		boxSelector.appendChild(contenedorCita);
	}

	function enlace(){
		var contenedorEnlace = document.createElement("div");
		var inputEnlace = document.createElement("input");
		var btnCerrar = document.createElement("button");
		var btnPublicar = document.createElement("button");

		contenedorEnlace.setAttribute("id", "contenedor-enlace");
		inputEnlace.setAttribute("placeholder", "Ingrese un enlace");

		btnCerrar.textContent = "Cerrar";
		btnPublicar.textContent = "Publicar";

		textareaEnlace.classList.add("textarea-enlace");
		btnCerrar.classList.add("btn-cerrar");
		btnPublicar.classList.add("btn-publicar");

		contenedorEnlace.appendChild(textareaEnlace);
		contenedorEnlace.appendChild(btnCerrar);
		contenedorEnlace.appendChild(btnPublicar);

		boxSelector.appendChild(contenedorEnlace);
	}

	function frase(){
		var contenedorFrase = document.createElement("div");
		var textareaFrase = document.createElement("textarea");
		var inputFrase = document.createElement("input");
		var btnCerrar = document.createElement("button");
		var btnPublicar = document.createElement("button");

		contenedorFrase.setAttribute("id", "contenedor-enlace");
		textareaFrase.setAttribute("placeholder", "Ingrese una frase");
		inputFrase.setAttribute("type", "color");

		btnCerrar.textContent = "Cerrar";
		btnPublicar.textContent = "Publicar";

		textareaFrase.classList.add("textarea-frase");
		btnCerrar.classList.add("btn-cerrar");
		btnPublicar.classList.add("btn-publicar");

		contenedorFrase.appendChild(textareaFrase);
		contenedorFrase.appendChild(inputFrase);
		contenedorFrase.appendChild(btnCerrar);
		contenedorFrase.appendChild(btnPublicar);

		boxSelector.appendChild(contenedorFrase);
	}
});

	