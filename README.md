A barebones app for your terminal to display the latest crypto prices using Coinbase APIs.

setup:
1. clone repo
2. 
```
$ cd bash-crypto-price
$ npm install
```
3. add line to terminal startup: node bash-crypto-price/index.js [args]

return only the currencies you want:
```
btc
eth
ltc
bch
```

usage:
```
$node index.js btc eth
BTC-USD: $13795.95	ETH-USD: $1262.54
```
Enjoy!