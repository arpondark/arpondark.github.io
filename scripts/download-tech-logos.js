const fs = require('fs');
const path = require('path');
const https = require('https');

const techLogos = [
  {
    name: 'react',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.png'
  },
  {
    name: 'nextjs',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.png'
  },
  {
    name: 'nodejs',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.png'
  },
  {
    name: 'typescript',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.png'
  },
  {
    name: 'python',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.png'
  },
  {
    name: 'tensorflow',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.png'
  },
  {
    name: 'docker',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.png'
  },
  {
    name: 'mongodb',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.png'
  },
  {
    name: 'vscode',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.png'
  },
  {
    name: 'git',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.png'
  },
  {
    name: 'aws',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
  },
  {
    name: 'tailwind',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
  }
];

// Create tech directory if it doesn't exist
const techDir = path.join(process.cwd(), 'public', 'tech');
if (!fs.existsSync(techDir)) {
  fs.mkdirSync(techDir, { recursive: true });
}

// Download each logo
techLogos.forEach(logo => {
  const filePath = path.join(techDir, `${logo.name}.png`);
  
  https.get(logo.url, (response) => {
    if (response.statusCode === 200) {
      const file = fs.createWriteStream(filePath);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${logo.name} logo`);
      });
    } else {
      console.error(`Failed to download ${logo.name} logo: ${response.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${logo.name} logo:`, err.message);
  });
}); 