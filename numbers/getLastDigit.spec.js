import { getLastDigit } from "./getLastDigit"

describe("getLastDigit", () => {
    it("return 8 for 1248", () => {
        expect(getLastDigit(1248)).toBe(8);
    })
    it("return 0 for 0", () => {
        expect(getLastDigit(0)).toBe(0);
    })
    it("return 3 for 13", () => {
        expect(getLastDigit(13)).toBe(3);
    })
})