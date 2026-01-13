const fs = require("fs");
const path = require("path");

const dirs = [
  "frontend/public/images",
  "frontend/src/app/login",
  "frontend/src/app/verify-otp",
  "frontend/src/app/dashboard",
  "frontend/src/app/buildings",
  "frontend/src/app/room",
  "frontend/src/app/canteen",
  "frontend/src/app/internship",
  "frontend/src/components",
  "frontend/src/context",
  "frontend/src/services",
  "frontend/src/utils",
  "frontend/src/styles",
  "backend/controllers",
  "backend/models",
  "backend/routes",
  "backend/middlewares",
  "backend/utils",
  "backend/config",
  "docs"
];

const files = [
  "frontend/src/app/layout.jsx",
  "frontend/src/services/api.js",
  "frontend/src/utils/getLocation.js",
  "frontend/src/styles/globals.css",
  "backend/server.js",
  "backend/config/db.js",
  "backend/.env",
  "README.md",
  ".gitignore",
  "docker-compose.yml"
];

const project = "smart-stay-platform";

dirs.forEach(dir =>
  fs.mkdirSync(path.join(project, dir), { recursive: true })
);

files.forEach(file =>
  fs.writeFileSync(path.join(project, file), "")
);

console.log("✅ Project structure created successfully!");
