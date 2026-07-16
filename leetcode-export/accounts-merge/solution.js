/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    /*
        This problem can be solved by Union Find algorithm
        This Algorithm does find Parent and Union of disjoint sets
        Map every email to Index

    */
    let parents = {};
    let email2name = {};
    function find(x) {
        if (parents[x] !== x) {
            parents[x] = find(parents[x])
        }
        return parents[x]
    }


    function union(x, y) {
        parents[find(x)] = find(y)
    }


    for (let [name, ...emails] of accounts) {

        for (let email of emails) {
            if (!parents[email]) {
                parents[email] = email;
            }

            email2name[email] = name;
            // console.log("Before Union", parents)
            union(email, emails[0])
            // console.log("After Union", parents)

        }

    }
    // console.log(parents)

    const emails = {}

    for (const email of Object.keys(parents)) {
        const parent = find(email);

        if (parent in emails) {
            emails[parent].push(email)
        } else {
            emails[parent] = [email]
        }
    }

    // console.log(emails)

    return Object.entries(emails).map(([email, x]) => [email2name[email], ...x.sort()])


};
/* ============================================================
 * REVIEW — Rating: 8/10
 *
 * Why this isn't perfect:
 * - Correct and uses the right technique (Union-Find) for this problem —
 *   near-linear time with path compression via `find`. Union-by-rank isn't
 *   implemented (`union(x, y)` always attaches `find(x)` under `find(y)`
 *   rather than comparing tree sizes/ranks), so in an adversarial input
 *   order the tree could degrade toward O(n) depth per find before path
 *   compression kicks in — path compression alone still keeps this
 *   effectively near-linear in practice, but it's not the textbook-optimal
 *   union-by-rank + path-compression combo.
 * - Leftover commented-out `console.log` debug lines (lines with
 *   `// console.log(...)`) should be cleaned up before an interview review.
 *
 * Areas of improvement:
 * - Add union-by-rank (or union-by-size) alongside path compression for
 *   the textbook-optimal near-O(1) amortized find/union.
 * - Remove the commented-out debug logging.
 * - `parents[email]` uses a plain object; a `Map` would avoid any risk of
 *   prototype-chain key collisions (e.g. an email literally being
 *   "toString" or "constructor") though this is a very unlikely edge case
 *   for this problem's inputs.
 * ============================================================ */

/* ============================================================
 * IDEAL SOLUTION (reference)
 * ============================================================
var accountsMerge = function (accounts) {
    const parent = new Map();
    const rank = new Map();
    const email2name = new Map();

    function find(x) {
        if (parent.get(x) !== x) {
            parent.set(x, find(parent.get(x)));
        }
        return parent.get(x);
    }

    function union(x, y) {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX === rootY) return;
        if (rank.get(rootX) < rank.get(rootY)) {
            parent.set(rootX, rootY);
        } else if (rank.get(rootX) > rank.get(rootY)) {
            parent.set(rootY, rootX);
        } else {
            parent.set(rootY, rootX);
            rank.set(rootX, rank.get(rootX) + 1);
        }
    }

    for (const [name, ...emails] of accounts) {
        for (const email of emails) {
            if (!parent.has(email)) {
                parent.set(email, email);
                rank.set(email, 0);
            }
            email2name.set(email, name);
            union(emails[0], email);
        }
    }

    const groups = new Map();
    for (const email of parent.keys()) {
        const root = find(email);
        if (!groups.has(root)) groups.set(root, []);
        groups.get(root).push(email);
    }

    return [...groups.values()].map(emails => [email2name.get(emails[0]), ...emails.sort()]);
};
*/
