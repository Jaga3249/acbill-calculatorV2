import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqData = [
  {
    question: "How is the electricity bill calculated for an air conditioner?",
    content: (
      <>
        <p className="mb-2">
          The electricity bill for an air conditioner is calculated based on its
          power consumption, usage hours, and your electricity tariff. You can
          estimate it using this formula:
        </p>
        <p className="font-semibold mb-2">
          Power Consumption (kW) × Usage Hours × Electricity Rate (per kWh)
        </p>
        <p>
          Alternatively, use our
          <a
            href="https://acbillcalculator.com"
            target="_blank"
            className="text-blue-700 ml-1s"
          >
            AC Bill Calculator
          </a>{" "}
          to quickly calculate your air conditioner's electricity cost by
          entering details like capacity, star rating, and usage hours.
        </p>
      </>
    ),
  },
  {
    question:
      "What is the difference between a 3-star and 5-star AC in terms of electricity consumption?",
    content: (
      <>
        <p className="mb-2">
          A 5-star AC is more energy-efficient than a 3-star AC. It consumes
          less electricity for the same cooling output. On average, a 5-star AC
          can save up to <span className="font-semibold">20-30% energy</span>
          compared to a 3-star AC.
        </p>
        <p>
          For example, if a 3-star AC consumes 0.8 kWh per hour, a 5-star AC of
          the same capacity may consume only 0.6 kWh per hour. You can compare
          their power consumption using our
          <a
            href="https://acbillcalculator.com"
            target="_blank"
            className="text-blue-700 ml-1"
          >
            AC Power Consumption Calculator
          </a>
          .
        </p>
      </>
    ),
  },
  {
    question: "How can I reduce my AC electricity bill?",
    content: (
      <>
        <p>Here are some effective tips to reduce your AC electricity bill:</p>
        <ol className="list-decimal list-inside flex flex-col gap-2 mt-1 ml-3">
          <li>
            Set the thermostat to <span className="font-semibold">24-26°C</span>{" "}
            for optimal energy savings.
          </li>
          <li>
            Use the <span className="font-semibold">energy-saving mode</span> or
            eco mode if available.
          </li>
          <li>Regularly clean or replace the air filters.</li>
          <li>Ensure proper insulation in the room to reduce cooling loss.</li>
          <li>
            Choose energy-efficient ACs like a
            <span className="font-semibold"> 5-star inverter AC</span>.
          </li>
        </ol>
        <p className="mt-2">
          For more personalized savings tips, check out our
          <a
            href="https://acbillcalculator.com"
            target="_blank"
            className="text-blue-700 ml-1"
          >
            AC Energy Savings Calculator
          </a>
          .
        </p>
      </>
    ),
  },
  {
    question: "How do I calculate the monthly cost of running my AC?",
    content: (
      <>
        <p>
          To calculate the monthly cost of running your AC, multiply its daily
          power consumption by the number of days used in a month and the
          electricity rate. For example:
        </p>
        <ol className="list-decimal list-inside flex flex-col gap-1 mt-1 ml-3">
          <li>
            Daily Power Consumption:
            <span className="font-semibold"> 2 kWh/day</span>
          </li>
          <li>
            Usage Days: <span className="font-semibold">30 days</span>
          </li>
          <li>
            Electricity Rate: <span className="font-semibold">₹6/kWh</span>
          </li>
        </ol>
        <p className="font-semibold my-1">Monthly Cost = 2 × 30 × 6 = ₹360</p>
        <p>
          Use our
          <a
            href="https://acbillcalculator.com"
            target="_blank"
            className="text-blue-700 ml-1"
          >
            AC Monthly Running Cost Calculator
          </a>
          to get an accurate estimate tailored to your AC's brand, capacity, and
          usage.
        </p>
      </>
    ),
  },
];

const Faq = () => {
  return (
    <div className="md:mx-28 md:px-10 md:mt-5" id="faqs">
      <h1 className="font-semibold text-2xl font-serif">FAQs</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
