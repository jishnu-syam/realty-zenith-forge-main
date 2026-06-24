import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { faqsQuery } from "@/lib/queries";
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — Capital Realty" },
      { name: "description", content: "Common questions about buying construction-ready plots in Kochi, NRI investment, legal verification and registration." },
      { property: "og:title", content: "FAQ — Capital Realty" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(faqsQuery),
  component: FaqPage,
});

function FaqPage() {
  const { data: faqs } = useSuspenseQuery(faqsQuery);
  return (
    <>
      <section className="pt-40 pb-16 bg-navy text-white">
        <div className="container-wide">
          <span className="eyebrow text-gold">Frequently Asked</span>
          <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.05]">
            Questions, <span className="italic text-gold">answered</span>.
          </h1>
        </div>
      </section>

      <section className="section-padding container-wide max-w-4xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f) => (
            <AccordionItem
              key={f.id}
              value={f.id}
              className="border border-border bg-background data-[state=open]:bg-mist transition-colors"
            >
              <AccordionTrigger className="px-6 py-5 text-left font-display text-lg hover:no-underline hover:text-gold">
                {f.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-base leading-relaxed text-muted-foreground">
                {f.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
