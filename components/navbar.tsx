import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

import Link from "next/link";

export default function Navbar(): React.JSX.Element {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-md">
      <div className="px-6 py-4">
        <div className={`flex items-center justify-between py-0`}>
          <div className="batas flex w-full items-center justify-between">
            <Link href="/" className="flex md:mr-24">
              <span className="self-center whitespace-nowrap text-xl font-semibold text-white sm:text-2xl">
                Erikacang
              </span>
            </Link>
            <Avatar>
              <AvatarImage src="https://github.com/rikarani.png" alt="rikarani" />
              <AvatarFallback>OG</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  );
}
