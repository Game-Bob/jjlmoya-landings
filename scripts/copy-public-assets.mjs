import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const consumerRoot = packageRoot.includes("node_modules")
    ? join(packageRoot, "../../..")
    : packageRoot;
const publicRoot = join(consumerRoot, "public", "landings", "team");
const styleFiles = [
    "team-landing.css",
    "TeamHero.css",
    "CompanyWorks.css",
    "BobMasterPlan.css",
    "TeamComicScenes.css",
    "HumanTouch.css",
    "ProductManifesto.css",
    "BobModelBook.css",
    "SupportTransition.css",
    "MemoryWall.css",
    "TeamRoster.css",
    "BehindJoke.css",
];

const copies = [
    ["src/landing/team/assets", "assets"],
];

await mkdir(publicRoot, { recursive: true });

for (const [from, to] of copies) {
    await cp(join(packageRoot, from), join(publicRoot, to), {
        recursive: true,
        force: true,
        errorOnExist: false,
    });
}

const cssBundle = await Promise.all(
    styleFiles.map(async (file) => {
        const content = await readFile(join(packageRoot, "src", "landing", "team", "styles", file), "utf8");
        return `/* ${file} */\n${content.trim()}\n`;
    }),
);

await writeFile(join(publicRoot, "team.css"), `${cssBundle.join("\n")}\n`);
