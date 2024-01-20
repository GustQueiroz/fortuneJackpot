let minhaImagem = document.getElementById("spinButton");

minhaImagem.addEventListener("mouseover", function () {
  minhaImagem.src = "img/spinPressed.png";
});

minhaImagem.addEventListener("mouseout", function () {
  minhaImagem.src = "img/spin.png";
});

let credito = 0;
let aux = 0;
let aposta = 1;
let nSort = 0;
let slt1, slt2, slt3, slt4;
let sequenciaDerrotas = 0;

function random(inferior, superior) {
  numPossibilidades = superior - inferior;
  aleat = Math.random() * numPossibilidades;
  aleat = Math.floor(aleat);
  return parseInt(inferior) + aleat;
}

function betLess() {
  if (aposta > 1) {
    aposta--;
    document.getElementById("aposta").value = "R$ " + aposta;
  }
}
function betTenLess() {
  if (aposta > 1) {
    aposta -= 10;
    document.getElementById("aposta").value = "R$ " + aposta;
  }
}

function betMore() {
  if (aposta < 10000) {
    aposta++;
    document.getElementById("aposta").value = "R$ " + aposta;
  }
}
function betTenMore() {
  if (aposta < 10000) {
    aposta += 10;
    document.getElementById("aposta").value = "R$ " + aposta;
  }
}

function verificaPremio() {
  const chanceDeGanharBase = 0.4;
  const chanceDeGanhar = sequenciaDerrotas >= 4 ? 0.49 : chanceDeGanharBase;
  const combinacoesPremio = [
    [1, 2, 3, 4],
    [1, 2, 4, 3],
    [1, 3, 2, 4],
    [1, 3, 4, 2],
    [1, 4, 2, 3],
    [1, 4, 3, 2],
    [2, 1, 3, 4],
    [2, 1, 4, 3],
    [2, 3, 1, 4],
    [2, 3, 4, 1],
    [2, 4, 1, 3],
    [2, 4, 3, 1],
    [3, 2, 1, 4],
    [3, 2, 4, 1],
    [3, 1, 2, 4],
    [3, 1, 4, 2],
    [3, 4, 2, 1],
    [3, 4, 1, 2],
    [4, 2, 3, 1],
    [4, 2, 1, 3],
    [4, 3, 2, 1],
    [4, 3, 1, 2],
    [4, 1, 2, 3],
    [4, 1, 3, 2],
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
  ];

  for (const combinacao of combinacoesPremio) {
    if (
      slt1 === combinacao[0] &&
      slt2 === combinacao[1] &&
      slt3 === combinacao[2] &&
      slt4 === combinacao[3]
    ) {
      aposta = parseInt(aposta);
      let premioMultiplicador = 2;

      if (combinacao.every((valor) => valor === 1)) {
        premioMultiplicador = 5;
      } else if (combinacao.every((valor) => valor === 2)) {
        premioMultiplicador = 10;
      } else if (combinacao.every((valor) => valor === 3)) {
        premioMultiplicador = 20;
      } else if (combinacao.every((valor) => valor === 4)) {
        premioMultiplicador = 50;
      }

      credito += aposta * premioMultiplicador;
      document.getElementById("credito").value = "R$ " + credito;
      window.alert(
        "Parabéns, você ganhou um prêmio de R$ " +
          aposta * premioMultiplicador +
          "."
      );
      break;
    }
  }
}

function jogar() {
  if (credito < 1 || credito < aposta) {
    aux = window.prompt(
      "Coloque mais creditos, digite a quantidade em R$:",
      "1"
    );
    aux = parseInt(aux);
    credito = parseInt(credito);
    credito = credito + aux;
    document.getElementById("credito").value = "R$ " + credito;
  } else {
    if (credito > 0 && credito >= aposta) {
      credito = credito - aposta;
      document.getElementById("credito").value = "R$ " + credito;
      document.getElementById("escud1").src = "img/roleta.gif";
      document.getElementById("escud2").src = "img/roleta.gif";
      document.getElementById("escud3").src = "img/roleta.gif";
      document.getElementById("escud4").src = "img/roleta.gif";

      nSort = random(1, 5);
      switch (nSort) {
        case 1:
          cont = setTimeout(function () {
            document.getElementById("escud1").src = "img/palmeiras.png";
          }, 2000);
          slt1 = 1;
          break;
        case 2:
          cont = setTimeout(function () {
            document.getElementById("escud1").src = "img/saoPaulo.png";
          }, 4000);
          slt1 = 2;
          break;
        case 3:
          cont = setTimeout(function () {
            document.getElementById("escud1").src = "img/corinthians.png";
          }, 2000);
          slt1 = 3;
          break;
        case 4:
          cont = setTimeout(function () {
            document.getElementById("escud1").src = "img/santos.png";
          }, 2000);
          slt1 = 4;
          break;
      }

      nSort = random(1, 5);
      switch (nSort) {
        case 1:
          cont = setTimeout(function () {
            document.getElementById("escud2").src = "img/palmeiras.png";
          }, 3000);
          slt2 = 1;
          break;
        case 2:
          cont = setTimeout(function () {
            document.getElementById("escud2").src = "img/saoPaulo.png";
          }, 3000);
          slt2 = 2;
          break;
        case 3:
          cont = setTimeout(function () {
            document.getElementById("escud2").src = "img/corinthians.png";
          }, 3000);
          slt2 = 3;
          break;
        case 4:
          cont = setTimeout(function () {
            document.getElementById("escud2").src = "img/santos.png";
          }, 3000);
          slt2 = 4;
          break;
      }

      nSort = random(1, 5);
      switch (nSort) {
        case 1:
          cont = setTimeout(function () {
            document.getElementById("escud3").src = "img/palmeiras.png";
          }, 4000);
          slt3 = 1;
          break;
        case 2:
          cont = setTimeout(function () {
            document.getElementById("escud3").src = "img/saoPaulo.png";
          }, 4000);
          slt3 = 2;
          break;
        case 3:
          cont = setTimeout(function () {
            document.getElementById("escud3").src = "img/corinthians.png";
          }, 4000);
          slt3 = 3;
          break;
        case 4:
          cont = setTimeout(function () {
            document.getElementById("escud3").src = "img/santos.png";
          }, 4000);
          slt3 = 4;
          break;
      }

      nSort = random(1, 5);
      switch (nSort) {
        case 1:
          cont = setTimeout(function () {
            document.getElementById("escud4").src = "img/palmeiras.png";
          }, 5000);
          slt4 = 1;
          break;
        case 2:
          cont = setTimeout(function () {
            document.getElementById("escud4").src = "img/saoPaulo.png";
          }, 5000);
          slt4 = 2;
          break;
        case 3:
          cont = setTimeout(function () {
            document.getElementById("escud4").src = "img/corinthians.png";
          }, 5000);
          slt4 = 3;
          break;
        case 4:
          cont = setTimeout(function () {
            document.getElementById("escud4").src = "img/santos.png";
          }, 5000);
          slt4 = 4;
          break;
      }
      cont = setTimeout(function () {
        verificaPremio();
      }, 6000);
    }
  }
}
