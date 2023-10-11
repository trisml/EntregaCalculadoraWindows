let numero1 = "";
let numero2 = "";
let operacion = "";
let resultado = "";

const mostrarPantalla = (value) => {
  const pantalla = document.getElementById("screen");
  pantalla.textContent = value;
};
const botones = document.querySelectorAll('[id^="button"');
botones.forEach((button) => {
  button.addEventListener("click", () => {
    const valueButton = button.textContent;

    if (parseInt(valueButton) >= 0 && parseInt(valueButton) <= 9) {
      if (operacion === "") {
        numero1 += valueButton;
        mostrarPantalla(numero1);
      } else {
        numero2 += valueButton;
        mostrarPantalla(numero2);
      }
    } else if (
      valueButton === "+" ||
      valueButton === "-" ||
      valueButton === "x" ||
      valueButton === "/" ||
      valueButton === "%" ||
      valueButton === "√" ||
      valueButton === "," ||
      valueButton === "+/-" ||
      valueButton === "C" ||
      valueButton === "," ||
      valueButton === "x²"
    ) {
      if (valueButton === "C") {
        numero1 = "";
        numero2 = "";
        operacion = "";
        resultado = "0";
        mostrarPantalla(resultado);
      } else {
        operacion = "";
        operacion += valueButton;
        mostrarPantalla(operacion);
      }
    } else if (valueButton === "⌫") {
      if (numero2 !== "") {
        resultado = numero2;
        resultado = resultado.slice(0, -1);
        numero2 = resultado;
        mostrarPantalla(resultado);
      } else {
        resultado = numero1;
        resultado = resultado.slice(0, -1);
        numero1 = resultado;
        mostrarPantalla(resultado);
      }
    } else if (valueButton === "=") {
      switch (operacion) {
        case "+":
          resultado = parseFloat(numero1) + parseFloat(numero2);
          numero1 = resultado;
          break;
        case "-":
          resultado = parseFloat(numero1) - parseFloat(numero2);
          numero1 = resultado;
          break;
        case "x":
          resultado = parseFloat(numero1) * parseFloat(numero2);
          numero1 = resultado;
          break;
        case "/":
          resultado = parseFloat(numero1) / parseFloat(numero2);
          numero1 = resultado;
          break;
        case "%":
          resultado = (numero2 / numero1) * 100;
          numero1 = resultado;
          break;
        case "√":
          resultado = Math.sqrt(numero1);
          numero1 = resultado;
          break;

        default:
          resultado = "ERROR";
      }
      mostrarPantalla(resultado);
    }
  });
});
function pi() {
  if (numero1 !== "") {
    resultado = numero1 * Math.PI;
    resultado = resultado.toFixed(4);
    numero1 = resultado;
    mostrarPantalla(resultado);
  } else {
    numero1 = Math.PI.toFixed(4);
    numero2 = "";
    operacion = "";
    resultado = Math.PI.toFixed(4);
    mostrarPantalla(resultado.toFixed(4));
  }
}
function square() {
  if (numero2 !== "") {
    resultado = Math.pow(numero2, 2);
    numero1 = resultado;
    mostrarPantalla(resultado);
  } else {
    resultado = Math.pow(numero1, 2);
    numero1 = resultado;
    mostrarPantalla(resultado);
  }
}
function changeSign() {
  if (numero2 !== "") {
    numero2 = resultado;
    numero2 = numero2 * -1;
    resultado = numero2;
    mostrarPantalla(resultado);
  } else {
    numero1 = numero1 * -1;
    resultado = numero1;
    numero1 = resultado;
    mostrarPantalla(resultado);
  }
}
function fraction() {
  if (numero2 !== "") {
    resultado = (1 / parseFloat(numero2)).toFixed(2);
    numero2 = resultado;
  } else if (numero1 !== "") {
    resultado = (1 / parseFloat(numero1)).toFixed(2);
    numero1 = resultado;
  } else {
    mostrarPantalla("Error");
    return;
  }

  mostrarPantalla(resultado);
}
function agregarDecimal() {
  if (operacion === "") {
    if (numero1.indexOf(".") === -1) {
      numero1 += ".";
      mostrarPantalla(numero1);
    }
  } else {
    if (numero2.indexOf(".") === -1) {
      numero2 += ".";
    }
  }
}
