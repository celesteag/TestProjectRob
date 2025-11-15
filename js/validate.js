function listenForValidation() {
  const REGISTER_FORM = document.getElementById("register-form");
  REGISTER_FORM.addEventListener("submit", validateRegisterForm);
}

function validateRegisterForm(e) {
  const NAME = document.getElementById("name").value.trim();
  const DNI = document.getElementById("dni").value.trim();
  const EMAIL = document.getElementById("email").value.trim();
  const ADDITIONALINFORMATION = document.getElementById("additionalInformation").value.trim();

  let valid = true;


  if (!NAME) {
    document.getElementById("form-name").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-name").style.visibility = "hidden";


  if (!DNI) {
    document.getElementById("form-dni").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-dni").style.visibility = "hidden";

  if (!EMAIL) {
    document.getElementById("form-email").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-email").style.visibility = "hidden";

  if (!ADDITIONALINFORMATION) {
    document.getElementById("form-additionalInformation").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-additionalInformation").style.visibility = "hidden";


  if (!valid) {
    e.preventDefault();
  } else saveData(NAME, EMAIL, DNI, ADDITIONALINFORMATION);
}

function saveData(name, email, dni, additionalInformation) {
  let newData = { name, email, dni, additionalInformation };

  let dataList = JSON.parse(localStorage.getItem("dataList")) || [];

  dataList.push(newData);

  //Updated data (array)
  localStorage.setItem("dataList", JSON.stringify(dataList));
}


listenForValidation();
