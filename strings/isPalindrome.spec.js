import { isPalindrome } from "./isPalindrome"

describe("isPalindrome", () => {
    it("return true for 'radar'", () => {
        expect(isPalindrome("radar")).toBe(true);
    })

    it("return false for 'car'", () => {
        expect(isPalindrome("car")).toBe(false);
    })
})