const fs = require('fs');
const path = require('path');

function replaceInDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && file !== 'node_modules' && file !== '.next') {
            replaceInDirectory(fullPath);
        } else if (stat.isFile() && (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx'))) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content.replace(/Creatify AIlogo\.png/g, 'logo.png').replace(/creatifyailogo\.png/g, 'logo.png');
            
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log('Updated: ' + fullPath);
            }
        }
    }
}

replaceInDirectory(path.join(__dirname, 'frontend/src'));
console.log('Replacement complete.');
