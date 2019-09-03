let prefissitxt_tecnici = "313, 361, 362, 363, 341, 343, 383, 322, 323, 390";

let prefissitxt = "351-5, 351-6, 351-7, 351-8, 351-9, 330, 331, 333, 334, 335, 336, 337, 338, 339, 360, 366, 368, 385, 340, 342, 344, 345, 346, 347, 348, 349, 320, 324, 327, 328, 329, 380, 388, 389, 391, 392, 393, 373, 350, 377";

// crea array
var prefissi = prefissitxt.split(',');
for(let c = 0; c < prefissi.length; c++) {
    prefissi[c] = prefissi[c].trim();
    prefissi[c] = prefissi[c].replace('-', '');
}

// Aggiunge un numero definito di cifre casuali dopo una stringa
function NumeroCasuale(prefisso, numerocifre) {
    let cifreRimanenti = numerocifre - prefisso.length;
    let restante = "";
    for(let c = 0; c<cifreRimanenti; c++) {
        let numero = Math.floor(Math.random() * 10);
        restante += numero.toString();
    }
    return prefisso + restante;
}
for(let c = 0; c<10; c++) {
    console.log(NumeroCasuale(prefissi[Math.floor(Math.random()*prefissi.length)], 10));
}
