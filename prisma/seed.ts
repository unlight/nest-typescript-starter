import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding...');
    await prisma.connect();

    const user1 = await prisma.user.create({
        data: {
            email: 'lisa@simpson.com',
            name: 'Lisa Simpson',
        },
    });
    const user2 = await prisma.user.create({
        data: {
            email: 'bart@simpson.com',
            name: 'Bart Simpson',
        },
    });

    console.log({ user1, user2 });
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.disconnect();
    });
