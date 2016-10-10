window.addEventListener("load", cargarPagina);

	var boxSelector = document.getElementById("boxSelector");
	var selector = document.getElementById("menu");
	var containerOpcion = document.createElement("div");
	var containerPublicacion = document.createElement("div");

	var container = document.createElement("div");
	var input = document.createElement("input");
	var textarea = document.createElement("textarea");
	var btnCerrar = document.createElement("button");
	var btnPublicar = document.createElement("button");

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

	function Post(input, horaPublicacion){
	this.input = input;
	this.horaPublicacion = horaPublicacion;
	this.cerrar = function(){

	}
		
	}
 
	function texto(){

		container.setAttribute("id", "container")
		input.setAttribute("placeholder", "Título");
		textarea.setAttribute("placeholder", "Ingrese texto");
		
		btnCerrar.textContent = "Cerrar";
		btnPublicar.textContent = "Publicar"

		input.classList.add("input-texto");
		textarea.classList.add("textarea-texto");
		btnCerrar.classList.add("btn-cerrar");
		btnPublicar.classList.add("btn-publicar");

		boxSelector.insertBefore(containerOpcion, boxSelector.children[1]);
		containerOpcion.appendChild(container);
		container.appendChild(input);
		container.appendChild(textarea);
		container.appendChild(btnCerrar);
		container.appendChild(btnPublicar);

		btnCerrar.addEventListener("click", cerrar);
		btnPublicar.addEventListener("click", publicar);
	}

	function cita(){

		container.setAttribute("id", "container");
		textarea.setAttribute("placeholder", "Ingrese una cita");
		input.setAttribute("placeholder", "Autor");

		btnCerrar.textContent = "Cerrar";
		btnPublicar.textContent = "Publicar";

		textarea.classList.add("textarea-cita");
		input.classList.add("input-cita");
		btnCerrar.classList.add("btn-cerrar");
		btnPublicar.classList.add("btn-publicar");

		boxSelector.insertBefore(containerOpcion, boxSelector.children[1]);
		containerOpcion.appendChild(container);
		container.appendChild(textarea);
		container.appendChild(input);
		container.appendChild(btnCerrar);
		container.appendChild(btnPublicar);

		btnCerrar.addEventListener("click", cerrar);
		btnPublicar.addEventListener("click", publicar);
	}

	function enlace(){

		container.setAttribute("id", "container");
		input.setAttribute("placeholder", "Ingrese un enlace");

		btnCerrar.textContent = "Cerrar";
		btnPublicar.textContent = "Publicar";

		input.classList.add("textarea-enlace");
		btnCerrar.classList.add("btn-cerrar");
		btnPublicar.classList.add("btn-publicar");

		boxSelector.insertBefore(containerOpcion, boxSelector.children[1]);
		containerOpcion.appendChild(container);
		container.appendChild(input);
		container.appendChild(btnCerrar);
		container.appendChild(btnPublicar);

		btnCerrar.addEventListener("click", cerrar);
		btnPublicar.addEventListener("click", publicar);
	}

	function frase(){

		container.setAttribute("id", "container");
		textarea.setAttribute("placeholder", "Ingrese una frase");
		input.setAttribute("type", "color");

		btnCerrar.textContent = "Cerrar";
		btnPublicar.textContent = "Publicar";

		textarea.classList.add("textarea-frase");
		btnCerrar.classList.add("btn-cerrar");
		btnPublicar.classList.add("btn-publicar");

		boxSelector.insertBefore(containerOpcion, boxSelector.children[1]);
		containerOpcion.appendChild(container);
		container.appendChild(textarea);
		container.appendChild(input);
		container.appendChild(btnCerrar);
		container.appendChild(btnPublicar);

		btnCerrar.addEventListener("click", cerrar);
		btnPublicar.addEventListener("click", publicar);
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

		btnEliminar.addEventListener("click", eliminar);

		titulo = "";
		texto = "";
	}
	
	function fechaPubli(){
		var fecha = new Date();
		var hora = fecha.getHours();
		var minuto = fecha.getMinutes();
		var segundo = fecha.getSeconds();
		return hora + ":" + minuto + ":" + segundo;
	}
	
	function cerrar(){
		this.parentElement.classList.add("ocultar");
	}

	function eliminar(){
		this.parentElement.remove();
	}
