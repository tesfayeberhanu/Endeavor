import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import test from "node:test";

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

async function withServer(run) {
  const server = spawn("npx", ["next", "start", "-p", String(PORT)], {
    cwd: new URL("..", import.meta.url),
    stdio: "pipe",
  });

  try {
    const deadline = Date.now() + 30_000;
    while (Date.now() < deadline) {
      try {
        await fetch(BASE_URL);
        break;
      } catch {
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
    }

    return await run();
  } finally {
    server.kill();
  }
}

test("server-renders the Endeavor landing page", async () => {
  await withServer(async () => {
    const response = await fetch(BASE_URL);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    assert.match(html, /<title>Endeavor \| A Tradition of Quality Cleaning<\/title>/i);
    assert.match(html, /A tradition of quality cleaning/);
    assert.match(html, /What can we clean for you\?/);
    assert.match(html, /Residential/);
    assert.match(html, /Commercial/);
    assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/i);
  });
});

test("finished source has no starter preview dependency", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /serviceCards/);
  assert.match(page, /popularServices/);
  assert.match(layout, /Endeavor/);
  assert.doesNotMatch(`${page}\n${layout}\n${packageJson}`, /react-loading-skeleton|codex-preview|SkeletonPreview|vinext/);
});
