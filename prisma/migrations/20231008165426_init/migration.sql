-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Bien" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lot_id" INTEGER NOT NULL,
    "Bloc" TEXT NOT NULL,
    "Itage" TEXT NOT NULL,
    "superficie_habitable" REAL NOT NULL,
    "superficie_total" REAL NOT NULL,
    "type" TEXT NOT NULL,
    "prix_m2" REAL NOT NULL,
    "prix_total" REAL NOT NULL,
    "etat" TEXT NOT NULL,
    "projet_id" INTEGER NOT NULL,
    "client_id" INTEGER,
    "reserve_id" INTEGER,
    CONSTRAINT "Bien_projet_id_fkey" FOREIGN KEY ("projet_id") REFERENCES "Projet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bien_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Bien_reserve_id_fkey" FOREIGN KEY ("reserve_id") REFERENCES "Reservation" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Projet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "address" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date_de_naissance" TEXT NOT NULL,
    "lieu_de_naissance" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "id_piece" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "client_id" INTEGER NOT NULL,
    "montant_bien" REAL NOT NULL,
    "reste" REAL NOT NULL,
    CONSTRAINT "Reservation_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Versement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "reservation_id" INTEGER NOT NULL,
    "date_payment" DATETIME NOT NULL,
    "mode_payment" TEXT NOT NULL,
    "type_compte" TEXT NOT NULL,
    CONSTRAINT "Versement_reservation_id_fkey" FOREIGN KEY ("reservation_id") REFERENCES "Reservation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Bien_reserve_id_key" ON "Bien"("reserve_id");
