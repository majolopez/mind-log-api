import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// GET: Obtener pensamientos
app.get("/api/thoughts", async (req, res) => {
  try {
    const thoughts = await prisma.thought.findMany();
    res.json(thoughts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching thoughts" });
  }
});

// POST: Crear un pensamiento
app.post("/api/thoughts", async (req, res) => {
  try {
    const { situation, automatic_thought, emotion, alternative_thought } = req.body;
    if (!situation || !automatic_thought || !emotion || !alternative_thought) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const newThought = await prisma.thought.create({
      data: { situation, automatic_thought, emotion, alternative_thought },
    });

    res.status(201).json(newThought);
  } catch (error) {
    res.status(500).json({ error: "Error creating thought" });
  }
});

// Servidor en puerto 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
