import { describe, it } from "mocha"
import { type } from "../api.ts"
import { attest } from "../dev/attest/api.ts"

describe("allows", () => {
    it("base", () => {
        const t = type("number%2")
        const data: unknown = 4
        if (t.allows(data)) {
            // narrows correctly
            attest(data).typed as number
        } else {
            throw new Error()
        }
        attest(t.allows(5)).equals(false)
    })
})