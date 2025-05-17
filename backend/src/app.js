import express from "express";
import cors from "cors";
import simulacaoRouter from "./routes/simulacao.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/simulacao", simulacaoRouter);

export default app;
