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
  if (slt1 == 1 && slt2 == 2 && slt3 == 3 && slt4 == 4) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }

  if (slt1 == 1 && slt2 == 2 && slt3 == 4 && slt4 == 3) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }

  if (slt1 == 1 && slt2 == 3 && slt3 == 2 && slt4 == 4) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }

  if (slt1 == 1 && slt2 == 3 && slt3 == 4 && slt4 == 2) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }

  if (slt1 == 1 && slt2 == 4 && slt3 == 2 && slt4 == 3) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }

  if (slt1 == 1 && slt2 == 4 && slt3 == 3 && slt4 == 2) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }

  if (slt1 == 2 && slt2 == 1 && slt3 == 3 && slt4 == 4) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }

  if (slt1 == 2 && slt2 == 1 && slt3 == 4 && slt4 == 3) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }

  if (slt1 == 2 && slt2 == 3 && slt3 == 1 && slt4 == 4) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }

  if (slt1 == 2 && slt2 == 3 && slt3 == 4 && slt4 == 1) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }

  if (slt1 == 2 && slt2 == 4 && slt3 == 1 && slt4 == 3) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }

  if (slt1 == 2 && slt2 == 4 && slt3 == 3 && slt4 == 1) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }

  if (slt1 == 3 && slt2 == 2 && slt3 == 1 && slt4 == 4) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }

  if (slt1 == 3 && slt2 == 2 && slt3 == 4 && slt4 == 1) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }

  if (slt1 == 3 && slt2 == 1 && slt3 == 2 && slt4 == 4) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }

  if (slt1 == 3 && slt2 == 1 && slt3 == 4 && slt4 == 2) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }

  if (slt1 == 3 && slt2 == 4 && slt3 == 2 && slt4 == 1) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }

  if (slt1 == 3 && slt2 == 4 && slt3 == 1 && slt4 == 2) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }

  if (slt1 == 4 && slt2 == 2 && slt3 == 3 && slt4 == 1) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }

  if (slt1 == 4 && slt2 == 2 && slt3 == 1 && slt4 == 3) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }

  if (slt1 == 4 && slt2 == 3 && slt3 == 2 && slt4 == 1) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }

  if (slt1 == 4 && slt2 == 3 && slt3 == 1 && slt4 == 2) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }

  if (slt1 == 4 && slt2 == 1 && slt3 == 2 && slt4 == 3) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }

  if (slt1 == 4 && slt2 == 1 && slt3 == 3 && slt4 == 2) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 2;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
  }
  //fim dos prêmios menores

  //inicio dos premios maiores
  if (slt1 == 1 && slt2 == 1 && slt3 == 1 && slt4 == 1) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 5;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 5 + ".");
  }

  if (slt1 == 2 && slt2 == 2 && slt3 == 2 && slt4 == 2) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 10;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 10 + ".");
  }

  if (slt1 == 3 && slt2 == 3 && slt3 == 3 && slt4 == 3) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 20;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 20 + ".");
  }

  if (slt1 == 4 && slt2 == 4 && slt3 == 4 && slt4 == 4) {
    aposta = parseInt(aposta);
    credito = credito + aposta * 50;
    document.getElementById("credito").value = "R$ " + credito;
    window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 50 + ".");
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
