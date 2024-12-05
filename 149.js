/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if(points.length === 1) return 1;
    let slopes = {};
    points.forEach((p1, i1) => {
        for(let i2 = i1+1;i2 < points.length; i2++) {
            const p2 = points[i2];
            const m = isFinite((p2[1]-p1[1])/(p2[0]-p1[0]))? ((p2[1]-p1[1])/(p2[0]-p1[0])).toFixed(7): Infinity;
            const c = (p1[1]-m*p1[0]).toFixed(7);
            const x = isFinite(m)? (-c/m).toFixed(7): p1[0];
            slopes[`${m} ${c} ${x}`]? slopes[`${m} ${c} ${x}`].push(i2): slopes[`${m} ${c} ${x}`] = [i2];
            console.log(`${m} ${c} ${x}`)
        }
    })
    return Math.max(...Object.values(slopes).map(i => new Set(i).size) || 0)+1;
};
// WILL THINK OF A BETTER SOLUTION LATER
