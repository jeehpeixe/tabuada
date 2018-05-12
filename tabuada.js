const Yargs = require('yargs').argv;

if (Yargs.numero) {
    for (var iIndex of [1,2,3,4,5,6,7,8,9,10]) {
        console.log(Yargs.numero * iIndex);
    }
}
else {
    console.log("Digite o número desejado");
}