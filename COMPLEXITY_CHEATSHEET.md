# Complexity Cheat Sheet

Best to worst. Space usually refers to *extra* space beyond input/output.

| Complexity | Name | Common pattern |
|---|---|---|
| O(1) | constant | fixed number of variables, no scaling with n |
| O(log n) | logarithmic | binary search, halving search space, balanced tree height |
| O(n) | linear | single pass over input, prefix/suffix sums, hashmap build |
| O(n log n) | linearithmic | sorting, divide-and-conquer, n loop iterations each doing binary search/heap op |
| O(n^2) | quadratic | nested loops both over n, naive pairwise comparison |
| O(n^3) | cubic | triple nested loops (e.g. naive matrix multiply) |
| O(2^n) | exponential | recursion branching in 2 without memoization (subsets, naive fibonacci) |
| O(n!) | factorial | generating all permutations, brute-force TSP |

## Reducing time

- **Trade space for time** — hashmap/set for O(1) lookups instead of scanning (O(n^2) → O(n))
- **Precompute** — prefix/suffix sums or products avoid recomputing a range in a loop
- **Two pointers / sliding window** — replace nested loops with two indices moving monotonically
- **Sort first** — O(n log n) sort can unlock O(n) two-pointer techniques
- **Binary search** — if the answer space is monotonic, search it instead of scanning
- **Memoization/DP** — cache overlapping subproblems to avoid exponential blowup

## Reducing space

- **Reuse the output array** as scratch space when allowed
- **Replace an array with rolling variables** when only the last 1-2 values are needed (e.g. DP over Fibonacci)
- **Two-pass or reverse-in-place** instead of storing a reversed copy
- **Bit manipulation** instead of a boolean array/set when the domain is small
