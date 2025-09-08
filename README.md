# AI Content Summarizer

AI-powered summarizer with FastAPI backend + Hugging Face API + React (Tailwind) frontend.

## 🌟 Features
- Hugging Face Inference API (default: facebook/bart-large-cnn)
- FastAPI backend (`/api/summarize`)
- React + Tailwind frontend (Dodger Blue theme, animated background)
- Dockerized for easy deployment
- One-click Deploy to Render

---

## 🚀 One-Click Deploy (Render)

Click below to deploy on Render:

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

---

## 🖥 Run Locally

### Prerequisites
- Python 3.10+
- Node.js 16+
- Hugging Face API key (`hf_...`)

### Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate   # or .venv\Scripts\Activate on Windows
pip install -r requirements.txt
export HUGGINGFACE_API_KEY=hf_xxx   # PowerShell: $env:HUGGINGFACE_API_KEY="hf_xxx"
uvicorn main:app --reload --port 8000
```

### Frontend (Dev Mode)
```bash
cd frontend
npm install
npm run dev
# Open http://localhost:5173
```

### Frontend (Build for Deployment)
```bash
cd frontend
npm run build
cp -r dist/* ../backend/static/
```

Now FastAPI serves the built frontend at `http://localhost:8000`.

---

## 🐳 Docker

```bash
docker-compose up --build
```
