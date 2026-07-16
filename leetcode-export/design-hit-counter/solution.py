from collections import deque
class HitCounter:
    """
    We maintain a queue for this problem. The init and hit (append) method are quite straightforward. 
    The main operation is performed in getHits.
    In getHits, we keep popping elements from the queue (while queue exists), only if the difference
    between the current timestamp and the first element of the queue is greater than or equal to 300.
    What this does is that the queue would remove all elements that have timestamp difference of more 
    than or equal to 300. What we are left is the queue with the closest 300 timestamps to the current
    timestamp. If we encounter a difference of less than 300, then this operation stops. Finally, the 
    length of the queue is the number of "hits" at the current timestamp.
    """
    def __init__(self):
        self.queue = deque()

    def hit(self, timestamp: int) -> None:
        self.queue.append(timestamp)

    def getHits(self, timestamp: int) -> int:
        while self.queue and timestamp - self.queue[0] >= 300:
            self.queue.popleft()
            
        return len(self.queue)
        


# Your HitCounter object will be instantiated and called as such:
# obj = HitCounter()
# obj.hit(timestamp)
# param_2 = obj.getHits(timestamp)

# ============================================================
# REVIEW — Rating: 9/10
#
# Why this isn't perfect:
# - Correct and efficient: hit() is O(1) amortized, getHits() is
#   O(k) where k is the number of stale entries evicted in that
#   call — each timestamp is popped at most once across the
#   object's lifetime, so total work is O(n) amortized over n hit()
#   calls. This is the standard optimal approach for this problem.
# - The docstring is quite long relative to the four lines of logic
#   it describes; a two-line summary would communicate the same
#   sliding-window idea more efficiently in an interview setting.
# - Assumes timestamps arrive in non-decreasing order (per the
#   problem's stated constraint) — worth a one-line comment noting
#   that assumption since the popleft() logic silently depends on it.
#
# Areas of improvement:
# - Trim the docstring to 2-3 sentences.
# - Add a short comment noting the monotonic-timestamp assumption.
# ============================================================

# ============================================================
# IDEAL SOLUTION (reference)
# ============================================================
# from collections import deque
#
# class HitCounter:
#     """Sliding-window hit counter over the last 300 seconds.
#     Assumes hit() calls arrive with non-decreasing timestamps."""
#
#     def __init__(self):
#         self.hits = deque()
#
#     def hit(self, timestamp: int) -> None:
#         self.hits.append(timestamp)
#
#     def getHits(self, timestamp: int) -> int:
#         while self.hits and timestamp - self.hits[0] >= 300:
#             self.hits.popleft()
#         return len(self.hits)
# ============================================================