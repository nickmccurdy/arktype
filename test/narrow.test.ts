import { describe, it } from "mocha"
import type { Type } from "../api.ts"
import { type } from "../api.ts"
import { attest } from "../dev/attest/api.ts"
import type { assertEqual } from "../src/utils/generics.ts"

describe("narrow", () => {
    it("functional", () => {
        const isOdd = (n: number) => n % 2 === 1
        const t = type(["number", "=>", isOdd])
        attest(t.infer).typed as number
        attest(t.node).equals({ number: { narrow: isOdd as any } })
    })
    it("functional predicate", () => {
        const t = type(["number", "=>", (n): n is 1 => n === 1])
        attest(t).typed as Type<1>
    })
    it("functional parameter inference", () => {
        type Expected = number | boolean[]
        const validateNumberOrBooleanList = <t>(t: assertEqual<t, Expected>) =>
            true
        attest(
            type([
                "number|boolean[]",
                "=>",
                (data) => validateNumberOrBooleanList(data)
            ]).infer
        ).typed as number | boolean[]
        attest(() => {
            type([
                "number|boolean[]",
                "=>",
                // @ts-expect-error
                (data: number | string[]) => !!data
            ])
        }).type.errors("Type 'boolean' is not assignable to type 'string'.")
    })
    it("distributed", () => {
        const distributedBlacklist = {
            string: (s: string) => s !== "drop tables",
            number: (n: number) => !Number.isNaN(n)
        }
        const t = type(["string|number", "=>", distributedBlacklist])
        attest(t.infer).typed as string | number
        attest(t.node).equals({
            string: { narrow: distributedBlacklist.string },
            number: { narrow: distributedBlacklist.number }
        })
    })
    it("distributed predicates", () => {
        const t = type([
            "string|number",
            "=>",
            {
                // with predicate is narrowed
                number: (n): n is 0 => n === 0,
                // without predicate is allowed but not narrowed
                string: (s) => s === "zero"
            }
        ])
        attest(t).typed as Type<0 | string>
    })
    it("distributed parameter inference", () => {
        const validateInferredAsZero = (input: 0) => !input
        attest(() => {
            type([
                "0|boolean[]",
                "=>",
                {
                    number: (n) => validateInferredAsZero(n),
                    // @ts-expect-error bad parameter type
                    object: (data: string[]) => !!data,
                    // @ts-expect-error domain not in original type
                    string: (data) => data === ""
                }
            ])
        }).type.errors("Type 'boolean[]' is not assignable to type 'string[]'.")
    })
    it("narrow problem", () => {
        const palindrome = type([
            "string",
            "=>",
            (s, problems) =>
                s === [...s].reverse().join("")
                    ? true
                    : !problems.mustBe("a palindrome")
        ])
        attest(palindrome).typed as Type<string>
        attest(palindrome("dad").data).snap("dad")
        attest(palindrome("david").problems?.summary).snap(
            "Must be a palindrome (was 'david')"
        )
    })
})