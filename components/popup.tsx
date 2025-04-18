import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { BottomCurve, Gift, TopCurve } from "@/assets";
import Image from "next/image";
import { toast } from "sonner";
import { z } from "zod";
import { emailSchema } from "@/validator";
import { useAddToList } from "@/hooks/useAddToList";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export function Popup() {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const add = useAddToList();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the email to a backend

    try {
      emailSchema.parse({
        email,
      });
      await add.mutateAsync({ email });
      //   toast("Successfully Added Email");
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="flex items-center  lg:p-4 lg:bg-white/95 custom-header-shadow rounded-4xl">
          <Button className="rounded-4xl font-[family-name:var(--font-transforma-sans)] text-xs font-bold text-white p-2 lg:p-5 hover:animate-pulse">
            Join the waitlist
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="lg:max-w-[951px]  lg:min-h-[667px] flex flex-col justify-center items-center rounded-4xl">
        <DialogHeader>
          {add.isSuccess ? (
            <>
              <DialogTitle className="text-3xl md:text-4xl text-center font-bold tracking-tighter mb-2 font-[family-name:var(--font-trap)]">
                Congratulations!
              </DialogTitle>
              <DialogDescription className="text-base lg:text-lg text-center text-black  max-w-xl mx-auto font-[family-name:var(--font-transforma-sans)]">
                You&apos;re officially on the list! Check your inbox soon—we’ll send
                you a confirmation email with more details shortly.
              </DialogDescription>
            </>
          ) : (
            <>
              <DialogTitle className="text-3xl md:text-4xl text-center font-bold tracking-tighter mb-2 font-[family-name:var(--font-trap)]">
                Join the Waitlist
              </DialogTitle>
              <DialogDescription className="text-base lg:text-lg text-center text-black  max-w-xl mx-auto font-[family-name:var(--font-transforma-sans)]">
                Be among the first to experience Ticketeur. Join our waitlist
                today and get exclusive early access and updates.
              </DialogDescription>
            </>
          )}
        </DialogHeader>
        <Image src={Gift} alt={Gift} className="mx-auto mt-5 z-5" />
        {add.isSuccess ? (
          <>
            <Button
              onClick={() => {
                add.reset();
                setOpen(false);
              }}
              className="rounded-4xl font-[family-name:var(--font-transforma-sans)] text-xs font-bold text-white p-2 lg:p-5 hover:animate-pulse"
            >
              Explore Homepage
            </Button>
          </>
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              className="lg:flex items-center gap-5 w-full max-w-xl mx-auto mt-5"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 w-full  text-sm border border-[#E1E3EE] focus:outline-none focus:ring-2 focus:ring-purple-500  bg-white rounded-2xl p-3 placeholder:font-[family-name:var(--font-transforma-sans)]"
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
          </>
        )}

        <Image
          src={TopCurve}
          alt={TopCurve}
          className="absolute top-0 right-0"
        />
        <Image
          src={BottomCurve}
          alt={BottomCurve}
          className="absolute left-0 bottom-0"
        />
      </DialogContent>
    </Dialog>
  );
}
