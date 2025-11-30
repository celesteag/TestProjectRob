function showData() {
  // Get the list of saved records from LocalStorage.
  let dataList = JSON.parse(localStorage.getItem("dataList")) || [];

  let container = document.getElementById("container-show-data");
  container.innerHTML = ""; // Clear the container before adding the data

  // Loop through each record, and add it to the container with the buttons
  dataList.slice().reverse().forEach((data, index) => {
    let card = document.createElement("div");

    card.classList.add("card");

    // Adding the card's content and buttons
    card.innerHTML = ` 
      <p><strong>Nombre: </strong> ${data.name}</p>
      <p><strong>DNI: </strong> ${data.dni}</p>
      <p><strong>Email: </strong> ${data.email}</p>
      <p><strong>Additional Information: </strong> ${data.additionalInformation}</p> 
      <button onclick="editData(${index})">Editar</button> 
      <button onclick="deleteData(${index})">Eliminar</button>`;

    container.appendChild(card); // Append the card to the container
  });
}

// Call to show data initially
showData();

// Function to delete a record
function deleteData(index) {
  let dataList = JSON.parse(localStorage.getItem("dataList")) || [];
  dataList.splice(index, 1); // Remove the item at the specified index
  localStorage.setItem("dataList", JSON.stringify(dataList)); // Save the updated list
  showData(); // Refresh the displayed data
}

// Function to edit a record
function editData(index) {
  let dataList = JSON.parse(localStorage.getItem("dataList")) || [];
  let dataToEdit = dataList[index]; // Get the data to be edited

  // Using prompt to edit the fields (you can replace with form inputs if needed)
  let updatedName = prompt("Edit Name:", dataToEdit.name);
  let updatedDni = prompt("Edit DNI:", dataToEdit.dni);
  let updatedEmail = prompt("Edit Email:", dataToEdit.email);
  let updatedInfo = prompt("Edit Additional Information:", dataToEdit.additionalInformation);

  // If the user has updated the data, save it
  if (updatedName && updatedDni && updatedEmail && updatedInfo) {
    dataToEdit.name = updatedName;
    dataToEdit.dni = updatedDni;
    dataToEdit.email = updatedEmail;
    dataToEdit.additionalInformation = updatedInfo;

    // Save the updated data back to localStorage
    dataList[index] = dataToEdit;
    localStorage.setItem("dataList", JSON.stringify(dataList));

    showData(); // Refresh the displayed data
  }
}
