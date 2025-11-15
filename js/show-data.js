function showData() {
  //Get the list of saved records from LocalStorage.

  let dataList = JSON.parse(localStorage.getItem("dataList")) || [];

  let container = document.getElementById("container-show-data");
  container.innerHTML = "";

  // copy of the array and add the new record first
  dataList.slice().reverse().forEach(data => {
    let card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = ` 
      <p><strong>Nombre: </strong> ${data.name}</p>
      <p><strong>DNI: </strong> ${data.dni}</p>
      <p><strong>Email: </strong> ${data.email}</p>
      <p><strong>Additional Information: </strong> ${data.additionalInformation}</p> `;

    container.appendChild(card);
  });
}

showData();