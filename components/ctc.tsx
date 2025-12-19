import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";

import { Mail, MapPinCheck, Phone, Smartphone, User2 } from "lucide-react";
import { Input } from "./ui/input";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-32" id="enroll">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Visit Our<span className="text-accent"> DOJO!</span>
          </h2>
          <p className="mt-4">
            Start your journey today. Discipline begins with a single step.
          </p>

          <form
            action=""
            className="mx-auto mt-10 max-w-sm lg:mt-12 flex flex-col gap-3"
          >
            {/* <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
              <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

              <input
                placeholder="Your mail address"
                className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                type="email"
              />

              <div className="md:pr-1.5 lg:pr-0">
                <Button
                  aria-label="submit"
                  className="rounded-(--radius) bg-accent-foreground hover:bg-accent-foreground hover:cursor-pointer"
                >
                  <span className="hidden md:block text-muted">
                    Get Started
                  </span>
                  <SendHorizonal
                    className="relative mx-auto size-5 md:hidden text-black"
                    strokeWidth={2}
                  />
                </Button>
              </div>
            </div> */}
            <div className="bg-background has-[input:focus]:ring-ring relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
              <User2 className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

              <Input
                id="name"
                type="text"
                placeholder="Hareesh Gurung"
                required
                className="h-14 w-full bg-transparent pl-12 focus:outline-none border-0"
                noFocusRing
              />
            </div>

            <div className="bg-background has-[input:focus]:ring-ring relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
              <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

              <Input
                placeholder="hareesh@gmail.com"
                className="h-14 w-full bg-transparent pl-12 focus:outline-none border-0"
                type="email"
                required
                noFocusRing
              />
            </div>

            <div className="bg-background has-[input:focus]:ring-ring relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
              <Smartphone className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

              <Input
                placeholder="+91 81692 06488"
                className="h-14 w-full bg-transparent pl-12 focus:outline-none border-0"
                type="tel"
                required
                noFocusRing
              />
            </div>

            <div className="h-14 bg-background has-[input:focus]:ring-ring relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
              <MapPinCheck className="absolute left-5 size-5 text-caption" />
              <Select>
                <SelectTrigger className="w-full bg-transparent pl-12 focus:outline-none border-0">
                  <SelectValue placeholder="Select a dojo" />
                </SelectTrigger>

                <SelectContent className="-ml-6">
                  <SelectItem value="hccs">Holy Cross School</SelectItem>
                  <SelectItem value="rbk">RBK</SelectItem>
                  <SelectItem value="pgvora">PG Vora</SelectItem>
                </SelectContent>
              </Select>
              {/* ensure role is part of submitted data
                <input type="hidden" {...form.register("role")} /> */}
            </div>

            <Button
              aria-label="submit"
              variant="secondary"
              className="rounded-[calc(var(--radius)+0.75rem)] h-12 w-full hover:cursor-pointer"
            >
              <span className="text-muted">Book A Free Trial</span>
              {/* <SendHorizonal
                className="relative mx-auto size-5 md:hidden text-black"
                strokeWidth={2}
              /> */}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
