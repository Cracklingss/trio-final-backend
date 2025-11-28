import dotenvv from "dotenv";
import { app } from "@/app";
import cookieParser from "cors";

dotenvv.config();

const PORT = process.env.PORT;

app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})