const express = require('express');
const app = express();
const port = 3001;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cors = require('cors');

app.use(cors());

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening at http://0.0.0.0:${port}`);
});

app.get('/api/unites-armee-terre', async (req, res) => {
  const unites = await prisma.unites_armee_terre.findMany();
  res.json(unites);
});

async function main() {
  try {
    const unites = await prisma.unites_armee_terre.findMany();
    console.log('Toutes les unités :', unites);
  } catch (e) {
    throw e;
  } finally {
    await prisma.$disconnect();
  }
}

main();
