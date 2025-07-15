from datetime import datetime, timezone, timedelta

import httpx
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="CoWIN Slot Finder API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

COWIN_BASE = "https://cdn-api.co-vin.in/api/v2"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.5",
    "Content-Language": "en-US,en;q=0.5",
}

IST = timezone(timedelta(hours=5, minutes=30))


async def fetch_cowin(path: str) -> dict:
    async with httpx.AsyncClient(headers=HEADERS, timeout=10) as client:
        resp = await client.get(f"{COWIN_BASE}{path}")
        resp.raise_for_status()
        return resp.json()


@app.get("/api/states")
async def get_states():
    return await fetch_cowin("/admin/location/states")


@app.get("/api/districts/{state_id}")
async def get_districts(state_id: int):
    return await fetch_cowin(f"/admin/location/districts/{state_id}")


@app.get("/api/centers/{district_id}")
async def get_centers(district_id: int):
    today = datetime.now(IST).strftime("%d-%m-%Y")
    return await fetch_cowin(
        f"/appointment/sessions/public/findByDistrict?district_id={district_id}&date={today}"
    )


@app.get("/api/pincode")
async def get_by_pincode(pin: str = Query(...)):
    today = datetime.now(IST).strftime("%d-%m-%Y")
    return await fetch_cowin(
        f"/appointment/sessions/public/findByPin?pincode={pin}&date={today}"
    )
