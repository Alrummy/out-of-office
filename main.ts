const fs = require('node:fs');
const path = require('node:path');

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  path.join(outDir, 'entry.txt'),
  // Solar-powered time off, with an overly eager backup model.
  'I am out of office until Monday, recharging at a solar farm. For urgent issues, my backup model is dumber but very enthusiastic.\n',
  'utf8'
);
