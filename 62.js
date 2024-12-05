/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // (m+n-2) choose (m-1)
    let a = 1;
    let b = 1;
    for(let i = m;i<m+n-1; i++) {
        a*=i
        if(i === m-1) b *=a;
    }
    for(let i = 1;i<n; i++) {
        b*=i
    }
    return Math.round(a/b);
};

//This is another solution to this problem, but consumes 25% more memory on average.
/*
var uniquePaths = function(m, n) {
    // (m+n-2) choose (m-1)
    let a = 1;
    let b = 1;
    let c = 1;
    for(let i = 1;i<m+n-1; i++) {
        a*=i
        if(i === m-1) b *=a;
        if(i === n-1) c *=a;
    }
    return Math.round(a/(b*c));
};*/
