"use client";

import { useFormState } from "react-dom";
import { TriangleAlert } from "lucide-react";
import { login, State } from "@/lib/actions/login";
import { Input } from "@/components/ui/client/input";
import { Button, buttonVariants } from "@/components/ui/client/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";

import Show from "@/components/show";

export default function LoginPage(): React.JSX.Element {
  const [state, action] = useFormState<State, FormData>(login, null);

  return (
    <div className="flex w-full max-w-3xl overflow-hidden rounded">
      <div className="hidden flex-1 items-center bg-gray-300 p-6 text-black sm:flex">
        <h1 className="text-3xl font-semibold uppercase">Hitam Dilarang Login</h1>
      </div>
      <div className="w-full p-6 sm:flex-1">
        <Show>
          <Show.When isTrue={state?.status === "error"}>
            <Alert
              variant="destructive"
              className="mb-4 bg-red-500/50 text-primary dark:border-red-500/50"
            >
              <TriangleAlert color="white" />
              <div className="ml-1.5">
                <AlertTitle>Oops</AlertTitle>
                <AlertDescription>{state?.message}</AlertDescription>
              </div>
            </Alert>
          </Show.When>
        </Show>
        <form action={action}>
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              className="mt-0.5"
              placeholder="Username"
              required
              minLength={1}
            />
          </div>
          <div className="mt-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              className="mt-0.5"
              type="password"
              placeholder="Password"
              required
              minLength={6}
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
