# region IMPORT
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

# endregion IMPORT


app = FastAPI()

origins = [
    "http://localhost:3000",
    "https://example.com",
]

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


@app.get("/")
def read_root():
    return {"Hello": "World I am from FastAPI..."}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
