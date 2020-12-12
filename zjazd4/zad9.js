require('stream')

function factorial(n)
{
    let c;
    let result = 1;

    for (c = 1; c <= n; c++)
        result = result*c;

    return result;
}

let i, n = 10, c;

for (i = 0; i < n; i++)
{
    for (c = 0; c <= (n - i - 2); c++)
        process.stdout.write(" ");

    for (c = 0 ; c <= i; c++)
        process.stdout.write(factorial(i)/(factorial(c)*factorial(i-c)) + " ");

    process.stdout.write("\n");
}