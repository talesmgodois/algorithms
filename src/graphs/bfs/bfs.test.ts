import {bfs,} from './bfs';
import {Graph} from "../types";

describe('Test DFS', () => {
    test('Check suite', () => {
        const graph: Graph<string> = {
            a: ['b', 'c'],
            b: ['d'],
            c: ['e'],
            d: ['f'],
            e: [],
            f: [],
        }
        expect(bfs('a',graph)).toMatchObject(['a', 'b', 'c', 'd', 'e', 'f']);
        expect(bfs('f',graph)).toMatchObject(['f']);
        expect(bfs('d',graph)).toMatchObject(['d', 'f']);
    })
})