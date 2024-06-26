import { env } from "process";
import { hashSync } from "bcrypt";
import { faker } from "@faker-js/faker/locale/id_ID";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const numberOfPost = 20;
  const numberOfUser = 2;
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
    data: [
      ...userData,
      {
        name: "Phasya Ananta",
        username: env.APP_USERNAME as string,
        password: hashSync(env.APP_SECRET as string, 12),
      },
    ],
  });

  for (let i = 1; i <= numberOfPost; i++) {
    const authorIndex = faker.number.int({ min: 0, max: users.length - 1 });
    const postIndex = faker.number.int({ min: 0, max: categories.length - 1 });
    const postSlug = faker.helpers.uniqueArray(faker.lorem.slug, numberOfPost);

    const post: Prisma.PostCreateInput = {
      author: { connect: { id: users[authorIndex].id } },
      category: { connect: { id: categories[postIndex].id } },
      title: faker.lorem.sentence({ min: 4, max: 6 }),
      slug: postSlug[i - 1],
      excerpt: faker.lorem.sentences({ min: 3, max: 5 }),
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
