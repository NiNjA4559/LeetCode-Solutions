class Solution {
public:
    vector<int> productExceptSelf(const vector<int>& nums) {
        const int n = nums.size();
        
        int pre = 1;
        int suf = 1;

        vector<int> res(n, 1);

        for(int i = 0; i < n; i++) {
            res[i] *= pre;
            pre *= nums[i];
        }
        for(int i = n - 1; i >= 0; i--) {
            res[i] *= suf;
            suf *= nums[i];
        }

        return res;
    }
};
