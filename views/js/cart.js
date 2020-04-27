const url = location.search;
const urlParams = new URLSearchParams(url);
const id = urlParams.get("id");
console.log(id);
// if (id) {
//   addToCart();
// }
const addToCart = () => {
  const product = $.ajax({
    url: `/product/cart/${id}`,
    type: "POST",
    dataType: "json",
    async: false,
    success: (data) => {
      //  console.log(data);
    },
    error: (err) => {
      console.log(err);
    },
  }).responseText;
};
if (id !== null) {
  addToCart();
}
