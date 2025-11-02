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
    // Skip geolocation for localhost/private IPs
    const isLocalhost = ip === "::1" || ip === "127.0.0.1" || ip === "localhost" || ip.startsWith("192.168.") || ip.startsWith("10.") || ip.startsWith("172.");
    
    if (!isLocalhost) {
      try {
        const geoRes = await fetch(
          `http://ip-api.com/json/${ip}?fields=status,country,regionName,city,lat,lon,query`
        );
        location = await geoRes.json();
      } catch {
        location = { error: "geo lookup failed" };
      }
    } else {
      location = { status: "localhost", message: "Geolocation not available for local IPs" };
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
    
    return logData; // Return for potential use
  } catch (err) {
    console.error("Log error:", err);
    return null;
  }
}
