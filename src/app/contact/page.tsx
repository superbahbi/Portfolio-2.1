import { ContactForm } from "@/components/contact-form";
import { TextEncrypted } from "@/components/text-encrypted";
import { Terminal } from "lucide-react";

export default function Page() {
  return (
    <main className="col-span-1 h-full lg:col-span-4">
      <h1 className="mb-4 flex flex-row gap-1 font-mono text-2xl font-semibold tracking-wider text-neutral-100">
        <Terminal className="h-8 w-8" />
        <TextEncrypted interval={100} text="Contact" />
      </h1>

      <ContactForm />
    </main>
  );
}
