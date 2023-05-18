const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const saveToLocalStorage = () => {
	localStorage.setItem("pizza", document;
};

const buscarPizza = () => {
  let number = document.querySelector(".number").value
  const container = document.querySelector(".container")
  container.innerHTML = `No existe un producto con el id ${number}`
  if (number === "") {
    container.innerHTML = `Por favor ingrese un valor`
  }
  pizzas.forEach((prod) => {
    if (prod.id == number) {
      container.style.display = "flex"
      container.innerHTML = `
      <img src="${prod.imagen}">
        <div class="info">
            <div class="name">${prod.nombre}</div>
            <div class="price">$${prod.precio}</div>
        </div>
      `
      saveToLocalStorage()
    }
  })
}

const button = document.querySelector("#button");
button.addEventListener("click", buscarPizza);




