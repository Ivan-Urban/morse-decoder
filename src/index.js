const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    console.log(expr);
    const n = expr.length / 10;
    const arr10 = [];
    for (let i = 0; i < n; i++){
        arr10[i] = '';
        for (let j = 0; j <= 9; j++) {
            arr10[i] += expr[i*10 + j];
        } 
    }
    const arrOfChar = arr10.map((el) => {
        if (el != '**********') {
            let strOfMorse = [];
            for (let i = 8; i >= 0; i -= 2) {
                if (el[i] + el [i+1] == '10') {
                    strOfMorse.unshift('.');
                } else {
                    if (el[i] + el[i+1] == '11'){
                        strOfMorse.unshift('-');
                    } else {
                        break;
                    }
                } 
            }
            return MORSE_TABLE[strOfMorse.join('')];
        } else {
            return ' ';
        }
    });
    return arrOfChar.join('');
}

module.exports = {
    decode
};