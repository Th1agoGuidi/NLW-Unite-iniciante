//Array com participantes e suas infos
let participantes = [
    {
      nome: "Diego Fernandes",
      email: "diego@gmail.com",
      dataInscricao: new Date(2024, 2, 1, 19, 23),
      dataCheckIn: new Date(2024, 2, 1, 20, 20)
    },
    {
      nome: "Mayk Brito",
      email: "mayk@gmail.com",
      dataInscricao: new Date(2024, 2, 23, 19, 23),
      dataCheckIn: new Date(2024, 2, 25, 20, 20)
    },
    {
      nome: "Thiago Guidi",
      email: "thiago@gmail.com",
      dataInscricao: new Date(2024, 0, 3, 19, 23),
      dataCheckIn: new Date(2024, 0, 4, 20, 20)
    },
    {
      nome: "João Silva",
      email: "joao@gmail.com",
      dataInscricao: new Date(2023, 11, 4, 19, 23),
      dataCheckIn: new Date(2023, 11, 5, 20, 20)
    },
    {
      nome: "Maria Oliveira",
      email: "maria@gmail.com",
      dataInscricao: new Date(2023, 10, 5, 19, 23),
      dataCheckIn: new Date(2023, 10, 6, 20, 20)
    },
    {
      nome: "Pedro Santos",
      email: "pedro@gmail.com",
      dataInscricao: new Date(2023, 9, 6, 19, 23),
      dataCheckIn: new Date(2023, 9, 7, 20, 20)
    },
    {
      nome: "Carla Lima",
      email: "carla@gmail.com",
      dataInscricao: new Date(2023, 8, 7, 19, 23),
      dataCheckIn: new Date(2023, 8, 8, 20, 20)
    },
    {
      nome: "Lucas Sousa",
      email: "lucas@gmail.com",
      dataInscricao: new Date(2023, 7, 8, 19, 23),
      dataCheckIn: new Date(2023, 7, 9, 20, 20)
    },
    {
      nome: "Paula Costa",
      email: "paula@gmail.com",
      dataInscricao: new Date(2023, 6, 9, 19, 23),
      dataCheckIn: new Date(2023, 6, 10, 20, 20)
    },
    {
      nome: "Gabriel Almeida",
      email: "gabriel@gmail.com",
      dataInscricao: new Date(2023, 5, 10, 19, 23),
      dataCheckIn: new Date(2023, 5, 11, 20, 20)
      //array com os participantes e suas infos
    }
];

//Const que armazena as infos do participante com a sintaxe pro HTML
const criarNovoParticipante = (participante) => {
    //Data da inscrição relativo a hoje
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao);

    //Data do checkin relativo a hoje
    const dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn);

    //Retorna a lista de participantes para a sintaxe do HTML junto com a data que formatamos acima
    return `
        <tr>
            <td>
                <strong>${participante.nome}</strong>
                <br>
                <small>${participante.email}</small>
            </td>
            <td>${dataInscricao}</td>
            <td>${dataCheckIn}</td>
        </tr>
    `
}

//Inserir / Substituir no HTML a const que criamos acima
const atualizarLista = (participantes) => {
    //Criamos uma var vazia pra receber a lista
    let output = "";

    //para cada participante de participantes
    for (let participante of participantes) {
        //Pega o output + seu valor e adiciona um novo participante
        output = output + criarNovoParticipante(participante)
    }

    //Agora iremos adicionar dentro do HTML

    //Dentro do HTML selecionaremos a tag <tbody> E dentro da tag <tbody> adicionaremos a nossa var output contendo a lista dos participantes
    document.querySelector("tbody").innerHTML = output
}

//A lista não irá se atualizar/criar sozinha, então temos que chamar ela
atualizarLista(participantes);