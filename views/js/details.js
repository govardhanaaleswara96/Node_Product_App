"use strict";

// get products details
const getDetailsProduct = () => {
  const url = location.search;
  const urlId = new URLSearchParams(url);
  const id = urlId.get("id");
  //console.log(id);
  const product = $.ajax({
    url: `/product/${id}`,
    type: "GET",
    dataType: "json",
    async: false,
    success: (data) => {
      //console.log(data);
    },
    error: (err) => {
      console.log(err);
    },
  }).responseText;
  const arr = JSON.parse(product);
  $("#title").text(arr.title);
  $("#img").attr("src", arr.imgUrl);
  $("#price").text("RS :" + arr.price);
  $("#desc").text(arr.desc);

  //   console.log(arr);
};
getDetailsProduct();
