function zad1(x, y, z) {

    if (x*x + y*y === z*z) {
        console.log("yes")
    } else if (z*z + y*y === x*x) {
        console.log("also yes");
    } else if (x*x + z*z === y*y) {
        console.log("totally yes");
    } else {
        console.log("no");
    }

}

zad1(3, 4,6)