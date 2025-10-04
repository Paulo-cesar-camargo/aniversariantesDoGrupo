const aniversariantes = [
  { nome: "PAULO CESAR CAMARGO", cargo: "Regente", msg: "Feliz aniversario varão valoroso", data: "15/08/82", foto: "img/pauloCamargo.jpeg" },
  { nome: "Nicinha", cargo: "Regente", msg: "Feliz aniversario irmã Nicinha", data: "22/08", foto: "img/nicinha.jpeg" },
  { nome: "Waldir de Arruda", cargo: "Diacono", msg: "Feliz aniversario varão valoroso", data: "10/02", foto: "img/waldir1.jpg" },
  { nome: "Gilmar da Silva", cargo: "Pastor", msg: "Feliz aniversario varão valoroso", data: "05/11", foto: "img/gilmar.png" },
  { nome: "Alexsandro Henrique Soares", cargo: "Integrante dos Gideões", msg: "Feliz aniversario varão valoroso", data: "09/04", foto: "img/alexandre.jpg" },
  { nome: "José Raimundo de santo", cargo: "Integrante dos Gideões", msg: "Feliz aniversario varão valoroso", data: "08/67", foto: "img/base.jpg" },
  { nome: "André Almeida Ribeiro", cargo: "Integrante dos Gideões", msg: "Feliz aniversario varão valoroso", data: "21/09/84", foto: "img/andre.png" },
  { nome: "Ueverson André de Oliveira", cargo: "Cooperador", msg: "Feliz aniversario varão valoroso", data: "10/10/1981", foto: "img/ueversom.jpg" },
  { nome: "Paulo Castesiano de Oliveira", cargo: "Diacono e lider dos varoes", msg: "Feliz aniversario varão valoroso", data: "15/08/1984", foto: "img/pauloDiacono.jpeg" },
  { nome: "Adailson da Silva Castro", cargo: "Presbitero", msg: "Feliz aniversario varão valoroso", data: "04/04/82", foto: "img/base.jpg" },
  { nome: "Wasley Santos Pereira", cargo: "Integrante dos Gideões", msg: "Feliz aniversario varão valoroso", data: "16/09/1984", foto: "img/wasley.png" },
  { nome: "Eliezer Francisco de Paula", cargo: "Cooperador", msg: "Feliz aniversario varão valoroso", data: "04/09/1977", foto: "img/eliazer.jpg" },
  { nome: "Genivaldo", cargo: "Integrante dos Gideões", msg: "Feliz aniversario varão valoroso", data: "03/05/1983", foto: "img/genivaldo.jpeg" },
  { nome: "Manoel Alecrim", cargo: "Integrante dos Gideões", msg: "Feliz aniversario varão valoroso", data: "12/10/66", foto: "img/base.jpg" },
  { nome: "Natanael ribeiro arruda", cargo: "Presbitero", msg: "Feliz aniversario varão valoroso", data: "07/01/1984", foto: "img/nat1.jpg" },
  { nome: "Marcos Ribeiro Arruda", cargo: "Cooperador/Sonoplasta", msg: "Feliz aniversario varão valoroso", data: "27/08/1982", foto: "img/marcos.jpeg" },
  { nome: "Cloves Miguel Nonácio da Silva", cargo: "Diacono", msg: "Feliz aniversario varão valoroso", data: "27/11/1982", foto: "img/cloves.png" },
  { nome: "João do Nascimento", cargo: "Diacono e lider dos varoes", msg: "Feliz aniversario varão valoroso", data: "24/11/1975", foto: "img/joaoLider.png" },
  { nome: "Thaide Cassiano", cargo: "Sonoplasta", msg: "Feliz aniversario varão valoroso", data: "09/03/1995", foto: "img/base.jpg" },
  { nome: "Edilson Souza Cunha", cargo: "Pastor", msg: "Feliz aniversario meu pastor", data: "28/12", foto: "img/pastorEdilson.png" },
  { nome: "Cristiano", cargo: "Pastor", msg: "Feliz aniversario pastor cristiano", data: "15/02", foto: "img/cristiano.png" },
  { nome: "Joaquim", cargo: "Integrante dos Gideões", msg: "Feliz aniversário varão valoroso", data: "dd/mm/aaaa", foto: "img/joaquin.jpg" }
];

const container = document.getElementById("container");
const mesFiltro = document.getElementById("mesFiltro");
const busca = document.getElementById("busca");

// Função para renderizar os cards
function renderizar(lista, termoBusca = "") {
  container.innerHTML = "";
  lista.forEach(pessoa => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Destacar se corresponder ao termo de busca
    if (termoBusca && pessoa.nome.toLowerCase().includes(termoBusca.toLowerCase())) {
      card.classList.add("destacado");
    }

    card.innerHTML = `
      <img src="${pessoa.foto}" alt="${pessoa.nome}" onclick="abrirImagem(this)">
      <h2>${pessoa.nome}</h2>
      <p>${pessoa.cargo}</p>
      <p>${pessoa.msg}</p>
      <p>🎂 ${pessoa.data}</p>
    `;
    container.appendChild(card);
  });
}

// Filtro por mês
mesFiltro.addEventListener("change", () => {
  const mes = mesFiltro.value;
  const filtrados = mes
    ? aniversariantes.filter(p => {
        const partes = p.data.trim().split("/");
        return partes[1] === mes;
      })
    : aniversariantes;
  renderizar(filtrados, busca.value);
});

// Filtro por busca
busca.addEventListener("input", () => {
  const termo = busca.value.toLowerCase();
  const mes = mesFiltro.value;
  let filtrados = aniversariantes.filter(p =>
    p.nome.toLowerCase().includes(termo)
  );
  if (mes) {
    filtrados = filtrados.filter(p => {
      const partes = p.data.trim().split("/");
      return partes[1] === mes;
    });
  }
  renderizar(filtrados, termo);
});

// Renderizar tudo ao carregar a página
renderizar(aniversariantes);

// Modal de imagem
function abrirImagem(imgElement) {
  const modal = document.getElementById("modalImagem");
  const imgAmpliada = document.getElementById("imgAmpliada");
  modal.style.display = "block";
  imgAmpliada.src = imgElement.src;
}

function fecharImagem(event) {
  const modal = document.getElementById("modalImagem");
  if (event.target === modal || event.target.classList.contains("fechar")) {
    modal.style.display = "none";
  }
}
