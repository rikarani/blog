import { v4 } from "uuid";
import { env } from "process";
import { hashSync } from "bcrypt";
import { faker } from "@faker-js/faker/locale/id_ID";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const numberOfPost = 60;
  const numberOfUser = 5;
  const postData: Prisma.PostCreateInput[] = [];
  const userData: Prisma.UserCreateInput[] = [];

  const categories = await prisma.category.createManyAndReturn({
    data: [
      { name: "Review Anime", slug: "review-anime" },
      { name: "Tutorial Koding", slug: "tutorial-koding" },
    ],
  });

  for (let i = 1; i <= numberOfUser; i++) {
    const user: Prisma.UserCreateInput = {
      name: faker.person.fullName(),
      username: faker.internet.userName(),
      password: hashSync(env.APP_SECRET as string, 12),
    };

    userData.push(user);
  }

  const users = await prisma.user.createManyAndReturn({
    data: userData,
  });

  for (let i = 1; i <= numberOfPost; i++) {
    const authorIndex = faker.number.int({ min: 0, max: users.length - 1 });
    const postIndex = faker.number.int({ min: 0, max: categories.length - 1 });

    const post: Prisma.PostCreateInput = {
      id: v4(),
      author: { connect: { id: users[authorIndex].id } },
      category: { connect: { id: categories[postIndex].id } },
      title: faker.lorem.sentence({ min: 5, max: 8 }),
      excerpt: faker.lorem.sentences({ min: 1, max: 3 }),
      content: `<p>${faker.lorem.paragraphs({ min: 5, max: 9 }, "</p><p>")}</p>`,
    };

    postData.push(post);
  }

  await Promise.all(
    postData.map(async (post) => {
      await prisma.post.create({
        data: post,
      });
    }),
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
