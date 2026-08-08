# Shopify

Full-stack e-commerce application with a React/Vite frontend and Express/MongoDB backend.

## Run locally

### Backend

```powershell
cd backend
npm install
Copy-Item .env.example .env
npm start
```

### Frontend

```powershell
cd frontend
npm install
Copy-Item .env.example .env
npm run dev
```

Set `VITE_API_URL` to the deployed backend URL when deploying the frontend.
