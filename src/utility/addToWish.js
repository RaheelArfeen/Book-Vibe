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
      alert('bhai ei id already exist');
    } else {
        wishBookData.push(id);
      const data = JSON.stringify(wishBookData);
      localStorage.setItem("wishlist", data);
    }
  }
  
  export { addToWishDB, getWishBook };
  