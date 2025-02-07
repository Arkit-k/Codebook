-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "snippet_id" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SingleSnippet" (
    "id" TEXT NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "isFavorite" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "code" TEXT,
    "language" TEXT,
    "creationDate" TEXT NOT NULL,
    "isTrash" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "SingleSnippet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkUserId_key" ON "User"("clerkUserId");

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_snippet_id_fkey" FOREIGN KEY ("snippet_id") REFERENCES "SingleSnippet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
