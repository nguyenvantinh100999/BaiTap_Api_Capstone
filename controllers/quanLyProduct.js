export function getDataApiProduct() {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    responeType: "json",
  });
  promise.then(function (response) {
    console.log(response.data.content);
    // renderProduct(JSON.stringify(response.data));
    renderProduct(response.data.content);
  });
  promise.catch(function (err) {
    console.log(err);
  });
  console.log("ok");
}

export function renderProduct(arrPro) {
  //   console.log(arrPro);
  let htmlString = "";
  for (let product of arrPro) {
    htmlString += `
        <div class="col-3 mb-4">
            <div class="card h-100">
              <div class="card-body rounded-top">
                <img class="img-fluid rounded-top" src=${product.image} alt="..." />
                <h4>${product.name}</h4>
              </div>
              <div class="card-footer d-flex justify-content-between align-items-center">
                <div class="slide-btn">
                  <a href="../detail.html?productid=${product.id}" class="shop-btn">Add Cart</a>
                </div>
                <h5>${product.price} $</h5>
              </div>
            </div>
          </div>
        `;
  }
  document.querySelector(".products .container .row").innerHTML = htmlString;
  return htmlString;
}
window.onload = function (e) {
  //Khi nào window load tất cả xong thì sẽ chạy hàm này
  getDataApiProduct();
};
