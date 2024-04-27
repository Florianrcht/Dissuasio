-- CreateTable
CREATE TABLE "post_twitter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "post_id" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "create" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_unites_armee_terre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "liens" TEXT NOT NULL,
    "lat" TEXT NOT NULL,
    "long" TEXT NOT NULL,
    "arme" TEXT NOT NULL,
    "arme_filtre" TEXT NOT NULL,
    "create" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update" DATETIME NOT NULL
);
INSERT INTO "new_unites_armee_terre" ("arme", "arme_filtre", "create", "id", "lat", "liens", "long", "nom", "update") SELECT "arme", "arme_filtre", "create", "id", "lat", "liens", "long", "nom", "update" FROM "unites_armee_terre";
DROP TABLE "unites_armee_terre";
ALTER TABLE "new_unites_armee_terre" RENAME TO "unites_armee_terre";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
