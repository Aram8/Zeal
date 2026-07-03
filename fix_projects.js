const fs = require('fs');
const path = './src/components/sections/ProjectsSection.tsx';
let content = fs.readFileSync(path, 'utf8');

const validImages = [
  'Alaska.jpg', 'Azura.jpg', 'Caramel.jpg', 'Ground Zero.jpg', 
  'Rolls.jpg', 'Terra.jpg', 'The Garden.jpg', 'Unicorn.jpg'
];

// We will use a regex to match each project object
// Format: { id: X, ... }
const projectRegex = /\{\s*id:\s*\d+,[\s\S]*?(?=\},\s*\{|\}\s*\])/g;

content = content.replace(projectRegex, (match) => {
  // Check if it has a blank description OR missing image
  const hasBlankDesc = /description:\s*""/.test(match);
  
  // Extract image path
  const imgMatch = match.match(/images:\s*\["\/projects\/(.*?)"\]/);
  const imgName = imgMatch ? imgMatch[1] : null;
  const isMissingPic = imgName && !validImages.includes(imgName);

  if (hasBlankDesc || isMissingPic) {
    // Comment out the entire object
    return match.split('\n').map(line => '// ' + line).join('\n');
  }
  return match;
});

fs.writeFileSync(path, content, 'utf8');
console.log('Projects commented out.');
