function criarJSON() {
    //obtém os dados inseridos dentro dos inputs:

    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("email").value;
    var cidade = document.getElementById("cidade").value;
    var profissao = document.getElementById("profissao").value;
    var hobbies = document.getElementById("hobbies").value;

    //cria um objetos com os dados:

    var dados = {
        "nome": nome,
        "idade": idade,
        "tel": tel,
        "email": email,
        "cidade": cidade,
        "profissao": profissao,
        "hobbies": hobbies
    };

    // conversor do objeto para JSON:

    var jsonDados = JSON.stringify(dados);

    // cria um blob com os dados do json:

    var blob = new Blob([jsonDados], {type: "application/json"});

    // criador do link de download do arquivo json:

    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'dados.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

    // bloquador númerico dos inputs - nome
document.getElementById('nome').addEventListener('input', function(event) {
    let inputValue = event.target.value;
    event.target.value = inputValue.replace(/[0-9]/g, '');
});

    // bloquador de texto dos inputs - tel
    document.getElementById('tel').addEventListener('input', function(event) {
        let inputValue = event.target.value;
        event.target.value = inputValue.replace(/[a-z]/g, '');
    });

   // bloquador númerico dos inputs - email
   document.getElementById('email').addEventListener('input', function(event) {
    let inputValue = event.target.value;
    event.target.value = inputValue.replace(/[0-9]/g, '');
});

   // bloquador númerico dos inputs - cidade
document.getElementById('cidade').addEventListener('input', function(event) {
    let inputValue = event.target.value;
    event.target.value = inputValue.replace(/[0-9]/g, '');
});

   // bloquador númerico dos inputs - profissao
document.getElementById('profissao').addEventListener('input', function(event) {
    let inputValue = event.target.value;
    event.target.value = inputValue.replace(/[0-9]/g, '');
});

   // bloquador númerico dos inputs - hobbies
   document.getElementById('hobbies').addEventListener('input', function(event) {
    let inputValue = event.target.value;
    event.target.value = inputValue.replace(/[0-9]/g, '');
});