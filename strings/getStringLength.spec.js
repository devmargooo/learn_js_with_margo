import { getStringLength } from "./getStringLength"

describe("getStringLength", () => {
    it("return 10 for 'javascript'", () => {
        expect(getStringLength("javascript")).toBe(10);
    })

    it("return 5 for table", () => {
        expect(getStringLength("table")).toBe(5);
    })

    it("return 0 for empty string", () => {
        expect(getStringLength("")).toBe(0);
    })
})