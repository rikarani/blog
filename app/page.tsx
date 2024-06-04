import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export default function Index(): React.JSX.Element {
  return (
    <div className="mx-auto max-w-6xl">
      <Navbar />
      <section className="px-6">
        <div className="space-y-6 pb-3 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg border-2 border-border bg-card">
            <Link href="/">
              <Image
                src="https://source.unsplash.com/720x400?cat"
                alt="Thumbnail Image"
                width={720}
                height={400}
              />
            </Link>
            <div className="p-5">
              <Link href="/">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h5>
              </Link>
              <p className="mb-3 line-clamp-3 text-pretty font-normal text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates laboriosam neque vero rerum iure similique nostrum
                natus eligendi, velit labore.
              </p>
              <Link
                href="/"
                className={`${buttonVariants({ variant: "default" })} w-full`}
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border-2 border-border bg-card">
            <Link href="/">
              <Image
                src="https://source.unsplash.com/720x400?cat"
                alt="Thumbnail Image"
                width={720}
                height={400}
              />
            </Link>
            <div className="p-5">
              <Link href="/">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h5>
              </Link>
              <p className="mb-3 line-clamp-3 text-pretty font-normal text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam excepturi distinctio eaque consectetur debitis dolore.
              </p>
              <Link
                href="/"
                className={`${buttonVariants({ variant: "default" })} w-full`}
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border-2 border-border bg-card">
            <Link href="/">
              <Image
                src="https://source.unsplash.com/720x400?cat"
                alt="Thumbnail Image"
                width={720}
                height={400}
              />
            </Link>
            <div className="p-5">
              <Link href="/">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h5>
              </Link>
              <p className="mb-3 line-clamp-3 text-pretty font-normal text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam excepturi distinctio eaque consectetur debitis dolore.
              </p>
              <Link
                href="/"
                className={`${buttonVariants({ variant: "default" })} w-full`}
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border-2 border-border bg-card">
            <Link href="/">
              <Image
                src="https://source.unsplash.com/720x400?cat"
                alt="Thumbnail Image"
                width={720}
                height={400}
              />
            </Link>
            <div className="p-5">
              <Link href="/">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h5>
              </Link>
              <p className="mb-3 line-clamp-3 text-pretty font-normal text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam excepturi distinctio eaque consectetur debitis dolore.
              </p>
              <Link
                href="/"
                className={`${buttonVariants({ variant: "default" })} w-full`}
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border-2 border-border bg-card">
            <Link href="/">
              <Image
                src="https://source.unsplash.com/720x400?cat"
                alt="Thumbnail Image"
                width={720}
                height={400}
              />
            </Link>
            <div className="p-5">
              <Link href="/">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h5>
              </Link>
              <p className="mb-3 line-clamp-3 text-pretty font-normal text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam excepturi distinctio eaque consectetur debitis dolore.
              </p>
              <Link
                href="/"
                className={`${buttonVariants({ variant: "default" })} w-full`}
              >
                Read More
              </Link>
            </div>
          </div>
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
