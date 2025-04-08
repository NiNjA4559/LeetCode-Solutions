/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
    let res = 0;
    for (let i = 0; i < points.length; i++) {
        let dists = new Map();
        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                const dist = (points[i][0] - points[j][0]) ** 2 + (points[i][1] - points[j][1]) ** 2;
                if (dists.has(dist)) {
                    res += 2 * dists.get(dist);
                    dists.set(dist, dists.get(dist) + 1);
                } else {
                    dists.set(dist, 1);
                }
            }
        }
    }
    return res;
};
