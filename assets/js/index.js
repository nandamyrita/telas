document.querySelector('.text-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Sua mensagem foi enviada com sucesso!');
  });

  function scrollToSection (id) {
    document.getElementById(id).scrollIntoView({ behavior:'smooth'});
  }

  function navigateTo(page){
    window.location.href = page;
  }