import {Graph} from "../types";

const graph: Graph<string> = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}


// stack = push and pop
// queue unshift, pop,

export const bfs = (entryPoint: string, graph: Record<string, string[]>): string[] => {
    const path: string[] = [];
    const queue = [entryPoint];

    while(queue.length > 0) {
        const node = queue.pop();
        if(node) {
            path.push(node);
            const neighbors = graph[node];
            if(neighbors) {
                for(let i =0; i<neighbors.length; i++) {
                    const neighbor = neighbors[i];
                    if(neighbor) {
                        queue.unshift(neighbor)
                    }
                }
            }
        }
    }

    return path;
}

console.log(bfs('a',graph));