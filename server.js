const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Define os diretórios base para arquivos públicos e imagens
const publicDir = path.join(__dirname, 'src', 'Public');
const imagesDir = path.join(__dirname, 'src', 'Images');

/**
 * Simula includes PHP no formato <?php include 'arquivo'; ?>
 * Substitui o include pelo conteúdo do arquivo correspondente.
 */
const processPhpIncludes = (content, basePath) => {
  return content.replace(
    /<\?php include\s+'(.+?)'\s*;\s*\?>/g,
    (match, includePath) => {
      try {
        const fullPath = path.join(basePath, includePath);
        return fs.readFileSync(fullPath, 'utf8'); // Lê o conteúdo do arquivo incluído
      } catch (e) {
        console.error(`Erro ao incluir ${includePath}:`, e);
        return ''; // Retorna vazio em caso de erro para não quebrar a página
      }
    }
  );
};

/**
 * Função que carrega e renderiza um arquivo .php como HTML,
 * aplicando o processamento de includes.
 */
const renderPhpFile = (fileName, res) => {
  const filePath = path.join(publicDir, fileName);

  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      console.error(`Erro ao ler ${fileName}:`, err);
      return res.status(500).send('Erro ao carregar a página');
    }

    const processedContent = processPhpIncludes(content, publicDir);
    res.send(processedContent); // Envia o HTML final para o cliente
  });
};

// ROTAS PRINCIPAIS

// Página inicial
app.get('/', (req, res) => {
  renderPhpFile('index.php', res);
});

// Página /play ou /play.php
app.get(['/play', '/play.php'], (req, res) => {
  renderPhpFile('play.php', res);
});

// Página /support ou /support.php
app.get(['/support', '/support.php'], (req, res) => {
  renderPhpFile('support.php', res);
});

// Rota genérica para qualquer página .php no diretório
app.get('/:page', (req, res) => {
  const fileName = `${req.params.page}.php`;
  const filePath = path.join(publicDir, fileName);

  // Verifica se o arquivo existe antes de tentar renderizar
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send('Página não encontrada');
    }

    renderPhpFile(fileName, res);
  });
});

// SERVE ARQUIVOS ESTÁTICOS (depois das rotas dinâmicas)

// Serve arquivos de CSS
app.use('/Css', express.static(path.join(publicDir, 'Css')));

// Serve arquivos de JavaScript
app.use('/JS', express.static(path.join(publicDir, 'JS')));

// Serve imagens
app.use('/Images', express.static(imagesDir));

// Serve qualquer outro arquivo estático genérico
app.use(express.static(publicDir));

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});