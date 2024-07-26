import {
  getDataApiProduct,
  renderProduct,
} from "../controllers/quanLyProduct.js";
// Scroll Header
const header = document.querySelector(".header"); // Get the header element
const productid = document.querySelector(".products"); // Get the carousel section element
window.addEventListener("scroll", function () {
  const scrollPosition = this.document.documentElement.scrollTop; // Get the scroll position
  const productTop = productid.offsetTop; // Get the top position of the carousel section

  if (scrollPosition >= productTop) {
    header.classList.add("sticky"); // Add the sticky class to the header
    console.log(scrollPosition);
  } else {
    header.classList.remove("sticky"); // Remove the sticky class from the header
  }
});
//SLide
const $next = document.querySelector(".next");
const $prev = document.querySelector(".prev");

$next.addEventListener("click", () => {
  const items = document.querySelectorAll(".slide-item");
  document.querySelector(".slides").appendChild(items[0]);
});

$prev.addEventListener("click", () => {
  const items = document.querySelectorAll(".slide-item");
  document.querySelector(".slides").prepend(items[items.length - 1]);
});

//productid
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");
  console.log("param", myParam);
  console.log(myParam);
  let res = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`,
    method: "GET",
    responeType: "json",
  });
  console.log(res);
  res.then(function (response) {
    console.log(response.data.content);
    // renderProductId(response.data.content);
    console.log(response.data.content.image);
    let img = document.querySelector(".row #image");
    img.src = response.data.content.image;
    let product = response.data.content;
    let size = product.size;
    for (let i = 0; i < size.length; i++) {
      console.log(size[i]);
      let a = document.querySelector("#size");
      console.log(a);
      let p = document.createElement("button");
      p.innerHTML = size[i];
      a.appendChild(p);
    }
    console.log(product);
    let arrProduct = document.querySelectorAll(".row .product");
    // console.log(arrProduct);
    for (let tag of arrProduct) {
      tag.innerHTML = product[tag.id];
    }
  });
  res.catch(function (err) {
    console.log(err);
  });
};
getDataApiProduct();
renderProduct();
