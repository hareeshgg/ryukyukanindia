"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQs() {
  const faqItems = [
    {
      id: "item-1",
      question: "What style of martial art do you teach?",
      answer:
        "We teach traditional Okinawan Shorin-Ryu Karate under the Ryukyukan lineage, focusing on discipline, technique, self-defense, and character development.",
    },
    {
      id: "item-7",
      question: "Are trial classes available?",
      answer:
        "Yes. We encourage new students to attend a trial class to experience our training environment before enrolling.",
    },
    {
      id: "item-9",
      question: "Is karate training safe for children?",
      answer:
        "Safety is our top priority. All classes are supervised by qualified instructors, with age-appropriate and controlled training methods.",
    },
    {
      id: "item-2",
      question: "What is the minimum age to join?",
      answer:
        "Children can begin training from the age of 4. Each student is assessed to ensure they are placed in the most suitable program.",
    },

    {
      id: "item-4",
      question: "How long are the training sessions?",
      answer:
        "Most classes are 60 minutes long, depending on the age group and training program.",
    },
    {
      id: "item-5",
      question: "What equipment or uniform is required?",
      answer:
        "Students are required to wear a karate uniform (gi) which is provided by the dojo. Basic protective equipment may be needed for kumite training and can be guided by our instructors.",
    },
    {
      id: "item-6",
      question: "Do you conduct belt examinations?",
      answer:
        "Yes. Belt promotions are conducted periodically based on skill level, attendance, discipline, and overall progress.",
    },

    {
      id: "item-8",
      question: "Do you train students for competitions?",
      answer:
        "Yes. Interested and eligible students receive specialized training for kata, kumite, and other competitive events.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Discover quick and comprehensive answers to common questions about
            our platform, services, and features.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1"
          >
            {faqItems.map((item) => (
              <div className="group" key={item.id}>
                <AccordionItem
                  value={item.id}
                  className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    <h3 className="inter font-bold">{item.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
              </div>
            ))}
          </Accordion>

          <p className="text-center text-muted-foreground mt-6 px-8">
            Can't find what you're looking for?{" "}
            <Link
              href="tel:+919967507211"
              className="text-white font-medium hover:underline"
            >
              Click to contact us.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
