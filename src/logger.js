import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { UAParser } from "ua-parser-js";
import fetch from "node-fetch";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logsDir = path.resolve(__dirname, "../logs");
const logsFile = path.join(logsDir, "visits.jsonl");

// Ensure logs directory exists
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

export async function logVisit(req, userData) {
  try {
    let ip = (req.headers["x-forwarded-for"] || req.socket.remoteAddress || "")
      .split(",")[0]
      .trim();
    if (ip.startsWith("::ffff:")) ip = ip.replace("::ffff:", "");

    // Device info
    const parser = new UAParser(req.headers["user-agent"]);
    const deviceInfo = parser.getResult();

    // Location info
    let location = {};
    try {
      const geoRes = await fetch(
        `http://ip-api.com/json/${ip}?fields=status,country,regionName,city,lat,lon,query`
      );
      location = await geoRes.json();
    } catch {
      location = { error: "geo lookup failed" };
    }

    // Final log entry
    const logData = {
      time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      ip,
      device: deviceInfo,
      location,
      user: userData,
    };

    fs.appendFileSync(logsFile, JSON.stringify(logData) + "\n", "utf8");
    console.log("✅ Logged:", logData);
  } catch (err) {
    console.error("Log error:", err);
  }
}
