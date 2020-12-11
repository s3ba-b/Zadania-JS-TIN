function zad7(figureType, a, b, c) {
    switch (figureType) {
        case 'rectangle':
            console.log('Rectangle area (in square centimeters)  = ' + a * b)
            break;
        case 'trapeze':
            console.log('Trapeze area (in square centimeters) = ' + ((a+b)*c)/2)
            break;
        case 'parallelogram':
            console.log('Parallelogram area (in square centimeters)  = ' + a * b)
            break;
        case 'triangle':
            console.log('Triangle area (in square centimeters)  = ' + a*b/2)
            break;
        default:
            console.log('Wrong parameters')
    }
}
zad7('triangle', 5, 6, null)