/**
 * Weighted Graph (adjacency list) with Dijkstra's shortest path algorithm using a min priority queue
 */

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const node = this.values[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.values[parentIdx];
            if (node.priority >= parent.priority) break;
            this.values[parentIdx] = node;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.bubbleDown();
        }
        return min;
    }

    bubbleDown() {
        let idx = 0;
        const length = this.values.length;
        const node = this.values[0];
        while (true) {
            const leftIdx = 2 * idx + 1;
            const rightIdx = 2 * idx + 2;
            let swapIdx = null;

            if (leftIdx < length && this.values[leftIdx].priority < node.priority) {
                swapIdx = leftIdx;
            }
            if (rightIdx < length && this.values[rightIdx].priority < (swapIdx === null ? node.priority : this.values[leftIdx].priority)) {
                swapIdx = rightIdx;
            }
            if (swapIdx === null) break;
            this.values[idx] = this.values[swapIdx];
            this.values[swapIdx] = node;
            idx = swapIdx;
        }
    }

    get size() {
        return this.values.length;
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        return this;
    }

    addEdge(vertex1, vertex2, weight) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
        return this;
    }

    dijkstra(start, end) {
        const distances = {};
        const previous = {};
        const pq = new PriorityQueue();

        for (const vertex in this.adjacencyList) {
            distances[vertex] = vertex === start ? 0 : Infinity;
            previous[vertex] = null;
            pq.enqueue(vertex, distances[vertex]);
        }

        while (pq.size) {
            const { val: current } = pq.dequeue();
            if (current === end) break;
            if (distances[current] === Infinity) continue;

            for (const neighbor of this.adjacencyList[current]) {
                const candidateDistance = distances[current] + neighbor.weight;
                if (candidateDistance < distances[neighbor.node]) {
                    distances[neighbor.node] = candidateDistance;
                    previous[neighbor.node] = current;
                    pq.enqueue(neighbor.node, candidateDistance);
                }
            }
        }

        const path = [];
        let curNode = end;
        while (curNode) {
            path.push(curNode);
            curNode = previous[curNode];
        }
        return { distance: distances[end], path: path.reverse() };
    }
}

const wg = new WeightedGraph();
wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("B", "E", 3);
wg.addEdge("C", "D", 2);
wg.addEdge("D", "E", 3);
wg.addEdge("D", "F", 1);
wg.addEdge("E", "F", 1);

console.log(wg.dijkstra("A", "E"));
console.log(wg.dijkstra("A", "F"));
