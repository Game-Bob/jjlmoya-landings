import { cp, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const consumerRoot = packageRoot.includes("node_modules")
    ? join(packageRoot, "../../..")
    : packageRoot;
const publicRoot = join(consumerRoot, "public", "landings");
const srcLandingRoot = join(packageRoot, "src", "landing");

const landings = await readdir(srcLandingRoot);

for (const name of landings) {
    const landingPublicDir = join(publicRoot, name);
    await mkdir(landingPublicDir, { recursive: true });

    const stylesRoot = join(srcLandingRoot, name, "styles");
    let hasStyles = false;
    try {
        const styleFiles = (await readdir(stylesRoot)).filter((f) =>
            f.endsWith(".css"),
        );
        if (styleFiles.length > 0) {
            const cssBundle = await Promise.all(
                styleFiles.map(async (file) => {
                    const content = await readFile(join(stylesRoot, file), "utf8");
                    return `/* ${file} */\n${content.trim()}\n`;
                }),
            );
            await writeFile(
                join(landingPublicDir, `${name}.css`),
                `${cssBundle.join("\n")}\n`,
            );
            hasStyles = true;
        }
    } catch {
        // no styles dir
    }

    if (!hasStyles) {
        console.log(`[landings] No styles found for "${name}"`);
    }

    const assetsDir = join(srcLandingRoot, name, "assets");
    if (existsSync(assetsDir)) {
        await cp(assetsDir, join(landingPublicDir, "assets"), {
            recursive: true,
            force: true,
            errorOnExist: false,
        });
    }
}
