"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Textarea } from "./ui/textarea";
import { useFormspark } from "@formspark/use-formspark";
import { useState } from "react";
import Botpoison from "@botpoison/browser";

const botpoison = new Botpoison({
  publicKey: "pk_81e91e7f-8778-44bd-ad20-aa40047b2929",
});

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const [submit, submitting] = useFormspark({
    formId: "1w657JOA",
  });
  const [response, setResponse] = useState<z.infer<typeof formSchema> | null>(
    null,
  );

  // 2. Define a submit handler.
  async function onSubmit(message: z.infer<typeof formSchema>) {
    const { solution } = await botpoison.challenge();
    const res = await submit({ ...message, _botpoison: solution });
    setResponse(res as z.infer<typeof formSchema>);
  }

  return response ? (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-center text-3xl font-bold text-neutral-100">
        Thank you for your message!
      </h1>
      <p className="mt-2 text-center text-neutral-300">
        I will get back to you as soon as possible.
      </p>
    </div>
  ) : (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 text-left text-white"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Last Name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your message here." {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="outline" type="submit" disabled={submitting}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
