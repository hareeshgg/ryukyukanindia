import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";

import {
  Loader2,
  Mail,
  MapPinCheck,
  Phone,
  Smartphone,
  User2,
} from "lucide-react";
import { Input } from "./ui/input";
import { Field, FieldError } from "./ui/field";

import { supabase } from "@/lib/lib";

const formSchema = z.object({
  name: z.string().min(3, "Name cannot be less than 3 characters"),
  email: z.email().min(1, "Email is required"),
  phone: z
    .string()
    .regex(
      /^\+?[1-9]\d{0,2}[-\s]?\(?\d{1,4}\)?[-\s]?\d{3,4}[-\s]?\d{3,4}$/,
      "Please enter correct number format"
    )
    .min(10)
    .max(11),
  dojo: z.string().min(1, "Select a dojo"),
});

export default function CallToAction() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      dojo: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const { error } = await supabase.from("enrollments").insert([
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        dojo: data.dojo,
      },
    ]);

    if (error) {
      console.error(error);
      toast("Something went wrong. Please try again.");
      return;
    }

    await fetch(
      "https://gqmqdfqxeviqsdytvuxm.supabase.co/functions/v1/notify-enrollment",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    toast("You have successfully enrolled!");
    console.log(data);
    form.reset();
  };
  return (
    <section className="py-16 md:py-32" id="enroll">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Visit Our<span className="text-secondary"> DOJO</span>
          </h2>
          <p className="mt-4">
            Start your journey today. Discipline begins with a single step.
          </p>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto mt-10 max-w-sm lg:mt-12 flex flex-col gap-3"
          >
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <div className="bg-background has-[input:focus]:ring-ring relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                    <User2 className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />
                    <Input
                      {...field}
                      id="form-rhf-ctc-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="Hareesh Gurung"
                      autoComplete="off"
                      className="h-14 w-full bg-transparent pl-12 focus:outline-none border-0"
                      noFocusRing
                    />
                  </div>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <div className="bg-background has-[input:focus]:ring-ring relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                    <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />
                    <Input
                      {...field}
                      id="form-rhf-ctc-name"
                      aria-invalid={fieldState.invalid}
                      type="email"
                      placeholder="hareesh@gmail.com"
                      autoComplete="off"
                      className="h-14 w-full bg-transparent pl-12 focus:outline-none border-0"
                      noFocusRing
                    />
                  </div>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <div className="bg-background has-[input:focus]:ring-ring relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                    <Smartphone className="pointer-events-none absolute left-5 size-5 text-caption" />
                    <span className="absolute left-12 text-muted-foreground text-sm">
                      +91
                    </span>
                    <Input
                      {...field}
                      id="form-rhf-ctc-name"
                      aria-invalid={fieldState.invalid}
                      type="tel"
                      placeholder="81692 06488"
                      autoComplete="off"
                      className="h-14 w-full bg-transparent pl-20 focus:outline-none border-0"
                      noFocusRing
                    />
                  </div>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="dojo"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <div className="h-14 bg-background relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[data-state=open]:ring-ring has-[data-state=open]:ring-2">
                    {" "}
                    <MapPinCheck className="absolute left-5 size-5 text-caption pointer-events-none" />
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger
                        aria-invalid={fieldState.invalid}
                        className="h-14 w-full bg-transparent pl-12 border-0 focus:outline-none focus-visible:ring-0"
                      >
                        <SelectValue placeholder="Select a dojo" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="Holy Cross - Mira Road">
                          Holy Cross School, Mira Road
                        </SelectItem>
                        <SelectItem value="PG Vora - Mira Road">
                          PG Vora, Mira Road
                        </SelectItem>
                        <SelectItem value="RBK - Bhayandar">
                          RBK, Bhayandar
                        </SelectItem>
                        <SelectItem value="RBK - Chembur">
                          RBK, Chembur
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Button
              aria-label="submit"
              variant="secondary"
              className="rounded-[calc(var(--radius)+0.75rem)] h-12 w-full hover:cursor-pointer"
              disabled={form.formState.isSubmitting}
            >
              <span className="text-muted">
                {form.formState.isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Book A Free Trial"
                )}
              </span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
