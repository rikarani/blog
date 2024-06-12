import { MoveLeft } from "lucide-react";
import { formatDate, randomBetween } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Link from "next/link";
import Image from "next/image";
import prisma from "@/prisma/client";
import Navbar from "@/components/navbar";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Props): Promise<React.JSX.Element> {
  const post = await prisma.post.findUnique({
    include: {
      author: true,
    },
    where: {
      slug: params.slug,
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl">
      <Navbar />
      <article className="mx-auto max-w-4xl px-6 pb-4">
        <Link href="/posts" className="flex gap-2.5 text-muted-foreground hover:text-white">
          <MoveLeft /> Kembali
        </Link>
        <Image
          src={`/gambar-${randomBetween(0, 1)}.webp`}
          alt="Post Image"
          width={1200}
          height={900}
          priority
          className="mt-4 h-72 w-full object-cover"
        />
        <div className="mt-4 flex flex-col gap-1.5">
          <h6 className="text-sm leading-none text-muted-foreground">
            {formatDate(post?.created_at.toISOString() as string)}
          </h6>
          <h1 className="text-2xl/none font-bold tracking-tight md:text-3xl/none">{post?.title}</h1>
        </div>
        <div className="mt-4 flex items-center gap-2.5">
          <Avatar>
            <AvatarImage src="https://github.com/rikarani.png" />
            <AvatarFallback>OG</AvatarFallback>
          </Avatar>
          <div>
            <h6>{post.author.name}</h6>
            <h6 className="text-muted-foreground">sipaling ngoding</h6>
          </div>
        </div>
        <Separator className="my-4" />
        <div
          className="space-y-3 text-pretty text-lg leading-relaxed text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}
