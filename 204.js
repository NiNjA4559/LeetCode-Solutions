/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n < 3) return 0;
    let composites = new Uint8Array(Math.floor(n/2));
    for(let i = 3; i <= Math.sqrt(n); i += 2) {
        if(!composites[(i-1)/2]) {
            for(let j = 3*i; j < n; j += 2*i) {
                composites[(j-1)/2] = true;
            }
        }
        
    }
    let count = 0;
    for(let i = 0; i < composites.length; i++) {
        if(!composites[i]) count += 1;
    }
    return count;
}
