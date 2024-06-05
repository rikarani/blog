import type { Post } from "@/types";

import { env } from "process";
import { formatDate } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default async function Index(): Promise<React.JSX.Element> {
  const response = await fetch(`${env.BASE_URL}/post`);
  const posts: Post[] = await response.json();

  return (
    <div className="mx-auto max-w-6xl">
      <Navbar />
      <section className="px-6">
        <div className="space-y-6 pb-3 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
          {posts.map((post) => {
            return (
              <div
                key={post.id}
                className="relative flex flex-col overflow-hidden rounded-lg border-2 border-border bg-card"
              >
                <div className="absolute bg-background/70 px-5 py-2 font-medium backdrop-blur-md">
                  <Link href="/">{post.category.name}</Link>
                </div>
                <Image
                  src={`https://source.unsplash.com/720x400?${post.category.slug}`}
                  alt="Thumbnail Image"
                  width={720}
                  height={400}
                />
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <p className="text-muted-foreground">
                      {formatDate(post.created_at)}
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
          })}
          <Link href="/">
            <div className="grid h-full place-items-center rounded-lg border-2 border-border bg-card">
              <div className="flex flex-col items-center">
                <MoveRight size={64} />
                <h6>Lihat Post Lainnya</h6>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
