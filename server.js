const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const publicDir = path.join(__dirname, 'src', 'Public');
const imagesDir = path.join(__dirname, 'src', 'Images');

// Função para processar includes PHP simulados
const processPhpIncludes = (content, basePath) => {
  return content.replace(
    /<\?php include\s+'(.+?)'\s*;\s*\?>/g,
    (match, includePath) => {
      try {
        const fullPath = path.join(basePath, includePath);
        return fs.readFileSync(fullPath, 'utf8');
      } catch (e) {
        console.error(`Erro ao incluir ${includePath}:`, e);
        return '';
      }
    }
  );
};

// Função genérica para renderizar arquivos PHP
const renderPhpFile = (fileName, res) => {
  const filePath = path.join(publicDir, fileName);

  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      console.error(`Erro ao ler ${fileName}:`, err);
      return res.status(500).send('Erro ao carregar a página');
    }

    const processedContent = processPhpIncludes(content, publicDir);
    res.send(processedContent);
  });
};

// ROTAS PHP PRIMEIRO
app.get('/', (req, res) => {
  renderPhpFile('index.php', res);
});

app.get(['/play', '/play.php'], (req, res) => {
  renderPhpFile('play.php', res);
});

app.get(['/support', '/support.php'], (req, res) => {
    renderPhpFile('support.php', res);
  });

app.get('/:page', (req, res) => {
  const fileName = `${req.params.page}.php`;
  const filePath = path.join(publicDir, fileName);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send('Página não encontrada');
    }

    renderPhpFile(fileName, res);
  });
});

// AGORA sim, depois das rotas .php, você pode servir arquivos estáticos
app.use('/Css', express.static(path.join(publicDir, 'Css')));
app.use('/JS', express.static(path.join(publicDir, 'JS')));
app.use('/Images', express.static(imagesDir));
app.use(express.static(publicDir)); // genérico, por último!

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});