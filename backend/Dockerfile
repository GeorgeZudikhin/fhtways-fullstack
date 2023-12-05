# backend/Dockerfile

# Basis-Image
FROM python:3.9

# Arbeitsverzeichnis im Container festlegen
WORKDIR /app

# Abhängigkeiten installieren
COPY requirements.txt /app/
RUN pip install -r requirements.txt

# Quellcode kopieren
COPY . /app

# Start-Befehl
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

