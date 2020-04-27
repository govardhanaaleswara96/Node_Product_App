"use strict";
const url = location.search;
const urlParams = new URLSearchParams(url);
// get products
const getProduct = () => {
  const id = urlParams.get("id");
  console.log(id);
  const product = $.ajax({
    url: `/product/${id}`,
    type: "GET",
    dataType: "json",
    async: false,
    success: (data) => {
      //  console.log(data);
    },
    error: (err) => {
      console.log(err);
    },
  }).responseText;
  const editProduct = JSON.parse(product);
  //   console.log(editProduct);
  //   console.log(editProduct.title);
  const editForm = document.forms["editForm"];
  editForm.elements["title"].value = editProduct.title;
  editForm.elements["imgUrl"].value = editProduct.imgUrl;
  editForm.elements["price"].value = editProduct.price;
  editForm.elements["desc"].value = editProduct.desc;
};
getProduct();

const editForm = $("#editForm");
const editProduct = (e) => {
  const id = urlParams.get("id");
  console.log(id);
  e.preventDefault();
  const product = $.ajax({
    url: `/product/${id}`,
    type: "PUT",
    data: editForm.serialize(),
    async: false,
    success: (data) => {
      console.log(data);
    },
    error: (err) => {
      console.log(err);
    },
  });
  window.location = "admin.html";
};
editForm.on("submit", editProduct);
