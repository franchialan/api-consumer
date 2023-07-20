FROM nginx:alpine
LABEL author="Álan Franchi"
# Copiar todos os arquivos do diretório atual para o diretório de trabalho do contêiner
COPY . /usr/share/nginx/html

# A porta 80 é a porta padrão para o Nginx servir conteúdo
EXPOSE 80

# O comando CMD não é necessário, pois o contêiner do Nginx inicia automaticamente e começa a servir o conteúdo na porta 80