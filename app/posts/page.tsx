import { formatDate } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";
import Image from "next/image";
import Show from "@/components/show";
import Card from "@/components/card";
import prisma from "@/prisma/client";
import Navbar from "@/components/navbar";
import photo from "../../public/118950699_p0.png";

export default async function Posts(): Promise<React.JSX.Element> {
  const posts = await prisma.post.findMany({
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
                <Card key={post.slug}>
                  <Card.Header>
                    <Card.Kategori slug={post.category.slug} label={post.category.name} />
                    <Image src={photo} placeholder="blur" alt="Thumbnail Image" priority />
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
          </div>
        </Show.Else>
      </Show>
    </div>
  );
}
