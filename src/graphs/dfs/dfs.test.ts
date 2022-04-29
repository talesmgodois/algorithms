import {dfs,} from './dfs';
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
        expect(dfs('a',graph)).toMatchObject(['a', 'b', 'd', 'f', 'c', 'e']);
        expect(dfs('f',graph)).toMatchObject(['f']);
        expect(dfs('d',graph)).toMatchObject(['d', 'f']);
    })
})