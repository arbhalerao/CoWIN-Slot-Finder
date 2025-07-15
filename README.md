# CoWIN Slot Finder

A web application to discover available COVID-19 vaccination slots across India using the public CoWIN API. Built during the peak of India's vaccination drive to help people find appointments faster.

## Features

- Browse vaccination centers by **State → District** hierarchy
- Search slots directly by **Pincode**
- View real-time session details: capacity, vaccine type, age limit, fees, and time slots

## Getting Started

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Runs on `http://localhost:8000` by default.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on `http://localhost:5173` by default. Set `VITE_API_URL` to override the backend URL.
