let {chesschecker,checkKing} = require(`./board`)

const board = [
    ["*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "R", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "K", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*"]
];

chesschecker(board)
let result = checkKing()
console.log(result);