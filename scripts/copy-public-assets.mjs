import { cp, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const consumerRoot = process.env.INIT_CWD || process.cwd();
const publicRoot = join(consumerRoot, "public", "jjlmoya-landings");

const copies = [
    ["src/landing/team/assets", "assets/team"],
    ["src/landing/team/styles", "styles/team"],
];

await mkdir(publicRoot, { recursive: true });

for (const [from, to] of copies) {
    await cp(join(packageRoot, from), join(publicRoot, to), {
        recursive: true,
        force: true,
        errorOnExist: false,
    });
}
