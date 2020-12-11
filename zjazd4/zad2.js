require('stream')

function zad2(a, b, c) {
    let i = a;
    while(i <= b) {
        if(i%c === 0) {
            process.stdout.write(i + " ")
        }
        i++
    }
}

zad2(1, 10, 2)