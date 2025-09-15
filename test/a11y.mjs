import { chromium } from 'playwright';
import { getAxeResults, injectAxe } from 'axe-playwright';

const URLS = ['http://localhost:4321', 'http://localhost:4321/contact'];

(async () => {
  let browser;
  try {
    browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    let allViolations = [];

    for (const url of URLS) {
      console.log(`\nNavigating to ${url}...`);
      await page.goto(url);

      console.log('Injecting Axe core...');
      await injectAxe(page);

      console.log('Running Axe accessibility audit...');
      const results = await getAxeResults(page);

      if (results.violations.length > 0) {
        console.error(`Accessibility violations found on ${url}:`);
        console.error(JSON.stringify(results.violations, null, 2));
        allViolations.push(...results.violations);
      } else {
        console.log(`No accessibility violations found on ${url}.`);
      }
    }

    if (allViolations.length > 0) {
      console.error(`\nTotal accessibility violations found: ${allViolations.length}`);
      process.exit(1);
    } else {
      console.log('\nAll pages passed accessibility checks.');
    }

  } catch (error) {
    console.error('An error occurred during the accessibility test:', error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
})();
