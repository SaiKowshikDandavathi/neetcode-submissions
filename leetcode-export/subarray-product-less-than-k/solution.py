class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        if k <= 1:
            return 0
        left = right = count = 0
        product = 1

        while right < len(nums):
            product *= nums[right]
            while product >= k:
                product = product//nums[left]
                left += 1
            count += 1+ (right-left)
            right += 1
        return count

# ============================================================
# REVIEW — Rating: 9/10
#
# Why this isn't perfect:
# - This is the optimal O(n) sliding-window solution: the window
#   [left, right] shrinks from the left while the running product
#   stays >= k, and `count += 1 + (right - left)` correctly counts
#   every subarray ending at `right` in one shot rather than
#   iterating them individually.
# - The `k <= 1` short-circuit correctly handles the case where no
#   subarray of positive integers can ever have a product < 1.
# - Minor style nit: `count += 1+ (right-left)` is missing a space
#   after the `+`, inconsistent with the rest of the spacing style.
#
# Areas of improvement:
# - Fix the spacing nit on line 13 for consistency.
# - Variable names (`left`, `right`, `product`, `count`) are already
#   clear; nothing structural to change.
# ============================================================

# ============================================================
# IDEAL SOLUTION (reference)
# ============================================================
# class Solution:
#     def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
#         if k <= 1:
#             return 0
#
#         count = 0
#         product = 1
#         left = 0
#
#         for right, num in enumerate(nums):
#             product *= num
#             while product >= k:
#                 product //= nums[left]
#                 left += 1
#             count += right - left + 1
#
#         return count

