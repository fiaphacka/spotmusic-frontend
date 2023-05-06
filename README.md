# Spot-music front-end

Este projeto é um aplicativo front-end desenvolvido em React que busca e exibe informações de músicas, como ID da música, título, artista e gênero, obtidas de um back-end.

## Funcionalidades

- Busca informações de músicas do back-end
- Exibe as informações em uma tabela

## Requisitos

- Node.js
- React

## Instalação

1. Clone o repositório em sua máquina local:

```bash
git clone https://github.com/seu_usuario/repositorio.git
```

2. Entre no diretório do projeto:

```bash
cd repositorio
```

3. Instale as dependências do projeto:

```bash
npm install
```

## Configuração

Configure a variável `$BACKEND_URL` no arquivo `App.js` com a URL do back-end que fornece os dados das músicas.

```javascript
// App.js
fetch("$BACKEND_URL")
```

## Execução

Execute o aplicativo localmente usando o seguinte comando:

```bash
npm start
```

O aplicativo será iniciado no modo de desenvolvimento e estará disponível no endereço `http://localhost:3000` em seu navegador.

## Contribuindo

Sinta-se à vontade para contribuir com este projeto. Faça um fork do repositório, crie sua branch, faça suas alterações e, em seguida, abra um Pull Request.