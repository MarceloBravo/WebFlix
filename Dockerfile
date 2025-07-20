# Usar una imagen base de Node.js oficial y ligera
FROM node:18-slim

# Crear y establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci --only=production

# Copiar el código fuente
COPY . .

# Definir la variable de entorno para el puerto
ENV PORT=3000

# Exponer el puerto
EXPOSE 3000

# Definir el comando para ejecutar la aplicación
CMD ["node", "app.js"]
