# Graph Theory

## Introduction
* Graphs can be directioned or undirectioned
* Graphs are collections of vertices and edges
* Graphs can be represented as adjacent Lists
  * ```typescript
        export type Node<T> = {
            value: T;
        }   
        export type Graph<T> = Map<Node<T>, Node<T>[]>;
    
        const graph: Graph = {
          a: [b, c, d],
          b: [c, d]
        }
    
    ```
  

## Algorithms

### Depth First Traversal(DFT) 
* Travel following a direction
* Uses a Stack to do the algorithm

### Breadth First Traversal(BFT)
* Check alll nodes close adjacent
* Uses Queue