const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// node prisma/template/post_twitter.js

async function main() {
    const datas = [
    {
        post_id: '1784122719727997223',
        user: 'OpexNews',
        tags : JSON.stringify([
            'MGCS',
            'Leclerc',
            'Chars',
            'Armée de Terre',
        ])
    }   
    ];

    const inserts = datas.map(data => prisma.post_twitter.create({ data }));

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
