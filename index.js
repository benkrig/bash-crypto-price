var request = require("request");

const currencies = {'btc' : 'BTC-USD', 'eth' : 'ETH-USD', 'ltc' : 'LTC-USD', 'bch' : 'BCH-USD'};
var commands = [];
var price = {};

process.argv.forEach(function (val, index, array) {
	if (index > 1) {
		val == 'btc' ? commands.push(currencies.btc) : null;
		val == 'eth' ? commands.push(currencies.eth) : null;
		val == 'ltc' ? commands.push(currencies.ltc) : null;
		val == 'bch' ? commands.push(currencies.bch) : null;
	}
});

var count = 0;
function allDone() {
	if( count == commands.length)
		return true
	return false;
}

function get(type) {
	request('https://api.coinbase.com/v2/prices/' + type + '/buy', function(error, response, body) {
		var obj = JSON.parse(body);
		price[type] =  obj.data.amount;

		count ++ ;
		if(allDone()) {
			cout (price);
		}
	});
}

for ( var i = 0; i < commands.length; i ++ ) {

	get(commands[i]);
}

function cout () {
	var string = "\x1b[33mBTC: $" + price['BTC-USD'] + "\x1b[0m\t" + "\x1b[32mETH: $" + price['ETH-USD'] + "\x1b[0m\t" + "\x1b[35mLTC: $" + price['LTC-USD'] + "\x1b[0m\t" + "\x1b[36mBCH: $" + price['BCH-USD'] + "\x1b[0m";
	console.log(string);
}







