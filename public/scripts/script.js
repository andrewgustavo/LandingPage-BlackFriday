const form = document.getElementById('form')

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('subscript', convertData);

    let content = document.getElementById('content')

    let carregando = `<p>carregando...</p>`

    let finalizado = `<p>Pronto, você foi cadastrado com sucesso e receberá todas as nossas novidades por e-mail!</p>`
   
    content.innerHTML = carregando

    setTimeout(() =>{
        content.innerHTML = finalizado 
    }, 1500)
})