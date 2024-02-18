import process from "node:process";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";
import router from "./routes/index.js";

const PORT = Number.parseInt(process.env.PORT, 10);

const app = express();
export const database = new PrismaClient();

app.set("trust proxy", 1);

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
