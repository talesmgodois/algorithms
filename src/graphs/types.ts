export type Node<T> = {
    value: T;
}
export type Graph<T> = Record<string, T[]>;

export const graph: Graph<string> = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}
