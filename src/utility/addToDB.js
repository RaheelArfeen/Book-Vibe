function getStoredBook() {
    const storedBookSTR = localStorage.getItem("readList");
    if (storedBookSTR) {
      const storedBookData = JSON.parse(storedBookSTR);
      return storedBookData;
    } else {
      return [];
    }
  }
  
  function addToStoreDB(id) {
    const storedBookData = getStoredBook();
  
    if (storedBookData.includes(id)) {
      alert('bhai ei id already exist');
    } else {
      storedBookData.push(id);
      const data = JSON.stringify(storedBookData);
      localStorage.setItem("readList", data);
    }
  }
  
  export { addToStoreDB };
  