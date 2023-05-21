const inputServico = document.getElementById('servico');
const buttonAdicionar = document.getElementById('adicionar');
const listaServico = document.getElementById('lista-servicos');

buttonAdicionar.addEventListener('click', adicionarServico);

function adicionarServico() {
    //Criar um novo item da lista
    const novoServico = document.createElement('li');
    novoServico.innerText = inputServico.value;

    //Adicionar o novo item de lista à lista de tarefas
    listaServico.appendChild(novoServico);

    //Limpar o campo de entrada de texto
    inputFilme.value = '';
}
