document.getElementById("formCadastro").addEventListener("submit", function(event) {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const msgErro = document.getElementById("erro");

  if (nome.length < 3) {
    msgErro.textContent = "O nome deve ter pelo menos 3 caracteres.";
    event.preventDefault();
    return;
  }


  
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    msgErro.textContent = "Digite um email válido.";
    event.preventDefault();
    return;
  }



  event.preventDefault(); 
  alert("Cadastro realizado com sucesso!");

  document.getElementById("formCadastro").reset();
});
