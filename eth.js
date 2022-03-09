var Web3 = require("web3")
// provider
var testnet = "https://eth-goerli.alchemyapi.io/v2/Ro2kFlEcfKwtXNJNokxfIHLbiE-uZbnM"
// public account
var walletAddress = "0xff21E724B7D483fc93708855AbE6ee4f1eD97BF3"
// conexión
const web3 = new Web3(new Web3.providers.HttpProvider(testnet));
// obtenemos el balance
web3.eth.getBalance(walletAddress).then(i => {
    // convertimos a ether
    const etherValue = Web3.utils.fromWei(i, 'ether');
    console.log(`${etherValue} ether` )
}).catch(e => {
    console.log(e)
})