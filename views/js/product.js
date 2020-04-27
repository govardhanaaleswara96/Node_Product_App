"use strict";

// get products
const productCard = (arr) => {
  const template = arr
    .map(
      (data) =>
        `<div class="row mt-3">
        <div class="col-md-3"></div>
        <div class="col-md-6">
        <div class="card">
        <img
        class="card-img-top"
        src="${data.imgUrl}"
        alt="${data.title}"
    />
    <div class="card-body">
        <h4 class="card-title"><a>${data.title}</a></h4>
        <!-- Text -->
        <p class="card-text">
        ${data.desc}
        </p>
        <!-- Button -->
        <a href="editProduct.html?id=${data._id}" class="btn btn-outline-default">Edit</a>
        <a href="#" class="delete btn btn-outline-default" id="${data._id}"  >Delete</a>
    </div>
    </div>
    </div>
    <div class="col-md-3"></div>
    </div>`
    )
    .join("");
  return template;
};
const displayProducts = () => {
  const getProduct = $.ajax({
    url: "/product",
    type: "GET",
    dataType: "json",
    async: false,
    success: (data) => {
      //console.log(data);
    },
    error: (data) => {
      console.log(data);
    },
  }).responseText;

  const jsonArr = JSON.parse(getProduct);
  const arrLen = jsonArr.length;
  if (arrLen > 0) {
    const card = productCard(jsonArr);
    $("#cardRow").html(card);
  } else {
    const noProduct = `<h1 class="text-center">No Products Found</h1>`;
    $("#cardRow").html(noProduct);
  }
};
displayProducts();

//create Products
const createForm = $("#productForm");
const addProducts = (e) => {
  //   console.log(createForm.serialize());
  e.preventDefault();
  $.ajax({
    url: "/product",
    type: "POST",
    data: createForm.serialize(),
    async: false,
    success: (data) => {
      // console.log(data);
    },
    error: (data) => {
      console.log(data);
    },
  });
  window.location = "admin.html";
};
createForm.on("submit", addProducts);

//delete Product
const deleteButton = $(".delete");
const deleteProduct = () => {
  const id = $(".delete").attr("id");
  $.ajax({
    url: `/product/${id}`,
    type: "delete",
    dataType: "json",
    success: (data) => {
      console.log(data);
    },
    error: (err) => {
      console.log(err);
    },
  });
  window.location = "admin.html";
};
deleteButton.on("click", deleteProduct);

// products
// get products
const indexCard = (arr) => {
  const template = arr
    .map(
      (data) =>
        `<div class="row mt-3">
        <div class="col-md-3"></div>
        <div class="col-md-6">
        <div class="card">
        <img
        class="card-img-top"
        src="${data.imgUrl}"
        alt="${data.title}"
    />
    <div class="card-body">
        <h4 class="card-title"><a>${data.title}</a></h4>
        <!-- Text -->
        <h1 class=" font-weight-bold text-center card-text">
        ${"Rs :" + data.price}
        </h1>
        <p class="card-text">
        ${data.desc}
        </p>
        <!-- Button -->
        <a href="details.html?id=${
          data._id
        }" class="details btn btn-outline-default">Details</a>
        <a href="cart.html?id=${
          data._id
        }" class="delete btn btn-outline-default" id=""  >Add To Cart</a>
    </div>
    </div>
    </div>
    <div class="col-md-3"></div>
    </div>`
    )
    .join("");
  return template;
};
const displayIndexProducts = () => {
  const getProduct = $.ajax({
    url: "/product",
    type: "GET",
    dataType: "json",
    async: false,
    success: (data) => {
      //console.log(data);
    },
    error: (data) => {
      console.log(data);
    },
  }).responseText;

  const jsonArr = JSON.parse(getProduct);
  const arrLen = jsonArr.length;
  if (arrLen > 0) {
    const card = indexCard(jsonArr);
    $("#productRow").html(card);
  } else {
    const noProduct = `<h1 class="text-center">No Products Found</h1>`;
    $("#productRow").html(noProduct);
  }
};
displayIndexProducts();

// shop Products
const displayShopProducts = () => {
  const getProduct = $.ajax({
    url: "/product",
    type: "GET",
    dataType: "json",
    async: false,
    success: (data) => {
      //console.log(data);
    },
    error: (data) => {
      console.log(data);
    },
  }).responseText;

  const jsonArr = JSON.parse(getProduct);
  const arrLen = jsonArr.length;
  if (arrLen > 0) {
    const card = indexCard(jsonArr);
    $("#shopRow").html(card);
  } else {
    const noProduct = `<h1 class="text-center">No Products Found</h1>`;
    $("#shopRow").html(noProduct);
  }
};
displayShopProducts();
