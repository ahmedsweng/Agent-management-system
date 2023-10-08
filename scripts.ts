import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const pr = await prisma.projet.create({
    data: {
      id: 123548494,
      address: "http://localhost",
      type: "localhost",
    },
  });

  console.log(pr);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
