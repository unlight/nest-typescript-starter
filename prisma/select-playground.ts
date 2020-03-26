import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({ log: ['query'] });

async function main() {
    const categories = await prisma.category.findMany({
        where: { id: 'ck896v57l0001hgwz55r9wy6m' },
        select: { name: true, posts: { select: { id: true, title: true, author: true } } },
    });
    console.log('categories', JSON.stringify(categories, null, 2));
    await prisma.connect();
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.disconnect();
    });
