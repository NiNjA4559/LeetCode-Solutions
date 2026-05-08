class Solution {
public:
    int getSum(int a, int b) {
        int m = a ^ b; // Addition of bits [0, 1], [1, 0] or [0, 0]
        int n = (a & b) << 1; // Carry over for bits [1, 1]
        return m + n;
    }
};
