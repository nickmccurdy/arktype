import type { TypeConfig } from "../type.js"
import { Path } from "../utils/paths.js"
import type { Problem, ProblemCode, ProblemParameters } from "./problems.js"
import { Problems, problemsByCode } from "./problems.js"

export class CheckResult<out = unknown, valid extends boolean = boolean> {
    declare data: valid extends true ? out : never
    declare problems: valid extends true ? never : Problems

    constructor(valid: valid, result: valid extends true ? out : Problems) {
        if (valid) {
            this.data = result as never
        } else {
            this.problems = result as never
        }
    }
}

export class TraversalState {
    basePath = new Path()
    problems: Problems = new Problems()
    entriesToPrune: [data: Record<string, unknown>, key: string][] = []
    // config: TypeConfig

    // readonly rootScope: Scope

    // Qualified
    #seen: { [name in string]?: object[] } = {}

    constructor() {
        // this.rootScope = type.scope
        // this.config = type.config
    }

    // finalize(data: unknown): CheckResult {
    //     if (this.problems.count) {
    //         return new CheckResult(this.problems)
    //     }
    //     for (const [o, k] of this.entriesToPrune) {
    //         delete o[k]
    //     }
    //     return new CheckResult(data)
    // }

    // TODO: add at custom path

    mustBe(mustBe: string, data: unknown, path: Path) {
        return this.addProblem("custom", mustBe, data, path)
    }

    addProblem<code extends ProblemCode>(
        code: code,
        ...args: ProblemParameters<code>
    ) {
        // TODO: fix
        const problem = new problemsByCode[code](
            ...(args as [any, any, any])
        ) as any as Problem
        return this.problems.add(problem)
    }

    reject<code extends ProblemCode>(
        code: code,
        ...args: ProblemParameters<code>
    ) {
        return !this.addProblem(code, ...args)
    }

    // traverseKey(key: stringKeyOf<this["data"]>, node: TraversalNode): boolean {
    //     const lastData = this.data
    //     this.data = this.data[key] as data
    //     this.path.push(key)
    //     const isValid = traverse(node, this)
    //     this.path.pop()
    //     if (lastData[key] !== this.data) {
    //         lastData[key] = this.data as any
    //     }
    //     this.data = lastData
    //     return isValid
    // }

    // traverseResolution(name: string): boolean {
    //     const resolution = this.type.scope.resolve(name)
    //     const id = resolution.qualifiedName
    //     // this assignment helps with narrowing
    //     const data = this.data
    //     const isObject = hasDomain(data, "object")
    //     if (isObject) {
    //         const seenByCurrentType = this.#seen[id]
    //         if (seenByCurrentType) {
    //             if (seenByCurrentType.includes(data)) {
    //                 // if data has already been checked by this alias as part of
    //                 // a resolution higher up on the call stack, it must be valid
    //                 // or we wouldn't be here
    //                 return true
    //             }
    //             seenByCurrentType.push(data)
    //         } else {
    //             this.#seen[id] = [data]
    //         }
    //     }
    //     const lastType = this.type
    //     this.type = resolution
    //     const isValid = traverse(resolution.flat, this)
    //     this.type = lastType
    //     if (isObject) {
    //         this.#seen[id]!.pop()
    //     }
    //     return isValid
    // }

    // traverseBranches(branches: TraversalEntry[][]): boolean {
    //     const lastFailFast = this.failFast
    //     this.failFast = true
    //     const lastProblems = this.problems
    //     const branchProblems = new Problems(this)
    //     this.problems = branchProblems
    //     const lastPath = this.path
    //     const lastKeysToPrune = this.entriesToPrune
    //     let hasValidBranch = false
    //     for (const branch of branches) {
    //         this.path = new Path()
    //         this.entriesToPrune = []
    //         if (checkEntries(branch, this)) {
    //             hasValidBranch = true
    //             lastKeysToPrune.push(...this.entriesToPrune)
    //             break
    //         }
    //     }
    //     this.path = lastPath
    //     this.entriesToPrune = lastKeysToPrune
    //     this.problems = lastProblems
    //     this.failFast = lastFailFast
    //     return hasValidBranch || !this.problems.add("branches", branchProblems)
    // }
}

export type TraversalConfig = {
    [k in keyof TypeConfig]-?: TypeConfig[k][]
}
