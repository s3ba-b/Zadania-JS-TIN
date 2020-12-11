require('stream')

function zad6(height) {
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < height - i; j++) {
            process.stdout.write("-");
        }
        for (let k = 0; k < (2 * i + 1); k++) {
            process.stdout.write("*");
        }
        for (let j = 0; j < height - i; j++) {
            process.stdout.write("-");
        }
        console.log()
    }
}

zad6(10)