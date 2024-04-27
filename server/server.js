const express = require('express');
const app = express();
const port = 3001;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cors = require('cors');
require('dotenv').config();

let bloqueCharge = 0;
let compteurUnitesArmeeTerre = 0;
let compteurtwitterPosts = 0;

const getFormattedDate = () => {
  const now = new Date();
  return `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
};
app.use(cors());

app.listen(port, '0.0.0.0', () => {
  console.log(`<Serveur Node écoute sur http://0.0.0.0:${port}>`);
});

//#region UNITES/CARTE
app.get('/api/unites-armee-terre', async (req, res) => {
  bloqueCharge++; 
  try {
    if (bloqueCharge%2 === 0) {
    } else {
        const unites = await prisma.unites_armee_terre.findMany();
        compteurUnitesArmeeTerre++;
        console.log(`==> SUCCES CARTE | GET PRISMA unites_armee_terre | ${getFormattedDate()} | ${compteurUnitesArmeeTerre}`);
      try {
        res.json(unites);
        console.log(`//> SUCCES CARTE | SEND /api/unites-armee-terre  | ${getFormattedDate()} | ${compteurUnitesArmeeTerre}`);
      }
      catch (e) {
        console.log(`<// ERREUR CARTE | GET /api/unites-armee-terre   | ${getFormattedDate()}  | ${compteurUnitesArmeeTerre} | ` + e.message);
        throw e;
      }
    }
  }
  catch (e) {
    console.log('<== ERREUR | GET PRISMA unites_armee_terre | ' + e.message);
    throw e;
  }
});

async function main() {
  try {
    const unites = await prisma.unites_armee_terre.findMany();
  } catch (e) {
    throw e;
  } finally {
    await prisma.$disconnect();
  }
}
//#endregion UNITES/CARTE

//#region ACTUALITES
app.get('/api/PostTwitter/GetAll', async (req, res) => {
  bloqueCharge++; 
  try {
    if (bloqueCharge%2 === 0) {
    } else {
        const twitterPosts = await prisma.post_twitter.findMany();
        console.log(`==> SUCCES POST TWITTER | GET PRISMA post_twitter | ${getFormattedDate()} | ${twitterPosts.length} Éléments`);
      try {
        res.json(twitterPosts);
        console.log(`//> SUCCES POST TWITTER | SEND /api/PostTwitter/GetAll  | ${getFormattedDate()} | ${twitterPosts.length} Éléments`);
      }
      catch (e) {
        console.log(`<// ERREUR POST TWITTER | GET /api/PostTwitter/GetAll    | ${getFormattedDate()}  | ${twitterPosts.length} Éléments | ` + e.message);
        throw e;
      }
    }
  }
  catch (e) {
    console.log('<== ERREUR | GET PRISMA post_twitter | ' + e.message);
    throw e;
  }
});


async function main() {
  try {
    const twitterPosts = await prisma.post_twitter.findMany();
  } catch (e) {
    throw e;
  } finally {
    await prisma.$disconnect();
  }
}
//#endregion ACTUALITES




main();
