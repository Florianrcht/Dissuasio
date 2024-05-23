const express = require('express');
const app = express();
const port = 3001;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cors = require('cors');
require('dotenv').config();
const fs = require('fs');
const https = require('https');
const bodyParser = require('body-parser');

let bloqueCharge = 0;
let compteurUnitesArmeeTerre = 0;
let compteurtwitterPosts = 0;
const privateKey = fs.readFileSync('/etc/letsencrypt/live/dissuasio.fr/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/dissuasio.fr/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/dissuasio.fr/chain.pem', 'utf8');

app.use(cors());
app.use(express.json());

const credentials = { key: privateKey, cert: certificate, ca: ca };
const httpsServer = https.createServer(credentials, app);

const getFormattedDate = () => {
  const now = new Date();
  return `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
};

httpsServer.listen(port, '0.0.0.0', () => {
  console.log(`<Serveur Node écoute sur https://0.0.0.0:${port}>`);
});

//#region UNITES/CARTE
app.get('/api/Unites/Terre/GetAll', async (req, res) => {
  try {
        const unites = await prisma.unites_armee_terre.findMany();
        console.log(`==> SUCCES CARTE | GET ALL PRISMA unites_armee_terre | ${getFormattedDate()} | ${unites.length} Éléments`);
      try {
        res.json(unites);
        console.log(`//> SUCCES CARTE | SEND /api/Unites/Terre/GetAll  | ${getFormattedDate()} | ${unites.length} Éléments`);
      }
      catch (e) {
        console.log(`<// ERREUR CARTE | GET /api/Unites/Terre/GetAll   | ${getFormattedDate()}  | ${unites.length} Éléments | ` + e.message);
        throw e;
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
app.post('/api/PostTwitter/Scrap', async (req, res) => {
  try {
    if (!req.body.tweets || !Array.isArray(req.body.tweets)) {
      return res.status(400).send("Les données envoyées sont incorrectes.");
    }

    const tweets = req.body.tweets;
    
    const twitterPosts = await prisma.post_twitter.findMany();
    const twitterPostIdDb = twitterPosts.map(post => post.post_id);
    console.log(twitterPostIdDb);
    const dataToInsert = tweets
      .map(tweet => ({
        post_id: tweet.link.split('/').pop(),
        user: tweet.user['username'],
        tags: JSON.stringify(tweet.text.match(/#\w+/g) || [])
      }));
    
    if (dataToInsert.length === 0) {
      console.log("==> Aucune nouvelle insertion requise | Tous les posts sont déjà présents");
      return res.status(200).send("Aucune insertion requise.");
    }
    const inserts = dataToInsert.map(data => prisma.post_twitter.create({ data }));
    //await prisma.$transaction(inserts);
    
    console.log(`==> SUCCES POST TWITTER | INSERTION | ${getFormattedDate()} | ${dataToInsert.length} Éléments`);
    res.status(200).send("Insertions réussies.");
  } catch (error) {
    console.error('Erreur lors des insertions :', error);
    res.status(500).send("Erreur lors des insertions.");
  }
});

app.get('/api/PostTwitter/GetAll', async (req, res) => {
  const twitterPosts = await prisma.post_twitter.findMany();
  console.log(`==> SUCCES POST TWITTER | GET ALL PRISMA post_twitter | ${getFormattedDate()} | ${twitterPosts.length} Éléments`);
  try {
    res.json(twitterPosts);
    console.log(`//> SUCCES POST TWITTER | SEND /api/PostTwitter/GetAll  | ${getFormattedDate()} | ${twitterPosts.length} Éléments`);
  }
  catch (e) {
    console.log(`<// ERREUR POST TWITTER | GET /api/PostTwitter/GetAll    | ${getFormattedDate()}  | ${twitterPosts.length} Éléments | ` + e.message);
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
