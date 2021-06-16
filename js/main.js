const $piedra = document.querySelector("img#piedra");
const $papel = document.querySelector("img#papel");
const $tijera = document.querySelector("img#tijera");
const $tituloprincipal = document.querySelector(".tituloprincipal");
const avisoya = document.querySelector(".avisoya");
const $mensaje = document.querySelector(".aviso");
let eleccionUsuario;
let resultado = document.querySelector(".resultado");
let opcionPcUser = document.querySelector(".opcionpcuser");
let eleccionPC;
let eleccion;
const opcionesAnimacion = ["Piedra", "Papel", "O tijera", "Ya!", ""];

function generadorDeColores() {
  return Math.floor(Math.random() * 256);

}


setInterval(function () {
  let r = generadorDeColores() // si le doy valores a estos entre el (), puedo guiar los colores a una cierta seccion de variedad de colores. 
  let g = generadorDeColores() // puedo hacer que tenga colores mas similares al rojo que azules, dandole valor quiza 20  a azul y verde, y 240 al rojo.
  let b = generadorDeColores()

  $tituloprincipal.style.color = `rgb(${r},${g},${b})`;
  $mensaje.style.color = `rgb(${r},${g},${b})`;

}, 500);


$piedra.addEventListener('click', function movUsuario() {
  animacion();
  if ($piedra.getAttribute("data") == 1) {
    eleccionUsuario = "Piedra";
  }
  juego();
})

$papel.addEventListener('click', function movUsuario() {
  animacion();
  if ($papel.getAttribute("data") == 2) {
    eleccionUsuario = "Papel";
  }
  juego();
})

$tijera.addEventListener('click', async function movUsuario() {
  animacion();
  if ($tijera.getAttribute("data") == 3) {
    eleccionUsuario = "Tijera";
  }
  juego();
})

/* 
function movPC() {
opciones = ["Piedra", "Papel", "Tijera"]
random = Math.floor(Math.random()*3);
eleccionPC= opciones[random];
return eleccionPC;
}
*/

function animacion(callback) {
  let contador = 0;
  const interval = setInterval(() => {
    if (contador === opcionesAnimacion.length) {
      clearInterval(interval);
      callback();
    };
    $mensaje.innerHTML = opcionesAnimacion[contador];
    contador++;
  }, 700);
}

function movPC() {
  let eleccion = Math.ceil(Math.random() * 3);
  if (eleccion == 1) {
    return eleccionPC = "Piedra";
  }
  if (eleccion == 2) {
    return eleccionPC = "Papel";
  }
  if (eleccion == 3) {
    return eleccionPC = "Tijera";
  }

}

async function juego() {
  const usuario = eleccionUsuario;
  const pc = await movPC();

  switch (pc + usuario) {
    case "PiedraTijera":
      await new Promise(r => setTimeout(r, 4000));
      opcionPcUser.innerHTML = `<p>Usted a elegido <strong>${usuario}</strong>, la computadora ha elegido <strong>${pc}</strong></p>`;
      resultado.innerHTML = "<p>Uh, has perdido</p>";
      $tijera.style.border = "5px solid red";

      break;
    case "PapelPiedra":
      await new Promise(r => setTimeout(r, 4000));
      opcionPcUser.innerHTML = `<p>Usted a elegido <strong>${usuario}</strong>, la computadora ha elegido <strong>${pc}</strong></p>`;
      resultado.innerHTML = "<p>Uh, has perdido</p>";
      $piedra.style.border = "5px solid red";

      break;
    case "TijeraPapel":
      await new Promise(r => setTimeout(r, 4000));
      opcionPcUser.innerHTML = `<p>Usted a elegido <strong>${usuario}</strong>, la computadora ha elegido <strong>${pc}</strong></p>`;
      resultado.innerHTML = "<p>Uh, has perdido</p>";
      $papel.style.border = "5px solid red";
      break;
    case "TijeraPiedra":
      await new Promise(r => setTimeout(r, 4000));
      opcionPcUser.innerHTML = `<p>Usted a elegido <strong>${usuario}</strong>, la computadora ha elegido <strong>${pc}</strong></p>`;
      resultado.innerHTML = "<p>Felicidades!, has ganado</p>";
      $piedra.style.border = "5px solid green";
      break;
    case "PiedraPapel":
      await new Promise(r => setTimeout(r, 4000));
      opcionPcUser.innerHTML = `<p>Usted a elegido <strong>${usuario}</strong>, la computadora ha elegido <strong>${pc}</strong></p>`;
      resultado.innerHTML = "<p>Felicidades!, has ganado</p>";
      $papel.style.border = "5px solid green";
      break;
    case "PapelTijera":
      await new Promise(r => setTimeout(r, 4000));
      opcionPcUser.innerHTML = `<p>Usted a elegido <strong>${usuario}</strong>, la computadora ha elegido <strong>${pc}</strong></p>`;
      resultado.innerHTML = "<p>Felicidades!, has ganado</p>";
      $tijera.style.border = "5px solid green";
      break;
    case "PiedraPiedra":
      await new Promise(r => setTimeout(r, 4000));
      opcionPcUser.innerHTML = `<p>Usted a elegido <strong>${usuario}</strong>, la computadora ha elegido <strong>${pc}</strong></p>`;
      resultado.innerHTML = "<p>Muy cerca, has empatado</p>";
      $piedra.style.border = "5px solid blue";
      break;
    case "PapelPapel":
      await new Promise(r => setTimeout(r, 4000));
      opcionPcUser.innerHTML = `<p>Usted a elegido <strong>${usuario}</strong>, la computadora ha elegido <strong>${pc}</strong></p>`
      resultado.innerHTML = "<p>Muy cerca, has empatado</p>";
      $papel.style.border = "5px solid blue";
      break;
    case "TijeraTijera":
      await new Promise(r => setTimeout(r, 4000));
      opcionPcUser.innerHTML = `<p>Usted a elegido <strong>${usuario}</strong>, la computadora ha elegido <strong>${pc}</strong></p>`
      resultado.innerHTML = "<p>Muy cerca, has empatado</p>";
      $tijera.style.border = "5px solid blue";
      break;
  }
  setTimeout(() => {
    opcionPcUser.innerHTML = `<p></p>`
    resultado.innerHTML = "<p>Juega de nuevo !</p>";
    $piedra.style.border = "none";
    $papel.style.border = "none";
    $tijera.style.border = "none";
  }, 2000);
}