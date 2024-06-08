import { formatDate } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";
import Image from "next/image";
import Show from "@/components/show";
import Card from "@/components/card";
import prisma from "@/prisma/client";
import Navbar from "@/components/navbar";

export default async function Index(): Promise<React.JSX.Element> {
  const posts = await prisma.post.findMany({
    take: 5,
    include: {
      category: true,
    },
  });

  return (
    <div className={`mx-auto max-w-6xl ${posts.length === 0 ? "flex h-full flex-col" : "h-auto"}`}>
      <Navbar />
      <Show>
        <Show.When isTrue={posts.length === 0}>
          <div className="batas grid flex-1 place-items-center px-6">
            <h6 className="text-3xl font-semibold">belom ada postnya njir wkwkkwk</h6>
          </div>
        </Show.When>
        <Show.Else>
          <div className="space-y-4 px-6 pb-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 lg:grid-cols-3">
            {posts.map((post) => {
              return (
                <Card key={post.id}>
                  <Card.Header slug={post.category.slug} label={post.category.name}>
                    <Image
                      src={`https://source.unsplash.com/720x400?anime`}
                      alt="Thumbnail Image"
                      width={720}
                      height={400}
                      priority
                    />
                  </Card.Header>
                  <Card.Content>
                    <div>
                      <h6 className="text-muted-foreground">
                        {formatDate(post.created_at.toISOString())}
                      </h6>
                      <Link href={`/post/${post.id}`}>
                        <h2 className="mb-2 text-2xl font-bold tracking-tight">{post.title}</h2>
                      </Link>
                    </div>
                    <div>
                      <p className="mb-3 line-clamp-3 text-pretty font-normal text-gray-400">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/post/${post.id}`}
                        className={`${buttonVariants({ variant: "default" })} w-full`}
                      >
                        Read More
                      </Link>
                    </div>
                  </Card.Content>
                </Card>
              );
            })}
            <Link href="/posts">
              <div className="mt-4 grid h-full place-items-center rounded-lg border-2 border-border bg-card pb-4 md:mt-0">
                <div className="flex flex-col items-center">
                  <MoveRight size={64} />
                  <h6>Lihat Post Lainnya</h6>
                </div>
              </div>
            </Link>
          </div>
        </Show.Else>
      </Show>
    </div>
  );
}

{
  /* <div className="relative flex flex-col overflow-hidden rounded-lg border-2 border-border bg-card">
            <div className="absolute bg-background/70 px-5 py-2 font-medium backdrop-blur-md">
              <Link href="/">Review Anime</Link>
            </div>
            <Image
              src={`https://source.unsplash.com/720x400?anime`}
              alt="Thumbnail Image"
              width={720}
              height={400}
            />
            <div className="flex flex-1 flex-col justify-between p-5">
              <div>
                <p className="text-muted-foreground">
                  {formatDate(new Date().toISOString())}
                </p>
                <Link href="/">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </h5>
                </Link>
              </div>
              <div>
                <p className="mb-3 line-clamp-3 text-pretty font-normal text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  quae magni voluptatibus aut voluptates dolores deleniti
                  adipisci molestiae harum necessitatibus.
                </p>
                <Link
                  href="/"
                  className={`${buttonVariants({ variant: "default" })} w-full`}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div> */
}
{
  /* {posts.map((post) => {
            return (
              <div
                key={post.id}
                className="relative flex flex-col overflow-hidden rounded-lg border-2 border-border bg-card"
              >
                <div className="absolute bg-background/70 px-5 py-2 font-medium backdrop-blur-md">
                  <Link href="/">{post.category.name}</Link>
                </div>
                <Image
                  src={`https://source.unsplash.com/720x400?anime`}
                  alt="Thumbnail Image"
                  width={720}
                  height={400}
                />
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <p className="text-muted-foreground">
                      {formatDate(post.created_at.toISOString())}
                    </p>
                    <Link href="/">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight">
                        {post.title}
                      </h5>
                    </Link>
                  </div>
                  <div>
                    <p className="mb-3 line-clamp-3 text-pretty font-normal text-gray-400">
                      {post.excerpt}
                    </p>
                    <Link
                      href="/"
                      className={`${buttonVariants({ variant: "default" })} w-full`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })} */
}
