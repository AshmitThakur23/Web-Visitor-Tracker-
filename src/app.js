import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import passport from "passport";
import "./auth.js";
import { logVisit } from "./logger.js";

dotenv.config();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware
app.use(express.static("public"));
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/success", (req, res) => {
  if (!req.user) return res.redirect("/");
  res.sendFile(path.join(__dirname, "views", "success.html"));
});

// Google OAuth
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: [
      "profile",
      "email",
      "https://www.googleapis.com/auth/user.birthday.read",
      "https://www.googleapis.com/auth/user.gender.read",
    ],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  async (req, res) => {
    // ✅ Log only once when login is successful
    await logVisit(req, req.user);

    res.redirect("/success");
  }
);

// -------- Auto-select PORT --------
function startServer(port) {
  const server = app.listen(port, () =>
    console.log(`🚀 Server running at http://localhost:${port}`)
  );

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.log(`⚠️ Port ${port} in use, trying next...`);
      startServer(port + 1); // try next port
    } else {
      console.error("Server error:", err);
    }
  });
}

// Start with env.PORT or fallback
const startPort = parseInt(process.env.PORT, 10) || 3000;
startServer(startPort);
