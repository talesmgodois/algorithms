
// stack = push and pop
// queue insert, remove,

import {graph} from "../types";

export const dfs = (entryPoint: string, graph: Record<string, string[]>): string[] => {
    const path: string[] = [];
    const stack = [entryPoint]
    while(stack.length > 0) {
        const node = stack.pop();
        if(node) {
            path.push(node);
            const children = graph[node];
            if(children) {
                for(let i=children.length -1; i>=0; i--) {
                    stack.push(children[i]);
                }
            }
        }
    }
    return path;
}

export const dfsR = (entryPoint: string, graph: Record<string, string[]>): string[] => {
    let path:string [] = [];
    path.push(entryPoint);
    const neighbors = graph[entryPoint];
    for(const node of neighbors) {
        path = path.concat(dfsR(node, graph));
    }
    return path;
}

console.time("dfsR");
console.log(dfsR('a',graph));
console.timeEnd("dfsR");
console.time("dfs");
console.log(dfs('a',graph));
console.timeEnd("dfs");