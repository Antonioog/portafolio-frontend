let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".contenido-banner, h2", { origin: "top" });
ScrollReveal().reveal(
  ".p-sobremi, .fila, .download, .contenido-stack, .galeria, .fila, .enviar",
  {
    origin: "bottom",
  }
);

const $form = document.querySelector("#form");
const $buttonMailTo = document.querySelector("#trucazo");

$form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = new FormData(this);
  $form.reset();
  $buttonMailTo.setAttribute(
    "href",
    `mailto:arkanamos1985@gmail.com?subject=${form.get("nombre")}${form.get(
      "email"
    )}&body=${form.get("mensaje")}`
  );

  $buttonMailTo.click();
}
