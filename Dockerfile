FROM python:3.10-slim

WORKDIR /app

COPY backend/ ./backend/
COPY frontend/ ./frontend/

RUN pip install -r backend/requirements.txt

WORKDIR /app/frontend
RUN npm install && npm run build

WORKDIR /app/backend
RUN mkdir static && cp -r ../frontend/dist/* ./static/

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
