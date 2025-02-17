import { shell } from "../runtime/main.js"
import { repoDirs } from "./common.js"

export const testBuild = (outDir: string) => {
    shell(`node ./dev/attest/cli.js --skipTypes --cmd mocha`, {
        cwd: outDir
    })
}
shell("pnpm build --test")
testBuild(repoDirs.mjsOut)
testBuild(repoDirs.cjsOut)
shell("pnpm build")
