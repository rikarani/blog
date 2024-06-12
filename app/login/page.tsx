import { login } from "@/actions/login";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";

export default function LoginPage(): React.JSX.Element {
  return (
    <div className="batas flex w-full max-w-3xl overflow-hidden rounded">
      <div className="hidden flex-1 flex-col justify-between space-y-4 bg-gray-300 p-6 text-black sm:flex">
        <h1 className="text-3xl font-semibold uppercase">Hitam Dilarang Login</h1>
        <p>Untuk sementara loginnya cuma pake Username & Password</p>
        <p>ntar ditambah pakek OAuth tapi gatau kapan</p>
      </div>
      <div className="batas w-full p-6 sm:flex-1">
        <form action={login}>
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              type="text"
              className="mt-0.5"
              placeholder="Username"
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              className="mt-0.5"
              placeholder="Password"
            />
          </div>
          <div className="mt-4">
            <Button type="submit" className={`${buttonVariants({ variant: "default" })} w-full`}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
