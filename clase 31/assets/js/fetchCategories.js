const url2 = "https://silabuz-api-project.herokuapp.com/products/categories/";
const lista = document.getElementById("product-category-id");
const inputEscondido = document.getElementById("category-id");
const boton = document.getElementById("categories");

let categories = [];

fetch(url2)
  .then((res) => res.json())
  .then((res) => {
    categories = res;
    res.forEach((categoria) => {
      const { name, pk } = categoria;
      const listitem = document.createElement("li");
      listitem.value = pk;
      listitem.className = "list-group-item list-group-item-action";
      listitem.innerText = name;
      listitem.addEventListener("click", () => {
        inputEscondido.value = pk;
        boton.innerText = name;
      });
      lista.appendChild(listitem);
    });
  })
  .catch((error) => console.log(error));
