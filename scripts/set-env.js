const fs = require('fs');
const path = require('path');

const envName = (process.argv[2] || process.env.APP_ENV || 'dev').toLowerCase();
const available = ['dev', 'qa', 'prod'];

if (!available.includes(envName)) {
  console.error(`Unknown environment: ${envName}. Use one of: ${available.join(', ')}`);
  process.exit(1);
}

const rootDir = path.resolve(__dirname, '..');
const sourceFile = path.join(rootDir, 'env', `${envName}.env`);

if (!fs.existsSync(sourceFile)) {
  console.error(`Environment file not found: ${sourceFile}`);
  process.exit(1);
}

const envContent = fs.readFileSync(sourceFile, 'utf8');

const targetFiles = [
  path.join(rootDir, '.env'),
  path.join(rootDir, 'apps', 'native', '.env'),
  path.join(rootDir, 'apps', 'web', '.env.local'),
];

for (const target of targetFiles) {
  fs.writeFileSync(target, envContent, 'utf8');
  console.log(`Wrote ${envName.toUpperCase()} env to ${path.relative(rootDir, target)}`);
}
