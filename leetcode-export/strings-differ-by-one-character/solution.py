class Solution:
    def differByOne(self, dict: List[str]) -> bool:
        for i in range(len(dict[0])):
            all_opt = set()
            for w in dict:
                w1 = w[:i] + w[i+1:]
                if w1 in all_opt:
                    return True
                all_opt.add(w1)
        return False

# ============================================================
# REVIEW — Rating: 8/10
#
# Why this isn't perfect:
# - The parameter is named `dict`, which shadows Python's built-in
#   `dict` type for the entire method body — works fine here since
#   the built-in isn't needed, but it's a real footgun if the method
#   grows and someone later wants `dict()` inside it.
# - Approach is the optimal O(n*m) one: for each column i, hash every
#   word with that column removed and check for a collision within
#   the same column — this is the standard "remove one column, check
#   dedup" trick, better than the naive O(n^2*m) pairwise compare.
# - `all_opt` is a slightly vague name for what is really "words seen
#   with column i removed".
#
# Areas of improvement:
# - Rename `dict` -> `words` to avoid shadowing the builtin.
# - Rename `all_opt` -> `seen` for clarity.
# ============================================================

# ============================================================
# IDEAL SOLUTION (reference)
# ============================================================
# class Solution:
#     def differByOne(self, words: List[str]) -> bool:
#         num_cols = len(words[0])
#         for col in range(num_cols):
#             seen = set()
#             for word in words:
#                 pattern = word[:col] + word[col + 1:]
#                 if pattern in seen:
#                     return True
#                 seen.add(pattern)
#         return False