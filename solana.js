const web3Solana = require('@solana/web3.js');
let connection = new web3Solana.Connection(web3Solana.clusterApiUrl('devnet'), 'confirmed');

const sola = "7nB3H7Qo8qSCV2coPoHrFvDAK7gjiZkt9Wf8g8XKjABS"
let base58publicKey = new web3Solana.PublicKey(sola);
connection._rpcWebSocket.on("open", (data) => {
    console.log(data);
});


connection.getBalance(base58publicKey).then(saldo => {
    console.log(saldo)
})

