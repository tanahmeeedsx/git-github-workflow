const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log('📦 Starting build process...');

const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Copy source files
copyDir(path.join(__dirname, 'src'), path.join(distDir, 'src'));

// Copy public assets if available
const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  copyDir(publicDir, distDir);
}

// Copy coverage report if generated
const coverageDir = path.join(__dirname, 'coverage', 'lcov-report');
if (fs.existsSync(coverageDir)) {
  copyDir(coverageDir, path.join(distDir, 'coverage'));
}

// Write build info
const buildInfo = {
  name: 'simple-js-ci-demo',
  builtAt: new Date().toISOString(),
  status: 'production-ready'
};
fs.writeFileSync(path.join(distDir, 'build-info.json'), JSON.stringify(buildInfo, null, 2));

console.log('✅ Build completed successfully into dist/');
