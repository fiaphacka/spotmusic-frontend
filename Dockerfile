# Imagem base
FROM node:14 AS build

# Diretório de trabalho
WORKDIR /app

# Copiando o arquivo package.json e package-lock.json para a pasta de trabalho
COPY package*.json ./

# Instalando as dependências do projeto
RUN npm install

# Copiando os arquivos do projeto para a pasta de trabalho
COPY . .

# Gerando a build de produção
RUN npm run build

# Imagem para ambiente de produção
FROM nginx:stable-alpine

# Copiando a build de produção para a pasta do nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copiando o arquivo de configuração do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expondo a porta que o aplicativo usará
EXPOSE 80

# Iniciando o servidor nginx
CMD ["nginx", "-g", "daemon off;"]
