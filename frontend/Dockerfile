# frontend/Dockerfile

# Basis-Image
FROM node:latest

# Arbeitsverzeichnis im Container festlegen
WORKDIR /app

# Abhängigkeiten installieren
COPY package.json /app/
COPY package-lock.json /app/

RUN npm install

# Quellcode kopieren
COPY . /app

# Start-Befehl
CMD ["npm", "start"]

