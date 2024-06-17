"use client";

import { useRouter } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";

type Props = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function Error({ error, reset }: Props): React.JSX.Element {
  const { back } = useRouter();

  return (
    <div className="grid h-dvh place-items-center">
      <div className="batas max-w-3xl">
        <h1 className="text-center text-4xl font-bold">sabar, ada error njir</h1>
        <div className="mx-auto mt-4 max-w-max space-x-4">
          <Button
            onClick={reset}
            className={`${buttonVariants({ variant: "outline" })} text-white`}
          >
            Coba Lagi
          </Button>
          <Button onClick={back} className={buttonVariants({ variant: "default" })}>
            Balik dah
          </Button>
        </div>
      </div>
    </div>
  );
}
