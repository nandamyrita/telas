const formsingup = document.getElementById("formsingup");
const email = document.getElementById("email");
const password = document.getElementById("password");


formsingup.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  

  if (emailValue === "") {
      setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
      setErrorFor(email, "Por favor, insira um email válido.");
  } else {
      setSuccessFor(email);
  }

  if (passwordValue === "") {
      setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
      setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
      setSuccessFor(password);
  }

 
  const formControls = formsingup.querySelectorAll('.form-control');
  const formIsValid = Array.from(formControls).every((formControl) => {
      return formControl.className === "form-control success";
  });

  if (formIsValid) {
      console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i.test(email);
}

