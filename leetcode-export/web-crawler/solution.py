# """
# This is HtmlParser's API interface.
# You should not implement it, or speculate about its implementation
# """
#class HtmlParser(object):
#    def getUrls(self, url):
#        """
#        :type url: str
#        :rtype List[str]
#        """
import collections
class Solution:
    def crawl(self, startUrl: str, htmlParser: 'HtmlParser') -> List[str]:
        q = collections.deque()
        q.append(startUrl)
        seen = set()

        def getHostName(url):
            print(url)
            _, url_parts = url.split("//")
            print(url_parts.split('/'))
            return url_parts.split('/')[0]

        def isSameHost(url):
            return getHostName(url) == startHostName

        startHostName = getHostName(startUrl)
        
        while len(q) > 0:
            url = q.popleft()
            if url not in seen:
                seen.add(url)

            newUrls = htmlParser.getUrls(url)

            for newUrl in newUrls:
                if newUrl not in seen and isSameHost(newUrl):
                    seen.add(newUrl)
                    q.append(newUrl)
        return list(seen)

# ============================================================
# REVIEW — Rating: 7/10
#
# Why this isn't perfect:
# - Correct BFS: each same-host URL is visited once (guarded by
#   `seen`), giving O(V + E) time over the reachable same-host pages,
#   which is the right complexity for this problem.
# - Leftover debug `print(url)` and `print(url_parts.split('/'))`
#   calls inside `getHostName` (lines 19, 21) should not ship in
#   final code — they run on every single URL processed.
# - `startUrl` is added to `seen` only via the `if url not in seen`
#   check inside the while loop (lines 31-32), whereas every other
#   URL is added to `seen` *before* being enqueued (line 38). This
#   asymmetry means that check is effectively dead code for every
#   dequeue except the very first one — confusing to read since it
#   looks like a general dedup guard but only ever fires once.
# - `getHostName` re-parses the URL with `.split("//")` and
#   `.split('/')` every time it's called (once per neighbor URL via
#   `isSameHost`), which is fine complexity-wise but is doing string
#   work that could be simplified with `urllib.parse.urlparse`.
#
# Areas of improvement:
# - Remove the two debug `print` statements.
# - Add `startUrl` to `seen` before the loop starts (`seen =
#   {startUrl}`) instead of relying on the in-loop check, and drop
#   the now-unnecessary `if url not in seen` guard.
# - Consider `urllib.parse.urlparse(url).netloc` instead of manual
#   string splitting for hostname extraction.
# ============================================================

# ============================================================
# IDEAL SOLUTION (reference)
# ============================================================
# """
# This is HtmlParser's API interface.
# You should not implement it, or speculate about its implementation
# """
# class HtmlParser(object):
#     def getUrls(self, url):
#         """
#         :type url: str
#         :rtype List[str]
#         """
#
# import collections
#
#
# class Solution:
#     def crawl(self, startUrl: str, htmlParser: 'HtmlParser') -> List[str]:
#         def hostname(url):
#             return url.split('/')[2]
#
#         host = hostname(startUrl)
#         seen = {startUrl}
#         queue = collections.deque([startUrl])
#
#         while queue:
#             url = queue.popleft()
#             for nextUrl in htmlParser.getUrls(url):
#                 if nextUrl not in seen and hostname(nextUrl) == host:
#                     seen.add(nextUrl)
#                     queue.append(nextUrl)
#
#         return list(seen)
