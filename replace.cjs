const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/border-black\//g, 'border-white/');
  content = content.replace(/bg-black\//g, 'bg-white/');
  content = content.replace(/text-black\//g, 'text-white/');
  content = content.replace(/shadow-black\//g, 'shadow-white/');
  content = content.replace(/via-black\//g, 'via-white/');
  fs.writeFileSync(file, content);
});
console.log('Done');
