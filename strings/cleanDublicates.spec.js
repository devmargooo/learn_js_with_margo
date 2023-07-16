import { cleanDublicates } from "./cleanDublicates"

describe("cleanDublicates", () => {
    it("return 'ab' for 'aaaabbbb'", () => {
        expect(cleanDublicates("aaaabbbb")).toBe('ab');
    })

    it("return 'aba' for 'aaaabbbbaaaaa'", () => {
        expect(cleanDublicates("aaaabbbbaaaaa")).toBe('aba');
    })
})