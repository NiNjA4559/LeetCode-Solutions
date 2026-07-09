const int MOD = 1000000007;
class Solution {
public:
    int numOfWays(int n) {
        int a = 6; // ending with ABC
        int b = 6; // ending with ABA
        int new_a;
        int new_b;

        while(--n) {
            new_a = (a * 2) % MOD; // due to ABC
            new_a = (new_a + (b * 2) % MOD) % MOD; // due to ABA

            new_b = ((b + b) % MOD + b) % MOD; // due to ABA
            new_b = (new_b + (a * 2) % MOD) % MOD; // due to ABC

            a = new_a;
            b = new_b;
        }

        return (a + b) % MOD;
    }
};
