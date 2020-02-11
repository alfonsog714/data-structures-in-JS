import stack from './stack';
import queue from './queue';

class Graph {
    constructor() {
        this.vertices = {};
    }

    add_vertex(vertex) {
        if(vertex in this.vertices) {
            throw new Error('That vertex already exists!')
        }
        this.vertices[vertex] = new Set();
    }

    add_edge(v1, v2) {
        if(v1 in this.vertices && v2 in this.vertices) {
            this.vertices[v1].add(v2)
        } else {
            throw new Error("Can not create an edge based on given vertices!");
        }
    }
}