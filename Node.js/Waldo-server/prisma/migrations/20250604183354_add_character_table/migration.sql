-- CreateTable
CREATE TABLE "Characters" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "xpixel" DOUBLE PRECISION NOT NULL,
    "ypixel" DOUBLE PRECISION NOT NULL,
    "tolerance" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Characters_pkey" PRIMARY KEY ("id")
);
