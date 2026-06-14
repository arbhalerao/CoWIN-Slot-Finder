# CoWIN Slot Finder

A web application to discover available COVID-19 vaccination slots across India using the public CoWIN API. Built during the peak of India's vaccination drive to help people find appointments faster.

## Architecture

### Summary

- A **stateless vaccination-slot discovery web app**: a React (Vite) SPA talks to a thin **FastAPI proxy**, which forwards to the **public CoWIN API** (`cdn-api.co-vin.in/api/v2`). No database, no auth, no persistence - the backend is a pure read-through proxy.
- The FastAPI backend exposes `/api/states`, `/api/districts/{state_id}`, `/api/centers/{district_id}`, and `/api/pincode`, calling CoWIN over **async `httpx`** with browser-like headers and IST-localized dates; permissive CORS lets the SPA call it directly.
- The frontend drives a **State -> District -> Centers** drill-down plus pincode search, with all network access centralized in a small `api.js` fetch module pointed at the backend base URL (env-configurable).


## Features

- Browse vaccination centers by **State -> District** hierarchy
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
