"use client";

import { useState } from "react";
import { Button } from "./ui/button";
// import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { toast } from "sonner";
import { z } from "zod";
import { emailSchema } from "@/validator";
import { useAddToList } from "@/hooks/useAddToList";
import { Loader2 } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const add = useAddToList();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the email to a backend

    try {
      emailSchema.parse({
        email,
      });
      await add.mutateAsync({ email });
      toast("Successfully Added Email");
    } catch (error) {
      if (error instanceof Error) {
        toast(error.message);
      }
      if (error instanceof z.ZodError) {
        console.log("Validation failed:", error.errors);
        toast(error.errors.join(", "));
      }
    }
    console.log("Email submitted:", email);
    setEmail("");
    // Show success message or toast
  };

  return (
    <section className="py-16 bg-[#F4F1FF] ">
      <div className="container mx-auto px-4 md:px-6 ">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="w-full md:w-1/2">
            <h3 className="text-sm lg:text-base font-[family-name:var(--font-transforma-sans)] text-black mb-4">
              Join our waitlist to stay up to date on features and releases.
            </h3>
            <form onSubmit={handleSubmit} className="lg:flex max-w-md gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 w-full  text-sm border border-[#E1E3EE] focus:outline-none focus:ring-2 focus:ring-purple-500 lg:max-w-[260px] bg-white rounded-2xl p-3 placeholder:font-[family-name:var(--font-transforma-sans)]"
                required
              />
              <Button
                disabled={add.isPending}
                className="rounded-4xl lg:w-auto w-full  mt-5 lg:mt-0 font-[family-name:var(--font-transforma-sans)] text-xs font-bold text-white p-5 hover:animate-pulse"
              >
                {add.isPending ? (
                  <Loader2 className="w-3 h-3 animate-spin" />
                ) : (
                  "Join the waitlist"
                )}
              </Button>
            </form>
            <p className="text-xs text-black font-[family-name:var(--font-transforma-sans)] mt-4 lg:max-w-sm lg:leading-5">
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </p>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-sm lg:text-base font-bold mb-4 font-[family-name:var(--font-trap)]">
              Follow Us
            </h3>
            <div className="flex flex-col gap-4">
              {/* <a
                href="#"
                className="text-black hover:text-primary transition-colors flex gap-4 items-center font-[family-name:var(--font-transforma-sans)]"
              >
                <FaFacebook size={20} /> <span>Facebook</span>
              </a> */}
              <a
                target="_blank"
                href="https://www.instagram.com/ticketeur?igsh=dWttNnNkbDMzNWY3&utm_source=qr"
                className="text-black hover:text-primary transition-colors flex gap-4 items-center font-[family-name:var(--font-transforma-sans)]"
              >
                <LuInstagram size={20} /> <span>Instagram</span>
              </a>
              <a
                target="_blank"
                href="https://x.com/ticketeur_?s=21&t=CwSCa3QnsIWHWk-WcWOiLw"
                className="text-black hover:text-primary transition-colors flex gap-4 items-center font-[family-name:var(--font-transforma-sans)]"
              >
                <FaXTwitter size={20} /> <span>X</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
