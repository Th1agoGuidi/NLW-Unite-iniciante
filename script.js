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
      dataCheckIn: null
    },
    {
      nome: "João Silva",
      email: "joao@gmail.com",
      dataInscricao: new Date(2023, 11, 4, 19, 23),
      dataCheckIn: new Date(2023, 11, 5, 20, 20)
    },
    {
      nome: "Paula Tejano",
      email: "paula@gmail.com",
      dataInscricao: new Date(2023, 10, 5, 19, 23),
      dataCheckIn: null
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
      dataCheckIn: null
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
    let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn);

    //Se a data do checkin == vazia 
    if(participante.dataCheckIn == null) {
      //Cria um botao que tem um dado de valor do email do participante
      dataCheckIn = `
        <button data-email="${participante.email}" onclick="fazerCheckIn(event)">
          Confirmar Check-In
        </button>
      `
    }

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
  
  //Dentro do HTML selecionaremos a tag <tbody>
  document
  .querySelector("tbody")
  .innerHTML = output
}

atualizarLista(participantes);
//A lista não irá se atualizar/criar sozinha, então temos que chamar ela
//Adicionar participante ao clicar no botão
const adicionarParticipante = (event) => {
  //Previne de enviar o formulario
  event.preventDefault()

  //Adiciona os dados do formulario na variavel
  const dadosDoFormulario = new FormData(event.target)

  //Cria uma variavel com as infos que o participante digitar, criando uma nova data e checkin vazio
  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  //Verificar se o participante já existe
  const participanteExiste = participantes.find(
    //Se o email ja existir, a variavel irá retornar true
    (p) => p.email == participante.email
  )

  //Se a variavel for true, encerra o cadastro
  if(participanteExiste) {
    alert("Email já cadastrado!")
    return
  }
  //Adiciona a var acima com as novas infos no "armario" com os participantes, e adiciona/mantem
  //os participantes já existentes com o elemento ...participantes
  participantes = [participante, ...participantes]

  //Atualiza a lista, passando os novos participantes para a var dos participantes
  atualizarLista(participantes);

  //Limpar o formulário
  //Seleciona os inputs e deixa vazio os valores dele após adicionar o participante
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

//Fazer checkin clicando no botão
const fazerCheckIn = (event) => {
  //Confirmar o checkin
  const resultado = confirm("Tem certeza que quer fazer o Check-in?")
  //Se a pessoa clicar em não (que retorna false)
  if(resultado == false){
    //Interrompe o funcionamento e ignora as linhas abaixo
    return
  }

  //Encontrar o participante dentro da lista
  const participante = participantes.find((p) => {
    //Encontra o email armazenado na data-set do botao de checkin
    //e verifica se é igual ao email do participante
    return p.email == event.target.dataset.email
  });
  //Atualizar o checkin do participante com a data do momento do clique
  participante.dataCheckIn = new Date();
  //Atualizar a lista de participantes
  atualizarLista(participantes);
}


function toggleMode() {

  const html = document.documentElement

  html.classList.toggle("light");

  //Mudar icones no light mode

  const img1 = document.querySelector(".svg1");
  const img2 = document.querySelector(".svg2");

  if (html.classList.contains("light")) {
    img1.setAttribute('src', './assets/name-icon-light.svg');
    img2.setAttribute('src', './assets/email-icon-light.svg');
  } else {
    img1.setAttribute('src', './assets/name-icon.svg');
    img2.setAttribute('src', './assets/email-icon.svg');
  }
  
}
