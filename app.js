const BASE_URL = 'wss://stream.binance.com:443/ws/btcusdt@trade'

const price = document.querySelector('h3')
const ws = new WebSocket(BASE_URL)
ws.onmessage = function (e) {
  const {p} = JSON.parse(e.data)
  price.innerText = parseFloat(p)
}