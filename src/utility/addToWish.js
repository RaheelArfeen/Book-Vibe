function getWishBook() {
    const wishBookSTR = localStorage.getItem("wishlist");
    if (wishBookSTR) {
      const wishBookData = JSON.parse(wishBookSTR);
      return wishBookData;
    } else {
      return [];
    }
  }
  
  function addToWishDB(id) {
    const wishBookData = getWishBook();
  
    if (wishBookData.includes(id)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have this item already in you wish list"
      });
    } else {
      wishBookData.push(id);
      const data = JSON.stringify(wishBookData);
      localStorage.setItem("wishlist", data);
    }
  }
  
  export { addToWishDB, getWishBook };
  