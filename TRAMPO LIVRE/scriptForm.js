const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();

});

/*--------------Pega os valores dos campos Ex" username/email e etc...-------*/
function checkInputs () {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    /*---------------Verifica o campo nome de usuário----------------------------*/
    if (usernameValue === "") {
       setErrorFor(username, "O nome de usuário é obrigatório."); 
    }
    else {
        setSuccessFor(username);
    }

    /*--------------Verifica o campo Email------------------------------*/
    if (emailValue === "") {
        setErrorFor(email, "O email é obrigatório.");
    }
    else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido.");
    }
    else {
        setSuccessFor(email);
    }

    /*--------------Verifica o campo senha------------------------------*/
    if (passwordValue === "") {
        setErrorFor(password, "A senha é obrigatória.");
    }
    else if (passwordValue.length < 7) {
        setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
    }
    else {
        setSuccessFor(password);
    }

    /*--------------Verifica o campo confirmação de senha----------------*/
    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
    }
    else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, "As senhas não conferem.");
    }
    else {
        setSuccessFor(passwordConfirmation);
    }

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";
    });

    if (formIsValid) {
        console.log("O formulário está 100% validado");
    }
}

/*----Função setErrorFor------*/
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    // Adiciona a menssagem de erro
    small.innerText = message;

    //Adiciona a classe erro
    formControl.className = "form-control error";
}

/*-----Função setSuccessFor-------------*/
function setSuccessFor(input) {
    const formControl = input.parentElement;

    //Adiciona a classe de sucesso
    formControl.className = "form-control success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }




