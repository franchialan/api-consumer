FROM node:14
LABEL author="Álan Franchi"
# Diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar os arquivos de dependências para o diretório de trabalho
COPY package.json .

# Instalar as dependências
RUN npm install
RUN npm init -y
RUN npm install express
RUN npm install nodemon
RUN npm install cors
RUN npm install axios
# Copiar todos os arquivos do diretório atual para o diretório de trabalho do contêiner
COPY . .

# Expôr a porta 3000 usada pelo servidor
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["node", "server.js"]