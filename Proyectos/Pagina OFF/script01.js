document.addEventListener("DOMContentLoaded", () => {
  // Inicialización
  initTradingView();
  initCalculator();
  initPipsCalculator();
  initMarginCalculator();
  initROICalculator();
  initRiskRewardCalculator();
  initNormalCalculator();
  initEducationDemo();
  initAlerts();

  // Sesiones de trading
  const sessions = [
    { id: "london", timeZone: "Europe/London", openHour: 8, closeHour: 16 },
    { id: "newyork", timeZone: "America/New_York", openHour: 9, closeHour: 17 },
    { id: "tokyo", timeZone: "Asia/Tokyo", openHour: 7, closeHour: 15 },
    { id: "sydney", timeZone: "Australia/Sydney", openHour: 10, closeHour: 18 }
  ];

  function updateCards() {
    const now = new Date();
    sessions.forEach(session => {
      const timeElem = document.getElementById(`${session.id}-time`);
      const options = { timeZone: session.timeZone, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false };
      timeElem.textContent = now.toLocaleTimeString("es-ES", options);
      
      const sessionTime = new Date(now.toLocaleString("en-US", { timeZone: session.timeZone }));
      const currentHour = sessionTime.getHours();

      const statusElem = document.getElementById(`${session.id}-status`);
      const indicatorElem = document.getElementById(`${session.id}-indicator`);

      if (currentHour >= session.openHour && currentHour < session.closeHour) {
        statusElem.textContent = "OPEN";
        statusElem.classList.remove("session-closed");
        statusElem.classList.add("session-open");
        indicatorElem.style.backgroundColor = "#28a745";
      } else {
        statusElem.textContent = "CLOSED";
        statusElem.classList.remove("session-open");
        statusElem.classList.add("session-closed");
        indicatorElem.style.backgroundColor = "#dc3545";
      }
    });
  }
  setInterval(updateCards, 1000);
  updateCards();

  // Botón "Back to top"
  if (!document.getElementById("back-to-top")) {
    const backToTop = document.createElement("button");
    backToTop.id = "back-to-top";
    backToTop.title = "Back to top";
    backToTop.textContent = "↑";
    document.body.appendChild(backToTop);
  }
  const backToTop = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 300);
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Efecto fade-in
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);
  faders.forEach(fader => appearOnScroll.observe(fader));
});

// TradingView
function initTradingView(symbol = "FX:EURUSD") {
  if (typeof TradingView === "undefined") {
    console.error("TradingView no se ha cargado correctamente.");
    return;
  }
  const chartContainer = document.getElementById("tradingview_chart");
  chartContainer.innerHTML = "";
  let widgetOptions = {
    width: "100%",
    height: "100%",
    symbol: symbol,
    interval: "D",
    timezone: "Etc/UTC",
    theme: "light",
    style: "1",
    locale: "es",
    toolbar_bg: "#f1f3f6",
    enable_publishing: false,
    allow_symbol_change: true,
    container_id: "tradingview_chart"
  };
  if (symbol === "FX:EURUSD") {
    widgetOptions.studies = [
      "STD;MACD@tv-basicstudies",
      "STD;RSI@tv-basicstudies",
      "STD;BollingerBands@tv-basicstudies"
    ];
  }
  setTimeout(() => new TradingView.widget(widgetOptions), 100);
}

function changeSymbol(newSymbol) {
  initTradingView(newSymbol);
}

// Calculadoras
function initCalculator() {
  const diaInput = document.getElementById("dia");
  const valorInput = document.getElementById("valor");
  const porcentajeInput = document.getElementById("porcentaje");
  const resultadoInput = document.getElementById("resultado");
  const calcularBtn = document.getElementById("calcular");
  const reiniciarBtn = document.getElementById("reiniciar");

  calcularBtn.addEventListener("click", () => {
    const valor = parseFloat(valorInput.value) || 0;
    const porcentaje = parseFloat(porcentajeInput.value) || 0;
    const dias = parseInt(diaInput.value) || 1;
    const resultado = valor * Math.pow(1 + porcentaje / 100, dias);
    resultadoInput.value = resultado.toFixed(2);
  });

  reiniciarBtn.addEventListener("click", () => {
    diaInput.value = "";
    valorInput.value = "";
    porcentajeInput.value = "";
    resultadoInput.value = "";
  });
}

function initPipsCalculator() {
  const pipCantidadInput = document.getElementById("pipCantidad");
  const pipValorInput = document.getElementById("pipValor");
  const pipLoteInput = document.getElementById("pipLote");
  const resultadoPipsInput = document.getElementById("resultadoPips");
  const calcularPipsBtn = document.getElementById("calcularPips");
  const reiniciarPipsBtn = document.getElementById("reiniciarPips");

  calcularPipsBtn.addEventListener("click", () => {
    const pipCantidad = parseFloat(pipCantidadInput.value) || 0;
    const pipValor = parseFloat(pipValorInput.value) || 0;
    const pipLote = parseFloat(pipLoteInput.value) || 0;
    const resultadoPips = (pipCantidad * pipValor) * pipLote;
    resultadoPipsInput.value = resultadoPips.toFixed(2);
  });

  reiniciarPipsBtn.addEventListener("click", () => {
    pipCantidadInput.value = "";
    pipValorInput.value = "";
    pipLoteInput.value = "";
    resultadoPipsInput.value = "";
  });
}

