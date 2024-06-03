import Show from "@/components/show";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar(): React.JSX.Element {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-md">
      <div className="px-6 py-3">
        <div className={`flex items-center justify-between py-0`}>
          <div className="flex items-center justify-start">
            <a href="/" className="flex md:mr-24">
              <span className="self-center whitespace-nowrap text-xl font-semibold text-white sm:text-2xl">
                Erikacang
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <div className="ms-3 flex items-center">
              <Show>
                <Show.When isTrue={true}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Avatar className="hover:cursor-pointer">
                        <AvatarImage src="https://github.com/rikarani.png" />
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="border-gray-800 bg-gray-950 text-white"
                    >
                      <DropdownMenuLabel>Phasya Ananta</DropdownMenuLabel>
                      <DropdownMenuLabel className="text-xs text-gray-400">
                        rikarani
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-gray-800" />
                      <DropdownMenuGroup>
                        <DropdownMenuItem className="hover:cursor-pointer focus:bg-[hsl(240_3.7%_15.9%)] focus:text-white">
                          <Link href="/dashboard">Dashboard</Link>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator className="bg-gray-800" />
                      <DropdownMenuItem className="hover:cursor-pointer focus:bg-[hsl(240_3.7%_15.9%)] focus:text-white">
                        <Link href="/dashboard">Dashboard</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </Show.When>
              </Show>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
