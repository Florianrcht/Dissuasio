const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Suppression de tous les enregistrements dans post_twitter
    const deleteAll = prisma.post_twitter.deleteMany();

    try {
        // Envelopper deleteAll dans un tableau pour le passer à $transaction
        await prisma.$transaction([deleteAll]);
        console.log('Delete réussie.');
    } catch (error) {
        console.error('Erreur lors du delete :', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
