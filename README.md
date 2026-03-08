# 🚀 nextjs-BackEnd

A full-stack application connecting **Next.js** with **MongoDB** via **Node.js**, using the App Router and API Routes to handle backend logic directly within the Next.js framework.

---

## 🛠️ Tech Stack

| Layer      | Technology                         |
|------------|------------------------------------|
| Frontend   | Next.js 14+ (App Router), React    |
| Language   | TypeScript                         |
| Styling    | CSS / Tailwind CSS                 |
| Backend    | Node.js (via Next.js API Routes)   |
| Database   | MongoDB                            |
| Linting    | ESLint                             |

---

## 📁 Project Structure

```
nextjs-BackEnd/
├── app/                  # App Router pages and API routes
│   └── api/              # Backend endpoints (Node.js handlers)
├── public/               # Static assets
├── .gitignore
├── eslint.config.mjs     # ESLint configuration
├── next.config.ts        # Next.js configuration
├── postcss.config.mjs    # PostCSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json
```

---

## ⚙️ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) `v18+`
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [MongoDB](https://www.mongodb.com/) database (local or [MongoDB Atlas](https://www.mongodb.com/atlas))

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YanPrudencio015/nextjs-BackEnd.git
cd nextjs-BackEnd
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure environment variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB=your_database_name
```

> 💡 If using **MongoDB Atlas**, get your connection string from the cluster dashboard under **Connect → Drivers**.

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 🔌 API Routes

API endpoints are defined inside the `app/api/` directory using Next.js Route Handlers. Example:

```
GET  /api/example   → Fetches data from MongoDB
POST /api/example   → Inserts data into MongoDB
```

Each route connects to MongoDB using the connection string defined in `.env.local`.

---

## 🏗️ Build for Production

```bash
npm run build
npm start
```

---

## ☁️ Deploy on Vercel

The easiest way to deploy this app is via [Vercel](https://vercel.com/new):

1. Push the repository to GitHub
2. Import the project on Vercel
3. Add your environment variables (`MONGODB_URI`, `MONGODB_DB`) in the **Environment Variables** section
4. Deploy 🚀

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [MongoDB Node.js Driver](https://www.mongodb.com/docs/drivers/node/current/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)

---

## 👤 Author

**Yan Prudencio**  
GitHub: [@YanPrudencio015](https://github.com/YanPrudencio015)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
