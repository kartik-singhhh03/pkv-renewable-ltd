const fs = require('fs');
const path = require('path');

const dirs = [
  'client/components/sections',
  'client/pages'
];

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Convert basic ones
  let newContent = content.replace(/viewport=\{\{\s*once:\s*true\s*\}\}/g, 'viewport={{ once: false, amount: 0.15 }}');
  
  // Convert ones with margins or other props
  newContent = newContent.replace(/viewport=\{\{\s*once:\s*true\s*,\s*(.*?)\s*\}\}/g, 'viewport={{ once: false, amount: 0.15, $1 }}');
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Updated', filePath);
  }
}

function walk(dir) {
  if(!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for(const file of files) {
    const full = path.join(dir, file);
    if(fs.statSync(full).isDirectory()) {
      walk(full);
    } else if(full.endsWith('.tsx') && !full.includes('HeroSection.tsx')) {
      replaceInFile(full);
    }
  }
}

dirs.forEach(walk);
console.log('Complete');
