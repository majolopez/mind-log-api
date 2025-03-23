-- CreateTable
CREATE TABLE "Thought" (
    "id" TEXT NOT NULL,
    "situation" TEXT NOT NULL,
    "automatic_thought" TEXT NOT NULL,
    "emotion" TEXT NOT NULL,
    "alternative_thought" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Thought_pkey" PRIMARY KEY ("id")
);
