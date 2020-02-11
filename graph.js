import Stack from './stack';
import Queue from './queue';

class Graph {
    constructor() {
        this.vertices = {};
    }

    addVertex(vertex) {
        if(vertex in this.vertices) {
            throw new Error('That vertex already exists!')
        }
        this.vertices[vertex] = new Set();
    }

    addEdge(v1, v2) {
        if(v1 in this.vertices && v2 in this.vertices) {
            this.vertices[v1].add(v2)
        } else {
            throw new Error("Can not create an edge based on given vertices!");
        }
    }

    bfsPrint(startingVertex) {
        const queue = new Queue();

        const visitedVertices = new Set();

        queue.enqueue(startingVertex);

        while(!queue.isEmpty()) {
            let vertex = queue.dequeue();

            if(!visitedVertices.has(vertex)) {
                visitedVertices.add(vertex);
                console.log(vertex);

                for(let nextVert of this.vertices[vertex]) {
                    queue.enqueue(nextVert);
                }
            }
        }
    }

    dfsPrint(startingVertex) {
        const stack = new Stack();

        const visitedVertices = new Set();

        stack.add(startingVertex);

        while(!stack.isEmpty()) {
            let vertex = stack.pop();

            if(!visitedVertices.has(vertex)) {
                visitedVertices.add(vertex);
                console.log(vertex)

                for(let nextVert of this.vertices[vertex]) {
                    stack.add(nextVert)
                }
            }
        }
    }
}