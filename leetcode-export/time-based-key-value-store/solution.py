import collections

class TimeMap:
    def __init__(self):
        self.dic = collections.defaultdict(list)
        
    def set(self, key: str, value: str, timestamp: int) -> None:
        self.dic[key].append([value, timestamp])

    def get(self, key: str, timestamp: int) -> str:
        res = ""
        values = self.dic.get(key, [])
        l,r = 0, len(values)-1

        while l<=r:
            mid = (l+r)//2

            if values[mid][1] <= timestamp:
                l = mid+1
                res = values[mid][0]
            else:
                r = mid-1
        return res



# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)

# ============================================================
# REVIEW — Rating: 9/10
#
# Why this isn't perfect:
# - This is the optimal design: `set` appends in O(1) amortized time
#   (timestamps are guaranteed strictly increasing per the problem,
#   so the list stays sorted for free), and `get` binary-searches for
#   the largest timestamp <= the query in O(log n), rather than the
#   naive O(n) linear scan. Correctly returns "" when the key is
#   missing or no timestamp <= the query exists (via `self.dic.get`
#   default and the `res = ""` initialization).
# - Minor style nits: `l,r` and `mid-1`/`mid+1` lack spaces around
#   operators (inconsistent with PEP8), and importing all of
#   `collections` just to use `defaultdict` is slightly heavier than
#   `from collections import defaultdict`.
#
# Areas of improvement:
# - Add PEP8 spacing around operators (`l, r`, `mid - 1`, `mid + 1`).
# - Use `from collections import defaultdict` for a more targeted
#   import.
# ============================================================

# ============================================================
# IDEAL SOLUTION (reference)
# ============================================================
# from collections import defaultdict
#
#
# class TimeMap:
#     def __init__(self):
#         self.store = defaultdict(list)
#
#     def set(self, key: str, value: str, timestamp: int) -> None:
#         self.store[key].append((timestamp, value))
#
#     def get(self, key: str, timestamp: int) -> str:
#         entries = self.store.get(key, [])
#         lo, hi = 0, len(entries) - 1
#         result = ""
#
#         while lo <= hi:
#             mid = (lo + hi) // 2
#             if entries[mid][0] <= timestamp:
#                 result = entries[mid][1]
#                 lo = mid + 1
#             else:
#                 hi = mid - 1
#
#         return result
#
#
# # Your TimeMap object will be instantiated and called as such:
# # obj = TimeMap()
# # obj.set(key, value, timestamp)
# # param_2 = obj.get(key, timestamp)