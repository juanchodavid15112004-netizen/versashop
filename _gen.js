const fs = require('fs');
const html = fs.readFileSync('C:/Users/juanc/Downloads/YOQUESE/index.html', 'utf8');
const parts = [];
let i = html.indexOf('Esta oferta termina en:');
if (i >= 0) parts.push('COUNTDOWN:\n' + html.slice(i, i + 1800));
i = html.indexOf('bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block');
if (i >= 0) parts.push('COUNTDOWN2:\n' + html.slice(i, i + 1800));
parts.push('TAIL:\n' + html.slice(-800));
fs.writeFileSync('C:/Users/juanc/Downloads/YOQUESE/snippets.txt', parts.join('\n'), 'utf8');
