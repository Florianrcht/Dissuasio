/*
  Warnings:

  - Added the required column `arme_filtre` to the `unites_armee_terre` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_unites_armee_terre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "liens" TEXT NOT NULL,
    "lat" TEXT NOT NULL,
    "long" TEXT NOT NULL,
    "arme" TEXT NOT NULL,
    "arme_filtre" TEXT NOT NULL DEFAULT 'valeur_par_defaut',
    "create" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update" DATETIME NOT NULL
);
INSERT INTO "new_unites_armee_terre" ("arme", "create", "id", "lat", "liens", "long", "nom", "update") SELECT "arme", "create", "id", "lat", "liens", "long", "nom", "update" FROM "unites_armee_terre";
DROP TABLE "unites_armee_terre";
ALTER TABLE "new_unites_armee_terre" RENAME TO "unites_armee_terre";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
