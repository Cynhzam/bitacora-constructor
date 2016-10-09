window.addEventListener("load", cargarPagina);

	var boxSelector = document.getElementById("boxSelector");
	var selector = document.getElementById("menu");
	var container = document.createElement("div");
	var containerPublicacion = document.createElement("div");

	function cargarPagina(){
		selector.addEventListener("change", seleccionarOpcion);
	}

	function seleccionarOpcion(){
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
	}

	function texto(){
		var inputTexto = document.createElement("input");
		var textareaTexto = document.createElement("textarea");
		var btnCerrar = document.createElement("button");
		var btnPublicar = document.createElement("button");

		inputTexto.setAttribute("placeholder", "Título");
		textareaTexto.setAttribute("placeholder", "Ingrese texto");
		
		btnCerrar.textContent = "Cerrar";
		btnPublicar.textContent = "Publicar"

		inputTexto.classList.add("input-texto");
		textareaTexto.classList.add("textarea-texto");
		btnCerrar.classList.add("btn-cerrar");
		btnPublicar.classList.add("btn-publicar");

		container.appendChild(inputTexto);
		container.appendChild(textareaTexto);
		container.appendChild(btnCerrar);
		container.appendChild(btnPublicar);

		boxSelector.appendChild(container);

		btnCerrar.addEventListener("click", cerrar);
		btnPublicar.addEventListener("click", publicar);
	}

	function cita(){
		var textareaCita = document.createElement("textarea");
		var inputCita = document.createElement("input");
		var btnCerrar = document.createElement("button");
		var btnPublicar = document.createElement("button");

		textareaCita.setAttribute("placeholder", "Ingrese una cita");
		inputCita.setAttribute("placeholder", "Autor");

		btnCerrar.textContent = "Cerrar";
		btnPublicar.textContent = "Publicar";

		textareaCita.classList.add("textarea-cita");
		inputCita.classList.add("input-cita");
		btnCerrar.classList.add("btn-cerrar");
		btnPublicar.classList.add("btn-publicar");

		container.appendChild(textareaCita);
		container.appendChild(inputCita);
		container.appendChild(btnCerrar);
		container.appendChild(btnPublicar);

		boxSelector.appendChild(container);

		btnCerrar.addEventListener("click", cerrar);
		btnPublicar.addEventListener("click", publicar);
	}

	function enlace(){
		var inputEnlace = document.createElement("input");
		var btnCerrar = document.createElement("button");
		var btnPublicar = document.createElement("button");

		inputEnlace.setAttribute("placeholder", "Ingrese un enlace");

		btnCerrar.textContent = "Cerrar";
		btnPublicar.textContent = "Publicar";

		inputEnlace.classList.add("textarea-enlace");
		btnCerrar.classList.add("btn-cerrar");
		btnPublicar.classList.add("btn-publicar");

		container.appendChild(inputEnlace);
		container.appendChild(btnCerrar);
		container.appendChild(btnPublicar);

		boxSelector.appendChild(container);

		btnCerrar.addEventListener("click", cerrar);
		btnPublicar.addEventListener("click", publicar);
	}

	function frase(){
		var textareaFrase = document.createElement("textarea");
		var inputFrase = document.createElement("input");
		var btnCerrar = document.createElement("button");
		var btnPublicar = document.createElement("button");

		textareaFrase.setAttribute("placeholder", "Ingrese una frase");
		inputFrase.setAttribute("type", "color");

		btnCerrar.textContent = "Cerrar";
		btnPublicar.textContent = "Publicar";

		textareaFrase.classList.add("textarea-frase");
		btnCerrar.classList.add("btn-cerrar");
		btnPublicar.classList.add("btn-publicar");

		container.appendChild(textareaFrase);
		container.appendChild(inputFrase);
		container.appendChild(btnCerrar);
		container.appendChild(btnPublicar);

		boxSelector.appendChild(container);
		btnCerrar.addEventListener("click", cerrar);
		btnPublicar.addEventListener("click", publicar);
	}

	function cerrar(){
		this.parentElement.remove();
	}

	function publicar(){
		var h2 = document.createElement("h2");
		var p = document.createElement("p");
		var boxPubli = document.createElement("div");
		var divHora = document.createElement("div");
		var horaPubli = fechaPubli();
		var btnEliminar = document.createElement("button");

		var titulo = this.parentElement.children[0].value;
		var texto = this.parentElement.children[1].value;

		h2.innerText = titulo;
		p.innerText = texto;
		divHora.innerText = horaPubli;
		btnEliminar.textContent = "Eliminar";

		boxSelector.appendChild(containerPublicacion);
		containerPublicacion.appendChild(boxPubli);
		boxPubli.appendChild(h2);
		boxPubli.appendChild(p);
		boxPubli.appendChild(divHora);
		boxPubli.appendChild(btnEliminar);

		btnEliminar.addEventListener("click", cerrar);
	}

	function fechaPubli(){
		var fecha = new Date();
		var hora = fecha.getHours();
		var minuto = fecha.getMinutes();
		var segundo = fecha.getSeconds();
		return hora + ":" + minuto + ":" + segundo;
	}