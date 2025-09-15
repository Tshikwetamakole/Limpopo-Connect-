import { chromium } from 'playwright';
import { getAxeResults, injectAxe } from 'axe-playwright';

const URL = 'http://localhost:4321';

(async () => {
  let browser;
  try {
    browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    console.log(`Navigating to ${URL}...`);
    await page.goto(URL);

    console.log('Injecting Axe core...');
    await injectAxe(page);

    console.log('Running Axe accessibility audit...');
    const results = await getAxeResults(page);

    if (results.violations.length > 0) {
      console.error('Accessibility violations found:');
      console.error(JSON.stringify(results.violations, null, 2));
      process.exit(1);
    } else {
      console.log('No accessibility violations found.');
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
