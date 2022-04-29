import {add} from "./add";

describe('Add test', () => {
    test('Check add sum', () => {
        expect(add(1,2,3)).toBe(6);
    })
})