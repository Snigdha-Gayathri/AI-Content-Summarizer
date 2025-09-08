from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os
import requests

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files (React build output)
if os.path.exists("static"):
    app.mount("/", StaticFiles(directory="static", html=True), name="static")

HUGGINGFACE_API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn"
API_KEY = os.getenv("HUGGINGFACE_API_KEY")

@app.post("/api/summarize")
async def summarize(request: Request):
    body = await request.json()
    text = body.get("text", "")

    headers = {"Authorization": f"Bearer {API_KEY}"}
    response = requests.post(HUGGINGFACE_API_URL, headers=headers, json={"inputs": text})

    if response.status_code != 200:
        return {"error": response.text}

    return response.json()
