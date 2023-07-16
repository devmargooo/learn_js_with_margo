import { biggestInArray } from "./biggestInArray"

describe("biggestInArray", () => {
    it("return 4 for [1, 4, 3]", () => {
        expect(biggestInArray([1, 4, 3])).toBe(4);
    })
})