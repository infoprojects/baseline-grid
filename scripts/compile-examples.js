// Compiles every example in scss/ with Dart Sass and fails if one of them breaks.
// Guards two things libsass allowed and Dart Sass does not: an @import nested inside a control directive,
// and an assignment inside @if that has to escape its block. The second one fails silently, emitting
// max-width: 0px instead of an error, so it is checked separately.
const fs = require('fs');
const path = require('path');
const sass = require('sass');

const scssDir = path.join(__dirname, '..', 'scss');
const examples = fs.readdirSync(scssDir).filter((file) => file.endsWith('.scss') && !file.startsWith('_'));

if (examples.length === 0) {
  console.error('No examples found in scss/');
  process.exit(1);
}

let failed = 0;

for (const example of examples) {
  const file = path.join(scssDir, example);

  try {
    const result = sass.compile(file, { loadPaths: [scssDir], logger: sass.Logger.silent });

    if (result.css.includes('max-width: 0px')) {
      console.error(`FAIL ${example} :: max-width: 0px, widths are not coming from the viewport config`);
      failed++;
      continue;
    }

    console.log(`ok   ${example}`);
  } catch (error) {
    console.error(`FAIL ${example} :: ${error.message.split('\n')[0]}`);
    failed++;
  }
}

console.log(`\n${examples.length - failed}/${examples.length} examples compiled with Dart Sass ${sass.info.split('\t')[1]}`);

if (failed > 0) {
  process.exit(1);
}
