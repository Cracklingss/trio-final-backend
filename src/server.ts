import dotenvv from "dotenv";
import { app } from "@/app";

dotenvv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})