import { execSync } from 'child_process';
import { readFileSync, existsSync } from 'fs';
import { strict as assert } from 'assert';

try {
  // Step 1: Run the build command
  console.log('Running `npm run build`...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build completed successfully.');

  // Step 2: Verify asset paths in dist/index.html
  console.log('Verifying asset paths in dist/index.html...');
  const htmlContent = readFileSync('dist/index.html', 'utf-8');

  // A simple regex to check for absolute paths for Astro assets.
  // This looks for href or src attributes starting with /_astro/
  const assetPathRegex = /(href|src)="\S*"/g;
  const matches = htmlContent.match(assetPathRegex);

  assert(matches, 'No asset paths found in index.html');

  const absolutePathOk = matches.every(match => match.includes('href="/_astro/') || match.includes('src="/_astro/') || !match.includes('_astro'));

  assert(absolutePathOk, 'Found relative asset paths in index.html. All paths should be absolute.');
  console.log('Asset paths are absolute, as expected.');

  // Step 3: Verify CNAME file exists in dist/
  console.log('Verifying CNAME file in dist/...');
  const cnameExists = existsSync('dist/CNAME');
  assert(cnameExists, 'CNAME file does not exist in dist/ directory.');
  console.log('CNAME file exists in dist/, as expected.');

  console.log('\n✅ Build verification successful!');
  process.exit(0);

} catch (error) {
  console.error('\n❌ Build verification failed:');
  console.error(error.message);
  process.exit(1);
}
