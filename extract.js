const fs = require('fs');

function extractPngFromSvg(svgPath, pngPath) {
    if (!fs.existsSync(svgPath)) return;
    const content = fs.readFileSync(svgPath, 'utf-8');
    const match = content.match(/data:image\/png;base64,([^"']+)/);
    if (match && match[1]) {
        const buffer = Buffer.from(match[1], 'base64');
        fs.writeFileSync(pngPath, buffer);
        console.log('Saved', pngPath);
    } else {
        console.log('No base64 found in', svgPath);
    }
}

extractPngFromSvg('./public/Zeal Logo.svg', './public/Zeal Logo.png');
extractPngFromSvg('./public/Logo nav.svg', './public/Logo nav.png');
