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

## Deploy the frontend to Vercel

1. Import this repository into Vercel.
2. Set the project root directory to `frontend`.
3. Vercel will detect Vite automatically. Use `npm run build` as the build command and `dist` as the output directory.
4. Add the environment variable `VITE_API_URL` with the Render backend URL, without a trailing `/api`, for example `https://shopify-5ysd.onrender.com`.
5. Deploy and redeploy after changing environment variables. The `frontend/vercel.json` rewrite keeps direct links to React routes working.
