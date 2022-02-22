const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const list = [];

rl.on("line", function(line:string) {
	const a = line.split(' ');
    list.push({a:a[0], b:a[1]})
//	rl.close();
}).on("close", function() {
	process.exit();
});
console.log(list)
// 1 2
// 2 4
// 1 3
// 3 1
// 4 3
// 0 0

// output: 1.83
