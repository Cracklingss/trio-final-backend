import express from "express";
import routes from "@/routes";
import cors from "cors";

export const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
  })
)
app.use("/api", routes);