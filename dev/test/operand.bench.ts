import { scope, type } from "../../src/main.js"
import { bench, suite } from "../attest/src/main.js"

suite("parse/str/operand", () => {
    suite("enclosed", () => {
        bench("single-quoted", () => {
            const _ = type("'nineteen characters'")
        })
            .median([1.61, "us"])
            .type([558, "instantiations"])
        bench("double-quoted", () => {
            const _ = type('"nineteen characters"')
        })
            .median([1.48, "us"])
            .type([558, "instantiations"])
        bench("regex literal", () => {
            const _ = type("/nineteen characters/")
        })
            .median([1.73, "us"])
            .type([558, "instantiations"])
    })
    suite("unenclosed", () => {
        bench("keyword", () => {
            const _ = type("string")
        })
            .median([1, "us"])
            .type([156, "instantiations"])
        const $ = scope({ strung: "string" })
        bench("alias", () => {
            const _ = $.type("strung")
        })
            .median([1.11, "us"])
            .type([1230, "instantiations"])
        bench("number", () => {
            const _ = type("-98765.4321")
        })
            .median([1.5, "us"])
            .type([482, "instantiations"])
        bench("bigint", () => {
            const _ = type("-987654321n")
        })
            .median([1.5, "us"])
            .type([489, "instantiations"])
    })
})
