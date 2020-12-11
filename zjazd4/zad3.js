require('stream')

function zad3(range) {
    let i, j;

    process.stdout.write("\t")
    for (i = 1; i <= range; i++)
        process.stdout.write(i + "\t");

    for (i = 1; i <= range; i++)
    {
        process.stdout.write("\n" + i + "\t");
        for (j = 1; j <= range; j++)
        {
            process.stdout.write(j*i + "\t");
        }
    }
}

zad3(5)