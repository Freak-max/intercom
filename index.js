import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const PORT: number = Number(process.env.PORT) || 3000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));

// ===============================
// Types
// ===============================

interface CryptoMarket {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
  image: string;
}

interface Cache {
  data: CryptoMarket[] | null;
  lastFetch: number;
}

// ===============================
// Simple In-Memory Cache
// ===============================

const CACHE_DURATION: number = 30 * 1000; // 30 seconds

let cache: Cache = {
  data: null,
  lastFetch: 0,
};

async function fetchCryptoData(): Promise<CryptoMarket[]> {
  const now = Date.now();

  if (cache.data && now - cache.lastFetch < CACHE_DURATION) {
    return cache.data;
  }

  const response = await axios.get<CryptoMarket[]>(
    "https://api.coingecko.com/api/v3/coins/markets",
    {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 20,
        page: 1,
        sparkline: false,
      },
    }
  );

  cache = {
    data: response.data,
    lastFetch: now,
  };

  return response.data;
}

// ===============================
// Routes
// ===============================

app.get("/api/crypto", async (_req: Request, res: Response) => {
  try {
    const data = await fetchCryptoData();
    res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch cryptocurrency data",
    });
  }
});

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({
    status: "OK",
    timestamp: new Date(),
  });
});

// ===============================
// Start Server
// ===============================

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
