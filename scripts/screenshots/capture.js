/**
 * Capture README screenshots of the TMHS Digital site.
 *
 * Drives an installed Chrome/Edge via puppeteer-core (no browser download).
 *
 * Usage:
 *   npm install            # once, inside scripts/screenshots/
 *   npm run shoot          # captures the live site into ../../docs/screenshots
 *
 * Configuration (all optional):
 *   SITE_URL     URL to capture        (default: the live GitHub Pages site)
 *   OUT_DIR      output directory      (default: ../../docs/screenshots)
 *   CHROME_PATH  browser executable    (default: auto-detected)
 *
 * Example against a local dev server:
 *   SITE_URL=http://localhost:8000 npm run shoot
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const SITE_URL = process.env.SITE_URL || 'https://tmhsdigital.github.io/editorial-agency-frontend-demo/';
const OUT_DIR = process.env.OUT_DIR || path.resolve(__dirname, '../../docs/screenshots');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Locate a Chromium-based browser, preferring CHROME_PATH. */
function findBrowser() {
  const candidates = [
    process.env.CHROME_PATH,
    // Windows
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    // macOS
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    // Linux
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].filter(Boolean);

  const found = candidates.find((p) => fs.existsSync(p));
  if (!found) {
    throw new Error(
      'No Chrome/Edge found. Set CHROME_PATH to your browser executable.'
    );
  }
  return found;
}

/** Scroll the page top-to-bottom so any lazy assets / reveals settle. */
async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const step = 400;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        y += step;
        if (y >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 120);
    });
  });
  await sleep(900);
  await page.evaluate(() => window.scrollTo(0, 0));
  await sleep(600);
}

/** Screenshot a single element by selector. */
async function shootElement(page, selector, file) {
  const el = await page.$(selector);
  if (!el) {
    console.log('  ! missing selector, skipped:', selector);
    return;
  }
  await el.evaluate((node) => node.scrollIntoView({ block: 'center' }));
  await sleep(700);
  await el.screenshot({ path: path.join(OUT_DIR, file) });
  console.log('  +', file);
}

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const executablePath = findBrowser();
  console.log('Browser:', executablePath);
  console.log('Target :', SITE_URL);
  console.log('Output :', OUT_DIR);

  const browser = await puppeteer.launch({
    executablePath,
    headless: 'new',
    args: ['--hide-scrollbars', '--no-sandbox'],
  });

  // ---------- Desktop ----------
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto(SITE_URL, { waitUntil: 'networkidle0', timeout: 90000 });
  await sleep(1200);

  // Hero, captured at the very top so the sticky header sits flush.
  await page.evaluate(() => window.scrollTo(0, 0));
  await sleep(400);
  await page.screenshot({
    path: path.join(OUT_DIR, 'hero.png'),
    clip: { x: 0, y: 0, width: 1440, height: 880 },
  });
  console.log('  + hero.png');

  await autoScroll(page);

  // Hide the sticky header so it doesn't overlap mid-section captures.
  await page.evaluate(() => {
    const h = document.querySelector('header.bar');
    if (h) h.style.display = 'none';
  });

  await shootElement(page, '#work', 'services.png');
  await shootElement(page, '#proof', 'proof.png');
  await page.close();

  // ---------- Mobile ----------
  const m = await browser.newPage();
  await m.setViewport({ width: 414, height: 896, deviceScaleFactor: 2, isMobile: true });
  await m.goto(SITE_URL, { waitUntil: 'networkidle0', timeout: 90000 });
  await sleep(1200);
  await m.screenshot({
    path: path.join(OUT_DIR, 'mobile.png'),
    clip: { x: 0, y: 0, width: 414, height: 880 },
  });
  console.log('  + mobile.png');

  await browser.close();
  console.log('Done.');
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
