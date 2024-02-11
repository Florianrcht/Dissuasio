const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// node prisma/template/unites_armee_terre.js

async function main() {
  const datas = [
    {
      nom: '2e Régiment de Dragons',
      liens: 'https://www.sengager.fr/regiments/2e-regiment-de-dragons',
      lat: '47.179732551132396',
      long: '0.021624269866323813',
      arme: 'Arme Blindée Cavalerie',
      arme_filtre: 'arme_blindee_cavalerie',
    },
    {
        nom: '501e Régiment de Chars de Combat',
        liens: 'https://www.sengager.fr/regiments/501e-regiment-de-chars-de-combat',
        lat: '49.1285977827371',
        long: '4.383449925788623',
        arme: 'Arme Blindée Cavalerie',
        arme_filtre: 'arme_blindee_cavalerie',
      },
      {
        nom: '5e Régiment de Dragons',
        liens: 'https://www.sengager.fr/regiments/5e-regiment-de-dragons',
        lat: '48.66125048801078',
        long: '4.223445068093777',
        arme: 'Arme Blindée Cavalerie',
        arme_filtre: 'arme_blindee_cavalerie',
      },
      {
        nom: '4e Régiment de Chasseurs',
        liens: 'https://www.sengager.fr/regiments/4e-regiment-de-chasseurs',
        lat: '44.53380397738804',
        long: '6.050877896725033',
        arme: 'Arme Blindée Cavalerie',
        arme_filtre: 'arme_blindee_cavalerie',
      },
        {
            nom: '1er Régiment de Spahis',
            liens: 'https://www.sengager.fr/regiments/1er-regiment-de-spahis',
            lat: '44.927039012493836',
            long: '4.9123718985914095',
            arme: 'Arme Blindée Cavalerie',
            arme_filtre: 'arme_blindee_cavalerie',
        },
        
  ];

  const inserts = datas.map(data => prisma.unites_armee_terre.create({ data }));
  
  try {
    await prisma.$transaction(inserts);
    console.log('Insertions réussies.');
  } catch (error) {
    console.error('Erreur lors des insertions :', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
