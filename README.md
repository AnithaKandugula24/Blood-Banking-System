# Blood Bank Management System

Full-stack application with:

- React frontend (Create React App)
- Express + Sequelize backend
- MySQL database

## Cleanup completed

The repository now uses a single canonical project structure at root.
Duplicate nested app folders and shortcut files were removed.

## Prerequisites

- Node.js 18+
- MySQL running locally or remotely

## Environment setup

1. Copy [.env.example](.env.example) to `.env` and update values.
2. Copy [backend/.env.example](backend/.env.example) to `backend/.env` and update DB credentials.

Frontend environment:

- `REACT_APP_BASE_URL` example: `http://localhost:4000/`

Backend environment:

- `PORT` example: `4000`
- `CLIENT_ORIGIN` example: `http://localhost:3000`
- `DB_HOST`, `DB_DIALECT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`

## Install

From repository root, install frontend dependencies:

```bash
npm install
```

Then install backend dependencies:

```bash
npm --prefix backend install
```

Or run both in one command:

```bash
npm run install:all
```

## Share project without node_modules

If you want to send this project to a friend, you should not include `node_modules` folders.

Before zipping:

1. Keep `.env` and `backend/.env` as they are if you want to share your current environment values.
2. Ensure these folders are not present:
	- `node_modules`
	- `backend/node_modules`
3. Zip the project folder and send it.

On your friend's machine after extracting:

```bash
npm install
npm --prefix backend install
```

## Run in development

Start both frontend and backend together:

```bash
npm run dev
```

This starts:

- Backend on `http://localhost:4000`
- Frontend on `http://localhost:3000`

Backend health check:

- `GET /health`

## Production build and run

1. Build frontend:

```bash
npm run build
```

2. Start backend (serves API + built frontend in production mode):

```bash
npm start
```

Set `NODE_ENV=production` in your deployment environment.

## Useful scripts

- `npm run dev` - run frontend + backend for local development
- `npm run install:all` - install frontend and backend dependencies
- `npm run client:start` - run frontend only
- `npm run server:start` - run backend only
- `npm run build` - build frontend production assets
- `npm start` - start backend server (and serve built frontend in production)
- `npm test` - run frontend tests
