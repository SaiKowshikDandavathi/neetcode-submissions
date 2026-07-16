class Solution:
    def findSmallestRegion(self, regions: List[List[str]], region1: str, region2: str) -> str:
        #lowest common ancestors
        
        # Map each region to its most direct parent in parentMap
        parentMap = defaultdict(str)

        for region in regions:
            parent = region[0]
            for i in range(1, len(region)):
                parentMap[region[i]] = parent
        
        # Go from region1 all the way back to root to find all the ancestors in a line
        ancestors = set()
        while region1:
            ancestors.add(region1)
            region1 = parentMap[region1]
        
        # Go from region2 until we reach an ancestor that region2 shares in common with region1, which is in ancestors
        while region2 not in ancestors:
            region2 = parentMap[region2]

        return region2

# ============================================================
# REVIEW — Rating: 9/10
#
# Why this isn't perfect:
# - Uses `defaultdict(str)` for `parentMap`, which means looking up the
#   root region (which has no parent) silently returns `""` rather than
#   raising a `KeyError` — this is relied upon as the loop-termination
#   condition (`while region1:`), which works but is an implicit contract
#   that isn't obvious without tracing through `defaultdict` semantics.
#
# Areas of improvement:
# - A short comment noting that the root region maps to `""` (empty
#   string) via the defaultdict, and that this is what terminates the
#   ancestor-walk loop, would make the implicit behavior explicit.
# - Complexity is already optimal for this LCA-style problem: O(n) time to
#   build the parent map and walk both ancestor chains, O(n) space for the
#   map and the `ancestors` set.
# ============================================================

# ============================================================
# IDEAL SOLUTION (reference)
# ============================================================
# class Solution:
#     def findSmallestRegion(self, regions: List[List[str]], region1: str, region2: str) -> str:
#         parent_map = {}
#         for region in regions:
#             parent = region[0]
#             for child in region[1:]:
#                 parent_map[child] = parent
#
#         ancestors = set()
#         node = region1
#         while node is not None:
#             ancestors.add(node)
#             node = parent_map.get(node)
#
#         node = region2
#         while node not in ancestors:
#             node = parent_map.get(node)
#
#         return node