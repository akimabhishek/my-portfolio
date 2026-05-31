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
  content = content.replace(/border-white\//g, 'border-black/');
  content = content.replace(/bg-white\//g, 'bg-black/');
  content = content.replace(/text-white\//g, 'text-black/');
  content = content.replace(/shadow-white\//g, 'shadow-black/');
  content = content.replace(/via-white\//g, 'via-black/');
  fs.writeFileSync(file, content);
});
console.log('Done mapping white/ to black/');
