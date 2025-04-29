import DerivAPIBasic from 'https://cdn.skypack.dev/@deriv/deriv-api/dist/DerivAPIBasic';

const API_TOKEN = 'YOUR_DERIV_API_TOKEN'; // Reemplaza con tu token de Deriv
const app_id = 1089; // Usa tu app_id si tienes uno registrado
let api;

// Inicializar Deriv API
async function initDerivAPI() {
  try {
    const connection = new WebSocket(`wss://ws.binaryws.com/websockets/v3?app_id=${app_id}`);
    api = new DerivAPIBasic({ connection });

    // Autenticar
    await api.authorize({ authorize: API_TOKEN });
    console.log('Autenticación exitosa');

    // Obtener datos iniciales
    fetchCandlestickData();
  } catch (error) {
    console.error('Error al inicializar Deriv API:', error);
  }
}

// Obtener datos de velas
async function fetchCandlestickData() {
  const symbol = document.getElementById('symbol').value;
  const granularity = parseInt(document.getElementById('granularity').value);
  const count = 100; // Número de velas

  try {
    const response = await api.ticksHistory({
      ticks_history: symbol,
      adjust_start_time: 1,
      count: count,
      end: 'latest',
      start: 1,
      style: 'candles',
      granularity: granularity
    });

    const candles = response.candles;
    if (!candles || candles.length === 0) {
      console.error('No se recibieron datos de velas');
      return;
    }

    const chartData = candles.map(candle => ({
      t: new Date(candle.epoch * 1000), // Convertir timestamp a fecha
      o: parseFloat(candle.open),
      h: parseFloat(candle.high),
      l: parseFloat(candle.low),
      c: parseFloat(candle.close)
    }));

    renderChart(chartData);
  } catch (error) {
    console.error('Error al obtener datos de velas:', error);
  }
}

// Renderizar el gráfico
let chartInstance = null;
function renderChart(data) {
  const ctx = document.getElementById('candlestickChart').getContext('2d');

  // Destruir gráfico existente si hay uno
  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(ctx, {
    type: 'candlestick',
    data: {
      datasets: [{
        label: document.getElementById('symbol').options[document.getElementById('symbol').selectedIndex].text,
        data: data,
        borderColor: '#1a2b44',
        color: {
          up: '#28a745', // Verde para velas alcistas
          down: '#dc3545', // Rojo para velas bajistas
          unchanged: '#1a2b44' // Azul para velas neutrales
        }
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: (context) => {
              const data = context.raw;
              return `Open: ${data.o}\nHigh: ${data.h}\nLow: ${data.l}\nClose: ${data.c}`;
            }
          }
        }
      },
      scales: {
        x: {
          type: 'time',
          time: {
            unit: granularityUnit(document.getElementById('granularity').value)
          },
          title: {
            display: true,
            text: 'Fecha'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Precio'
          },
          beginAtZero: false
        }
      }
    }
  });
}

// Mapear granularidad a unidad de tiempo para Chart.js
function granularityUnit(granularity) {
  switch (parseInt(granularity)) {
    case 60: return 'minute';
    case 300: return 'minute';
    case 3600: return 'hour';
    default: return 'minute';
  }
}

// Actualizar gráfico al cambiar parámetros
window.updateChart = async function() {
  if (api) {
    await fetchCandlestickData();
  } else {
    console.error('API no inicializada. Intentando reconectar...');
    await initDerivAPI();
  }
};

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  initDerivAPI();
});