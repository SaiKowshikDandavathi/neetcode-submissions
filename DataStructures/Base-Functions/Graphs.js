/**
 * Undirected Graph (adjacency list) with addVertex, addEdge, removeEdge, removeVertex, dfs, bfs
 */

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        return this;
    }

    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
        return this;
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = (this.adjacencyList[vertex1] || []).filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = (this.adjacencyList[vertex2] || []).filter(v => v !== vertex1);
        return this;
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex] && this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
        return this;
    }

    dfsRecursive(start) {
        const results = [];
        const visited = {};
        const _traverse = (vertex) => {
            if (!vertex || visited[vertex]) return;
            visited[vertex] = true;
            results.push(vertex);
            this.adjacencyList[vertex].forEach(neighbor => _traverse(neighbor));
        };
        _traverse(start);
        return results;
    }

    dfsIterative(start) {
        const results = [];
        const visited = { [start]: true };
        const stack = [start];
        while (stack.length) {
            const vertex = stack.pop();
            results.push(vertex);
            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return results;
    }

    bfs(start) {
        const results = [];
        const visited = { [start]: true };
        const queue = [start];
        while (queue.length) {
            const vertex = queue.shift();
            results.push(vertex);
            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return results;
    }
}

const g = new Graph();
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");
g.addEdge("D", "E");

console.log(g.adjacencyList);
console.log(g.dfsRecursive("A"));
console.log(g.dfsIterative("A"));
console.log(g.bfs("A"));

g.removeVertex("D");
console.log(g.adjacencyList);
