var gfg = new Array(3);


// Loop to create 2D array using 1D array
for (var i = 0; i < gfg.length; i++) {
    gfg[i] = new Array(3);
}

var h = 0;

// Loop to initialize 2D array elements.
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        gfg[i][j] = h++;
    }
}
console.log(gfg)