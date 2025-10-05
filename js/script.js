const aniversariantes = [
  { nome: "PAULO CESAR CAMARGO", cargo: "Regente", msg: "💛 “Que Deus continue a multiplicar bênçãos em sua vida, guiando seus passos, enchendo seu coração de paz, e fazendo deste novo ano um tempo de realizações.”", data: "15/08/82", foto: "img/pauloCamargo.jpeg" },
  { nome: "Nicinha", cargo: "Regente", msg: "🙏 “Feliz aniversário! Que Deus te conceda força, coragem e sabedoria para enfrentar desafios, e que você continue sendo luz e inspiração para todos ao redor.”", data: "22/08", foto: "img/nicinha.jpeg" },
  { nome: "Waldir de Arruda", cargo: "Diacono", msg: "💛 “Que Deus continue a multiplicar bênçãos em sua vida, guiando seus passos, enchendo seu coração de paz, e fazendo deste novo ano um tempo de realizações.”", data: "10/02", foto: "img/waldir1.jpg" },
  { nome: "Gilmar da Silva", cargo: "Pastor", msg: "💛 “Que Deus continue a multiplicar bênçãos em sua vida, guiando seus passos, enchendo seu coração de paz, e fazendo deste novo ano um tempo de realizações.”", data: "05/11", foto: "img/gilmar.png" },
  { nome: "Alexsandro Henrique Soares", cargo: "Integrante dos Gideões", msg: "💛 “Que Deus continue a multiplicar bênçãos em sua vida, guiando seus passos, enchendo seu coração de paz, e fazendo deste novo ano um tempo de realizações.”", data: "09/04", foto: "img/alexandre.jpg" },
  { nome: "José Raimundo de santo", cargo: "Integrante dos Gideões", msg: "🙏 “Feliz aniversário! Que Deus te conceda força, coragem e sabedoria para enfrentar desafios, e que você continue sendo luz e inspiração para todos ao redor.”", data: "08/67", foto: "img/base.jpg" },
  { nome: "André Almeida Ribeiro", cargo: "Integrante dos Gideões", msg: "💛 “Que Deus continue a multiplicar bênçãos em sua vida, guiando seus passos, enchendo seu coração de paz, e fazendo deste novo ano um tempo de realizações.”", data: "21/09/84", foto: "img/andre.png" },
  { nome: "Ueverson André de Oliveira", cargo: "Cooperador", msg: "🙏 “Feliz aniversário! Que Deus te conceda força, coragem e sabedoria para enfrentar desafios, e que você continue sendo luz e inspiração para todos ao redor.”", data: "10/10/1981", foto: "img/ueversom.jpg" },
  { nome: "Paulo Castesiano de Oliveira", cargo: "Diacono e lider dos varoes", msg: "💛 “Que Deus continue a multiplicar bênçãos em sua vida, guiando seus passos, enchendo seu coração de paz, e fazendo deste novo ano um tempo de realizações.”", data: "15/08/1984", foto: "img/pauloDiacono.jpeg" },
  { nome: "Adailson da Silva Castro", cargo: "Presbitero", msg: "🙏 “Feliz aniversário! Que Deus te conceda força, coragem e sabedoria para enfrentar desafios, e que você continue sendo luz e inspiração para todos ao redor.”", data: "04/04/82", foto: "img/base.jpg" },
  { nome: "Wasley Santos Pereira", cargo: "Integrante dos Gideões", msg: "🙏 “Feliz aniversário! Que Deus te conceda força, coragem e sabedoria para enfrentar desafios, e que você continue sendo luz e inspiração para todos ao redor.”", data: "16/09/1984", foto: "img/wasley.png" },
  { nome: "Eliezer Francisco de Paula", cargo: "Cooperador", msg: "🙏 “Feliz aniversário! Que Deus te conceda força, coragem e sabedoria para enfrentar desafios, e que você continue sendo luz e inspiração para todos ao redor.”", data: "04/09/1977", foto: "img/eliazer.jpg" },
  { nome: "Genivaldo", cargo: "Integrante dos Gideões", msg: "🙏 “Feliz aniversário! Que Deus te conceda força, coragem e sabedoria para enfrentar desafios, e que você continue sendo luz e inspiração para todos ao redor.”", data: "03/05/1983", foto: "img/genivaldo.jpeg" },
  { nome: "Manoel Alecrim", cargo: "Integrante dos Gideões", msg: "🙏 “Feliz aniversário! Que Deus te conceda força, coragem e sabedoria para enfrentar desafios, e que você continue sendo luz e inspiração para todos ao redor.”", data: "12/10/66", foto: "img/base.jpg" },
  { nome: "Natanael ribeiro arruda", cargo: "Presbitero", msg: "🙏 “Feliz aniversário! Que Deus te conceda força, coragem e sabedoria para enfrentar desafios, e que você continue sendo luz e inspiração para todos ao redor.”", data: "07/01/1984", foto: "img/nat1.jpg" },
  { nome: "Marcos Ribeiro Arruda", cargo: "Cooperador/Sonoplasta", msg: "🙏 “Feliz aniversário! Que Deus te conceda força, coragem e sabedoria para enfrentar desafios, e que você continue sendo luz e inspiração para todos ao redor.”", data: "27/08/1982", foto: "img/marcos.jpeg" },
  { nome: "Cloves Miguel Nonácio da Silva", cargo: "Diacono", msg: "🎂 “Que o Senhor ilumine seus caminhos neste novo ano, te abençoe com saúde, prosperidade e felicidade, e faça de sua vida um reflexo do Seu amor eterno.”", data: "27/11/1982", foto: "img/cloves.png" },
  { nome: "João do Nascimento", cargo: "Diacono e lider dos varoes", msg: "🎂 “Que o Senhor ilumine seus caminhos neste novo ano, te abençoe com saúde, prosperidade e felicidade, e faça de sua vida um reflexo do Seu amor eterno.”", data: "24/11/1975", foto: "img/joaoLider.png" },
  { nome: "Thaide Cassiano", cargo: "Sonoplasta", msg: "🎂 “Que o Senhor ilumine seus caminhos neste novo ano, te abençoe com saúde, prosperidade e felicidade, e faça de sua vida um reflexo do Seu amor eterno.”", data: "09/03/1995", foto: "img/thaide1.jpg" },
  { nome: "Edilson Souza Cunha", cargo: "Pastor", msg: "Feliz aniversario meu pastor 🙏 “ Que Deus te conceda força, coragem e sabedoria para enfrentar desafios, e que você continue sendo luz e inspiração para todos ao redor.”", data: "28/12", foto: "img/pastorEdilson.png" },
  { nome: "Cristiano", cargo: "Pastor", msg: "Feliz aniversario pastor cristiano 🙏 “ Que Deus te conceda força, coragem e sabedoria para enfrentar desafios, e que você continue sendo luz e inspiração para todos ao redor.”", data: "15/02", foto: "img/cristiano.png" },
  { nome: "Joaquim", cargo: "Integrante dos Gideões", msg: "🙏 “Feliz aniversário! Que Deus te conceda força, coragem e sabedoria para enfrentar desafios, e que você continue sendo luz e inspiração para todos ao redor.”", data: "dd/mm/aaaa", foto: "img/joaquin.jpg" },
  { nome: "Josué", cargo: "Presbitero", msg: "🙏 “Feliz aniversário! Que Deus te conceda força, coragem e sabedoria para enfrentar desafios, e que você continue sendo luz e inspiração para todos ao redor.”", data: "dd/mm/aaaa", foto: "img/josué.jpeg" }
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

    if (termoBusca && pessoa.nome.toLowerCase().includes(termoBusca.toLowerCase())) {
      card.classList.add("destacado");
    }

    card.innerHTML = `
      <img src="${pessoa.foto}" alt="${pessoa.nome}" onclick="abrirImagem(this)">
      <h2>${pessoa.nome}</h2>
      <p>${pessoa.cargo}</p>
      <p>${pessoa.msg}</p>
      <p>🎂 ${pessoa.data} 🎂</p>
      <button class="downloadBtn">📥</button>
      <canvas class="fogosCanvas"></canvas>
    `;

    container.appendChild(card);

    // Download do card
    const downloadBtn = card.querySelector('.downloadBtn');
    downloadBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      html2canvas(card).then(canvas => {
        const link = document.createElement('a');
        link.download = `${pessoa.nome}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    });

    // Explosão de fogos ao clicar no card
    card.addEventListener("click", () => {
      explosaoFogos(card);
    });
  });
}

// Filtro por mês
mesFiltro.addEventListener("change", () => {
  const mes = mesFiltro.value;
  const filtrados = mes
    ? aniversariantes.filter(p => p.data.trim().split("/")[1] === mes)
    : aniversariantes;
  renderizar(filtrados, busca.value);
});

// Filtro por busca
busca.addEventListener("input", () => {
  const termo = busca.value.toLowerCase();
  const mes = mesFiltro.value;
  let filtrados = aniversariantes.filter(p => p.nome.toLowerCase().includes(termo));
  if (mes) {
    filtrados = filtrados.filter(p => p.data.trim().split("/")[1] === mes);
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

// Função de explosão de fogos
function explosaoFogos(card) {
  const canvas = card.querySelector(".fogosCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = card.offsetWidth;
  canvas.height = card.offsetHeight;

  const particulas = [];
  for (let i = 0; i < 100; i++) {
    particulas.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 6,
      vy: (Math.random() - 0.5) * 6,
      alpha: 1,
      size: Math.random() * 3 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`
    });
  }

  function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particulas.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.02;
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    if (particulas.some(p => p.alpha > 0)) {
      requestAnimationFrame(animar);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  animar();
}


