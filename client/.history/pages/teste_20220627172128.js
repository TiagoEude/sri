fetch("http://localhost:1337/api/documentos/", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
