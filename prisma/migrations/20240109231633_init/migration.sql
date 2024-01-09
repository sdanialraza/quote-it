-- CreateTable
CREATE TABLE "Quote" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "author" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "submitter" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL
);
