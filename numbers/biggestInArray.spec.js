import { biggestInArray } from "./biggestInArray"

describe("biggestInArray", () => {
    it("returns 4 for [1, 4, 3]", () => {
        expect(biggestInArray([1, 4, 3])).toBe(4);
    })
    it("returns undefined for []", () => {
        expect(biggestInArray([])).toBe(undefined);
    })
    it("returns 1 for [1, -100, -8, 13, -5]", () => {
        expect(biggestInArray([1, -100, -8, 13, -5])).toBe(1);
    })
})
