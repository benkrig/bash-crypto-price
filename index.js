var request = require("request");

const currencies = {'btc' : 'BTC-USD', 'eth' : 'ETH-USD', 'ltc' : 'LTC-USD', 'bch' : 'BCH-USD'};
const colors = {'BTC-USD' : "\x1b[33m", 'ETH-USD' : "\x1b[32m", 'LTC-USD' : "\x1b[35m", 'BCH-USD' : "\x1b[36m"};

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

function cout () {
	for(var currency in commands) {
		process.stdout.write(colors[commands[currency]] + commands[currency] + ": $" + price[commands[currency]] + "\x1b[0m\t");
	}
	process.stdout.write('\n');
}

for ( var i = 0; i < commands.length; i ++ ) {
	get(commands[i]);
}






