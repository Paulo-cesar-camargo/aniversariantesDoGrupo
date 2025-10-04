const aniversariantes = [
  { nome: "PAULO CESAR CAMARGO", cargo: "Regente", msg: "Feliz aniversario varão valoroso", data: "15/08/82", foto: "img/paulocc.png" },
  { nome: "Nicinha", cargo: "Regente", msg: "Feliz aniversario irmã Nicinha ", data: "22/08", foto: "img/nicinha.png" },
  { nome: "Waldir de Arruda", cargo: "Diacono ", msg: "Feliz aniversario varão valoroso", data: "10/02", foto: "img/waldir1.jpg" },
  { nome: "Gilmar da Silva ", cargo: "Pastor ", msg: "Feliz aniversario varão valoroso", data: "05/11", foto: "img/gilmar.png" },
  { nome: "Alexsandro Henrique Soares ", cargo: "Integrante dos Gideões", msg: "Feliz aniversario varão valoroso", data: "09/04", foto: "img/alexandre.jpg" },
  { nome: " José Raimundo de santo", cargo: "Integrante dos Gideões", msg: "Feliz aniversario varão valoroso", data: "08/67", foto: "img/base.jpeg" },
  { nome: "André Almeida Ribeiro ", cargo: "Integrante dos Gideões", msg: "Feliz aniversario varão valoroso", data: "21/09/84", foto: "img/andre.png" },
  { nome: "Ueverson André de Oliveira ", cargo: "Cooperador", msg: "Feliz aniversario varão valoroso", data: "10/10/1981", foto: "img/ueverson.png" },
  { nome: "Paulo Castesiano de Oliveira ", cargo: "Diacono e lider dos varoes", msg: "Feliz aniversario varão valoroso", data: "15/08/1984", foto: "img/pauloc.png" },
  { nome: "Adailson da Silva Castro ", cargo: "Presbitero", msg: "Feliz aniversario varão valoroso", data: "04/04/82", foto: "img/base.jpeg" },
  { nome: "Wasley Santos Pereira ", cargo: "Integrante dos Gideões", msg: "Feliz aniversario varão valoroso", data: "16/09/1984", foto: "img/wasley.png" },
  { nome: "Eliezer Francisco de Paula ", cargo: "Cooperador", msg: "Feliz aniversario varão valoroso", data: " 04/09/1977", foto: "img/base.jpeg" },
  { nome: "Genivaldo ", cargo: "Integrante dos Gideões", msg: "Feliz aniversario varão valoroso", data: "03/05/1983", foto: "img/genivaldo.png" },
  { nome: "Manoel Alecrim ", cargo: "Integrante dos Gideões", msg: "Feliz aniversario varão valoroso", data: "12/10/66", foto: "img/base.jpeg" },
  { nome: "Natanael ribeiro arruda ", cargo: "Presbitero", msg: "Feliz aniversario varão valoroso", data: "07/01/1984", foto: "img/nat1.jpg" },
  { nome: "Marcos Ribeiro Arruda ", cargo: "Cooperador/Sonoplasta", msg: "Feliz aniversario varão valoroso", data: " 27/08/1982", foto: "img/marcos.png" },
  { nome: "Cloves Miguel Nonácio da Silva ", cargo: "Diacono ", msg: "Feliz aniversario varão valoroso", data: " 27/11/1982", foto: "img/cloves.png" },
  { nome: "João do Nascimento ", cargo: "Diacono e lider dos varoes", msg: "Feliz aniversario varão valoroso", data: "24/11/1975", foto: "img/joaoLider.png" },
  { nome: "Thaide Cassiano ", cargo: "Sonoplasta", msg: "Feliz aniversario varão valoroso", data: " 09/03/1995", foto: "img/base.jpeg" },
  { nome: "Edilson Souza Cunha", cargo: "Pastor", msg: "Feliz aniversario meu pastor ", data: "28/12", foto: "img/pastorEdilson.png" },
  { nome: "Cristiano", cargo: "Pastor ", msg: "Feliz aniversario pastor cristiano ", data: "15/02", foto: "img/cristiano.png" },
  
];

const container = document.getElementById("container");
const mesFiltro = document.getElementById("mesFiltro");
const busca = document.getElementById("busca");

function renderizar(lista, termoBusca = "") {
  container.innerHTML = "";
  lista.forEach(pessoa => {
    const card = document.createElement("div");
    card.classList.add("card");
    if (termoBusca && pessoa.nome.toLowerCase().includes(termoBusca.toLowerCase())) {
      card.classList.add("destacado");
    }
    card.innerHTML = `
      <img src="${pessoa.foto}" alt="${pessoa.nome}">
      <h2>${pessoa.nome}</h2>
      <p>${pessoa.cargo}</p>
      <p>${pessoa.msg}</p>
      <p>🎂 ${pessoa.data}</p>
    `;
    container.appendChild(card);
  });
}

mesFiltro.addEventListener("change", () => {
  const mes = mesFiltro.value;
  const filtrados = mes ? aniversariantes.filter(p => p.data.split("/")[1] === mes) : aniversariantes;
  renderizar(filtrados, busca.value);
});

busca.addEventListener("input", () => {
  const termo = busca.value.toLowerCase();
  const mes = mesFiltro.value;
  let filtrados = aniversariantes.filter(p => p.nome.toLowerCase().includes(termo));
  if (mes) {
    filtrados = filtrados.filter(p => p.data.split("/")[1] === mes);
  }
  renderizar(filtrados, termo);
});

renderizar(aniversariantes);