function initMarginCalculator() {
  const marginBalanceInput = document.getElementById("marginBalance");
  const marginLeverageInput = document.getElementById("marginLeverage");
  const resultadoMarginInput = document.getElementById("resultadoMargin");
  const calcularMarginBtn = document.getElementById("calcularMargin");
  const reiniciarMarginBtn = document.getElementById("reiniciarMargin");

  calcularMarginBtn.addEventListener("click", () => {
    const balance = parseFloat(marginBalanceInput.value) || 0;
    const leverage = parseFloat(marginLeverageInput.value) || 1;
    const margenUsado = balance / leverage;
    resultadoMarginInput.value = margenUsado.toFixed(2);
  });

  reiniciarMarginBtn.addEventListener("click", () => {
    marginBalanceInput.value = "";
    marginLeverageInput.value = "";
    resultadoMarginInput.value = "";
  });
}

function initROICalculator() {
  const investmentInput = document.getElementById("investment");
  const profitInput = document.getElementById("profit");
  const roiResult = document.getElementById("roiResult");
  const calculateROIButton = document.getElementById("calculateROI");
  const resetROIButton = document.getElementById("resetROI");

  calculateROIButton.addEventListener("click", () => {
    const investment = parseFloat(investmentInput.value) || 0;
    const profit = parseFloat(profitInput.value) || 0;
    if (investment > 0) {
      const roi = (profit / investment) * 100;
      roiResult.value = roi.toFixed(2) + " %";
    } else {
      roiResult.value = "Inversión inválida";
    }
  });

  resetROIButton.addEventListener("click", () => {
    investmentInput.value = "";
    profitInput.value = "";
    roiResult.value = "";
  });
}

function initRiskRewardCalculator() {
  const riskInput = document.getElementById("riskAmount");
  const rewardInput = document.getElementById("rewardAmount");
  const riskRewardResult = document.getElementById("riskRewardResult");
  const calculateRiskRewardButton = document.getElementById("calculateRiskReward");
  const resetRiskRewardButton = document.getElementById("resetRiskReward");

  calculateRiskRewardButton.addEventListener("click", () => {
    const risk = parseFloat(riskInput.value) || 0;
    const reward = parseFloat(rewardInput.value) || 0;
    if (risk > 0) {
      const ratio = reward / risk;
      riskRewardResult.value = ratio.toFixed(2);
    } else {
      riskRewardResult.value = "Riesgo inválido";
    }
  });

  resetRiskRewardButton.addEventListener("click", () => {
    riskInput.value = "";
    rewardInput.value = "";
    riskRewardResult.value = "";
  });
}

function initNormalCalculator() {
  const display = document.getElementById("calcDisplay");
  const buttons = document.querySelectorAll(".calculator-buttons .calc-btn");
  const equalButton = document.getElementById("calcEqual");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const value = btn.getAttribute("data-value");
      if (value === "C") {
        display.value = "";
        return;
      }
      if (value === "back") {
        display.value = display.value.slice(0, -1);
        return;
      }
      if (value === "negate") {
        if (display.value) {
          let num = parseFloat(display.value);
          if (!isNaN(num)) display.value = (-num).toString();
        }
        return;
      }
      if (value === "1/x") {
        if (display.value) {
          let num = parseFloat(display.value);
          if (!isNaN(num) && num !== 0) display.value = (1 / num).toString();
          else display.value = "Error";
        }
        return;
      }
      if (value === "^") {
        display.value += "^";
        return;
      }
      display.value += value;
    });
  });

  equalButton.addEventListener("click", () => {
    try {
      let expr = display.value;
      expr = expr.replace(/\^/g, "**");
      expr = expr.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
      const result = eval(expr);
      display.value = result;
    } catch (e) {
      display.value = "Error";
    }
  });
}

// Demostración Educativa con Gráfico BTC
function initEducationDemo() {
  const chartContainer = document.getElementById("btc-chart");
  const simulateBtn = document.getElementById("simulate-trend");

  if (typeof TradingView === "undefined") {
    chartContainer.innerHTML = "<p>Error: TradingView no está disponible.</p>";
    return;
  }

  const widget = new TradingView.widget({
    width: "100%",
    height: "100%",
    symbol: "BINANCE:BTCUSDT",
    interval: "15",
    timezone: "Etc/UTC",
    theme: "light",
    style: "1",
    locale: "es",
    toolbar_bg: "#f1f3f6",
    enable_publishing: false,
    allow_symbol_change: false,
    container_id: "btc-chart"
  });

  simulateBtn.addEventListener("click", () => {
    const alertBox = document.getElementById("alertBox");
    alertBox.textContent = "Tendencia simulada: BTC/USD subiendo a $70,000";
    alertBox.classList.add("btc-alert");
    alertBox.style.display = "block";
    setTimeout(() => alertBox.style.display = "none", 5000);
  });
}

// Alertas Mejoradas
function initAlerts() {
  const setAlertBtn = document.getElementById("setAlert");
  const alertSymbol = document.getElementById("alertSymbol");
  const alertPrice = document.getElementById("alertPrice");
  const alertBox = document.getElementById("alertBox");

  setAlertBtn.addEventListener("click", () => {
    const symbol = alertSymbol.value.toUpperCase();
    const price = parseFloat(alertPrice.value);
    if (symbol && price) {
      alertBox.textContent = `Alerta configurada: ${symbol} a $${price}`;
      if (symbol === "BTCUSDT") {
        alertBox.classList.add("btc-alert");
      } else {
        alertBox.classList.remove("btc-alert");
      }
      alertBox.style.display = "block";
      setTimeout(() => alertBox.style.display = "none", 5000);
      alertSymbol.value = "";
      alertPrice.value = "";
    }
  });

  alertBox.addEventListener("click", (e) => {
    if (e.target === alertBox.querySelector("::after")) {
      alertBox.style.display = "none";
    }
  });
}