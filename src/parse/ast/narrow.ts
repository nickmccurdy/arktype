import { rootIntersection } from "../../nodes/node.ts"
import type { asIn } from "../../scopes/type.ts"
import type { Problems } from "../../traverse/problems.ts"
import type { Domain, inferDomain } from "../../utils/domains.ts"
import type { inferDefinition, validateDefinition } from "../definition.ts"
import { parseDefinition } from "../definition.ts"
import type { distributable } from "./distributableFunction.ts"
import { distributeFunctionToNode } from "./distributableFunction.ts"
import type { PostfixParser, TupleExpression } from "./tuple.ts"

export const parseNarrowTuple: PostfixParser<"=>"> = (def, ctx) => {
    const inputNode = parseDefinition(def[0], ctx)
    return rootIntersection(
        inputNode,
        distributeFunctionToNode(
            def[2] as distributable<Narrow>,
            inputNode,
            ctx,
            "narrow"
        ),
        ctx.type
    )
}

export type Narrow<data = any> = (data: data, problems: Problems) => boolean

export type NarrowPredicate<data = any, narrowed extends data = data> = (
    data: data,
    problems: Problems
) => data is narrowed

export type validateNarrowTuple<def extends TupleExpression, $> = readonly [
    _: validateDefinition<def[0], $>,
    _: "=>",
    _: distributable<Narrow<asIn<inferDefinition<def[0], $>>>>
]

export type inferNarrow<inDef, narrow, $> = narrow extends {
    [domain in Domain]?: any
}
    ? {
          [domain in keyof narrow]: inferNarrowFunction<
              Extract<
                  asIn<inferDefinition<inDef, $>>,
                  inferDomain<domain & Domain>
              >,
              narrow[domain]
          >
      }[keyof narrow]
    : inferNarrowFunction<asIn<inferDefinition<inDef, $>>, narrow>

type inferNarrowFunction<input, narrow> = narrow extends (
    data: any,
    ...args: any[]
) => data is infer narrowed
    ? narrowed
    : input