const comentarios = [
	{
		autor: {
			nombre: "Horacio",
		},
		comentario: {
			titulo: "Muy buen juego",
			texto: "Una lastima la mala suerte que tengo, quiza otro dia me vaya mejor",
			tiempo: "Hace aproximadamente 2 hora"
		},

	},
	{
		autor: {
			nombre: "Valeria",
		},
		comentario: {
			titulo: "Me encanto el juego",
			texto: "Me diverti mucho, al contrario de horacio, yo tuve mucha suerte gane unos 8 de las 10 veces que jugue.. increible!",
			tiempo: "Hace aproximadamente 1 hora"
		},

	},
	{
		autor: {
			nombre: "Ignacio",
		},
		comentario: {
			titulo: "El juego esta bien",
			texto: "No soy muy fan de este tipo de juego pero para probar la suerte que voy a poder a llegar a tener en el dia, me sirve jaja",
			tiempo: "Hace aproximadamente 1 hora"
		},

	},
	{
		autor: {
			nombre: "Lautaro",
		},
		comentario: {
			titulo: "Para jugar unos 10 minutos te divierte",
			texto: "Tuve un poco de mala suerte, quiza sea el dia, lo que dijo Ignacio me asusto, espero no tener tan mal dia en el trabajo",
			tiempo: "Hace aproximadamente 1 hora"
		},

	},
	{
		autor: {
			nombre: "Johanna",
		},
		comentario: {
			titulo: "Me gusto el juego",
			texto: "Estudio programacion y me parecio que esta bien hecho, las validaciones funcionaron todas, me diverti :)",
			tiempo: "Hace 48 minutos"
		},

	},
	{
		autor: {
			nombre: "Juan Pablo",
		},
		comentario: {
			titulo: "Que jueguito te armaste",
			texto: "Muy copado, yo tampoco tuve ningun problema con el juego, funciona de maravilla, buen trabajo!",
			tiempo: "Hace 31 minutos"
		},

	},
	{
		autor: {
			nombre: "Noe",
		},
		comentario: {
			titulo: "A mi no me gusto",
			texto: "En termino de funcionamiento todo bien, pero este tipo de juego nunca me gusto, tengo mucha mala suerte :(",
			tiempo: "Hace 17 minutos"
		},

	},
	{
		autor: {
			nombre: "Dolores",
		},
		comentario: {
			titulo: "Me diverti mucho con el juego",
			texto: "Me parecio buen detalle el que explique las reglas del juego, yo si fuera profesor de programacion te pondria un 10(diez)",
			tiempo: "Hace 17 minutos"
		},

	},

	{
		autor: {
			nombre: "Juan Maria",
		},
		comentario: {
			titulo: "Coincido con lo que escribio dolores arriba",
			texto: "El juego y la pagina parece estar muy bien hecha, me encanto el trabajo que se realizo en esta página!",
			tiempo: "Hace 7 minutos"
		},

	},



];

for (let i = 0; i < comentarios.length; i++) {

	const contendorComentarios = document.querySelector(".contendor-comentarios");

	let comentario = document.createElement("div"); // Creo un nuevo nodo HTML
	comentario.classList.add("comentario"); // Le agrego una clase

	let infoComentario = document.createElement("div"); // Creo un nuevo nodo HTML
	infoComentario.classList.add("info-comentario"); // Le agrego una clase

	comentario.appendChild(infoComentario); // Agrego el div ".info-comentario", dentro del div ".comentario"

	contendorComentarios.appendChild(comentario); // Agrego el div ".comentario" al HTML.

	let infoAutor = document.createElement("div");
	infoAutor.classList.add("info-autor");
	infoComentario.appendChild(infoAutor);

	let tituloComentario = document.createElement("div");
	tituloComentario.classList.add("titulo-comentario");
	infoComentario.appendChild(tituloComentario);


	let parrafo = document.createElement("p");
	parrafo.classList.add("texto-comentario");
	infoComentario.appendChild(parrafo);

	let spanAutor = document.createElement("span");
	spanAutor.classList.add("nombre-autor");
	infoAutor.appendChild(spanAutor);

	let spanTiempo = document.createElement("span");
	spanTiempo.classList.add("tiempo");
	infoAutor.appendChild(spanTiempo);

	spanAutor.textContent = comentarios[i].autor.nombre;

	tituloComentario.textContent = comentarios[i].comentario.titulo;

	parrafo.textContent = comentarios[i].comentario.texto;

	spanTiempo.textContent = " " + comentarios[i].comentario.tiempo;
}