import { Section } from "@/app/(home)/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const creatorFaq = [
  {
    question: "How do I start my project on DAOCre-8?",
    answer:
      "Kickstart your project by creating an account, filling in the necessary details about your project, and setting up your fundraising goals and tiers.",
  },
  {
    question: "How are funds distributed?",
    answer:
      "Funds are distributed based on the milestones achieved, ensuring a transparent and fair allocation that aligns with project progress.",
  },
  {
    question: "Can I upgrade my project's NFT rarity?",
    answer:
      "Absolutely! As your project garners more support and reaches certain milestones, the rarity of your project's NFT can be upgraded, enhancing its value.",
  },
  {
    question: "How can I engage with my backers?",
    answer:
      "Utilize the built-in polls and discussion features to gather feedback, share updates, and keep your backers involved in your project's journey.",
  },
  {
    question: "How do I handle disputes or issues?",
    answer:
      "Our platform provides a structured resolution framework to address disputes or issues, ensuring fair treatment for all parties involved.",
  },
  {
    question: "Can I collaborate with other creators?",
    answer:
      "Absolutely! DAOCre-8 encourages collaborations, allowing creators to work together on projects and share resources within the community.",
  },
];

const backerFaq = [
  {
    question: "How do I support a project?",
    answer:
      "Browse through innovative projects, select the one that resonates with you, choose your backing tier, and follow the prompts to complete your support.",
  },
  {
    question: "How are my funds utilized?",
    answer:
      "Your funds are allocated to the project's development as outlined in the milestones. You can track the progress and fund distribution through our platform.",
  },
  {
    question: "What do I get for backing a project?",
    answer:
      "Besides contributing to a cause you believe in, you'll receive a unique NFT representing your support and the tier of backing you've chosen.",
  },
  {
    question: "How do I track the progress of projects I've backed?",
    answer:
      "Log in to your account and visit the project's page to view updates, participate in polls, and engage with creators and other backers.",
  },
  {
    question: "What if a project I backed is not progressing?",
    answer:
      "Projects are structured to meet milestones for fund disbursement. If a project is not progressing, funds remain secured until milestones are achieved.",
  },
  {
    question: "How can I communicate with project creators?",
    answer:
      "Use the discussion features on the project's page to ask questions, share feedback, and interact with the creator and the community.",
  },
];

const SectionFaq = () => {
  return (
    <Section
      id={"section-how"}
      title={"FAQ"}
      description={"Got any questions?"}
      className="card-glass rounded-none"
      containerClassName="max-w-[95%] md:max-w-[90%] 2xl:max-w-[90%]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:space-x-8 w-full">
        {/* Creator FAQ */}
        <div className="flex flex-col gap-2">
          <span className="text-2xl text-secondary font-medium">
            For creators
          </span>
          <Accordion type="single" collapsible className="w-full">
            {creatorFaq.map((faq) => (
              <AccordionItem
                value={faq.question}
                key={faq.question}
                className="w-full"
              >
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Creator FAQ */}
        <div className="flex flex-col gap-2">
          <span className="text-2xl text-secondary font-medium">
            For backers
          </span>
          <Accordion type="single" collapsible className="w-full">
            {backerFaq.map((faq) => (
              <AccordionItem
                value={faq.question}
                key={faq.question}
                className="w-full"
              >
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
};

export default SectionFaq;
