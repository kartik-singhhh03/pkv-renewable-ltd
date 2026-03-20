import fs from 'fs';
import path from 'path';

const root = 'c:\\Users\\Lenovo\\Desktop\\SaaS-Projects\\pkv-renewable-main';
const dirs = [
  path.join(root, 'client', 'components', 'sections'),
  path.join(root, 'client', 'pages')
];

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content.replace(/viewport=\{\{\s*once:\s*true\s*\}\}/g, 'viewport={{ once: false, amount: 0.15 }}');
  newContent = newContent.replace(/viewport=\{\{\s*once:\s*true\s*,\s*(.*?)\s*\}\}/g, 'viewport={{ once: false, amount: 0.15, $1 }}');
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Updated', filePath);
  }
}

function walk(dir) {
  if(!fs.existsSync(dir)) { console.log('Dir missing:', dir); return; }
  const files = fs.readdirSync(dir);
  for(const file of files) {
    const full = path.join(dir, file);
    if(fs.statSync(full).isDirectory()) walk(full);
    else if(full.endsWith('.tsx') && !full.includes('HeroSection.tsx')) replaceInFile(full);
  }
}

dirs.forEach(walk);
console.log('Done script2');
