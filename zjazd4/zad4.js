require('stream')

function zad4(n) {
    let i, t1 = 0, t2 = 1, nextTerm;
    process.stdout.write("Fibonacci Series: ");

    for (i = 1; i <= n; ++i) {
        process.stdout.write(t1 + ", ");
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
    }
}

zad4(30)