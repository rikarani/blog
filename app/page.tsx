import { MoveRight } from "lucide-react";
import { formatDate, randomBetween } from "@/lib/utils";
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
    <div className={`mx-auto max-w-5xl ${posts.length === 0 ? "flex h-full flex-col" : "h-auto"}`}>
      <Navbar />
      <Show>
        <Show.When isTrue={posts.length === 0}>
          <div className="grid flex-1 place-items-center px-6">
            <h6 className="text-3xl font-semibold">belom ada postnya njir wkwkkwk</h6>
          </div>
        </Show.When>
        <Show.Else>
          <div className="space-y-4 px-6 pb-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
            {posts.map((post) => {
              return (
                <Card key={post.slug}>
                  <Card.Header>
                    <Card.Kategori slug={post.category.slug} label={post.category.name} />
                    <Image
                      src={`/gambar-${randomBetween(0, 1)}.webp`}
                      width={640}
                      height={360}
                      alt="Thumbnail Image"
                      className="w-full"
                      priority
                    />
                  </Card.Header>
                  <Card.Content>
                    <div>
                      <h6 className="text-muted-foreground">
                        {formatDate(post.created_at.toISOString())}
                      </h6>
                      <Link href={`/post/${post.slug}`}>
                        <h2 className="mb-2 text-2xl font-bold tracking-tight">{post.title}</h2>
                      </Link>
                    </div>
                    <div>
                      <p className="mb-3 line-clamp-3 text-pretty font-normal text-gray-400">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/post/${post.slug}`}
                        className={`${buttonVariants({ variant: "default" })} w-full`}
                      >
                        Read More
                      </Link>
                    </div>
                  </Card.Content>
                </Card>
              );
            })}
            <Show>
              <Show.When isTrue={posts.length >= 5}>
                <Link href="/posts">
                  <div className="mt-4 grid h-full place-items-center rounded-lg border-2 border-border bg-card pb-4 md:mt-0">
                    <div className="flex flex-col items-center">
                      <MoveRight size={64} />
                      <h6>Lihat Post Lainnya</h6>
                    </div>
                  </div>
                </Link>
              </Show.When>
            </Show>
          </div>
        </Show.Else>
      </Show>
    </div>
  );
}
