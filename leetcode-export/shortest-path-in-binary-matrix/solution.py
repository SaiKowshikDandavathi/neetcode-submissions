import collections
class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        if grid[0][0] != 0 or grid[-1][-1] != 0:
            return -1

        N = len(grid)
        seen = set()

        offsets = [(-1,-1), (1,0), (1,1),(0,1), (0,-1), (1,-1),(-1,1),(-1,0)]

        q = collections.deque()
        q.append((0,0))
        seen.add((0,0))
        dist = 1

        def get_neighbours(x,y):
            for x_offset, y_offset in offsets:
                new_row = x + x_offset
                new_col = y + y_offset
                
                if 0 <= new_row < N and 0 <= new_col < N and not grid[new_row][new_col] and (new_row, new_col) not in seen:
                    yield (new_row, new_col) 

        while q:
            lenth = len(q)

            for _ in range(lenth):
                row, col = q.popleft()

                # reached the end
                if row == N-1 and col == N-1:
                    return dist

                for p in get_neighbours(row,col):
                    seen.add(p)
                    q.append(p)
            dist += 1
        return -1

# ============================================================
# REVIEW — Rating: 8/10
#
# Why this isn't perfect:
# - Variable `lenth` is a typo for `length` — small but a real naming
#   quality issue that would stand out in a code review.
# - Trailing blank/whitespace-only lines left at the end of the file after
#   the function body.
#
# Areas of improvement:
# - Fix the `lenth` typo.
# - Clean up trailing blank lines.
# - Complexity is already optimal for this problem: standard multi-source-
#   style level-order BFS over the 8-directional grid, O(N^2) time and
#   O(N^2) space in the worst case, with an early return of -1 when the
#   start or end cell is blocked.
# ============================================================

# ============================================================
# IDEAL SOLUTION (reference)
# ============================================================
# import collections
# class Solution:
#     def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
#         n = len(grid)
#         if grid[0][0] != 0 or grid[n - 1][n - 1] != 0:
#             return -1
#
#         directions = [(-1, -1), (-1, 0), (-1, 1), (0, -1),
#                       (0, 1), (1, -1), (1, 0), (1, 1)]
#
#         queue = collections.deque([(0, 0)])
#         grid[0][0] = 1  # reuse grid as visited marker
#         path_length = 1
#
#         while queue:
#             for _ in range(len(queue)):
#                 row, col = queue.popleft()
#                 if row == n - 1 and col == n - 1:
#                     return path_length
#
#                 for dr, dc in directions:
#                     new_row, new_col = row + dr, col + dc
#                     if 0 <= new_row < n and 0 <= new_col < n and grid[new_row][new_col] == 0:
#                         grid[new_row][new_col] = 1
#                         queue.append((new_row, new_col))
#
#             path_length += 1
#
#         return -1
