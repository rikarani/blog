"use client";

import { useRef } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { login, State } from "@/lib/actions/login";
import { schema, Schema } from "@/lib/schema/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, buttonVariants } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Show from "@/components/show";

export default function LoginPage(): React.JSX.Element {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, formAction] = useFormState<State, FormData>(login, {
    message: "",
  });

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
      ...(state.fields ?? {}),
    },
  });

  return (
    <div className="flex w-full max-w-3xl overflow-hidden rounded">
      <div className="hidden flex-1 items-center bg-gray-300 p-6 text-black sm:flex">
        <h1 className="text-3xl font-semibold uppercase">Hitam Dilarang Login</h1>
      </div>
      <div className="w-full p-6 sm:flex-1">
        <Show>
          <Show.When isTrue={state.status === "error"}>
            <Alert
              variant="destructive"
              className="bg-red-500/50 text-primary dark:border-red-500/50"
            >
              <AlertTitle>Oops</AlertTitle>
              <AlertDescription>{state.message}</AlertDescription>
            </Alert>
          </Show.When>
        </Show>
        <Form {...form}>
          <form
            className="mt-4"
            ref={formRef}
            action={formAction}
            onSubmit={form.handleSubmit(() => formRef.current?.submit())}
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => {
                return (
                  <FormItem className="space-y-1">
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => {
                return (
                  <FormItem className="mt-4 space-y-1">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <Button
              className={`${buttonVariants({ variant: "default" })} mt-4 w-full`}
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
