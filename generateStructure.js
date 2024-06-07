const fs = require('fs');
const path = require('path');

// Función para generar la estructura del directorio en formato Markdown
function generateStructure(dir, prefix = '') {
    let structure = '';
    const files = fs.readdirSync(dir);

    files.forEach((file, index) => {
        const filePath = path.join(dir, file);
        
        // Omitir las carpetas .git y node_modules
        if (file === '.git' || file === 'node_modules' || file === 'dist') {
            return;
        }

        const isLast = index === files.length - 1;
        const newPrefix = prefix + (isLast ? '└── ' : '├── ');
        
        structure += `${newPrefix}${file}\n`;

        if (fs.statSync(filePath).isDirectory()) {
            structure += generateStructure(filePath, prefix + (isLast ? '    ' : '│   '));
        }
    });

    return structure;
}

// Directorio del proyecto (cambia esto si es necesario)
const projectDir = __dirname;
const structure = generateStructure(projectDir);

// Define el nombre del archivo y la ruta
const outputDir = path.join(__dirname);
const outputPath = path.join(outputDir, 'PROJECT_STRUCTURE.md');

// Escribe la estructura en el archivo
const markdownContent = '```\n' + structure + '\n```';
fs.writeFileSync(outputPath, markdownContent, 'utf8');
console.log('Archivo md generado en:', outputDir);
