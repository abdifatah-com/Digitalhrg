import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DigitalBoostAgency = () => {
  return (
    <div
      className="mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl"
    >
      <div className="p-10 md:p-4 md:px-20">
        <div className="text-3xl md:text-7xl font-bold text-black">
          
        </div>
        <div className="font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
          Get your answers here.
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What services does Digital Boost Agency offer?</AccordionTrigger>
            <AccordionContent>
              Digital Boost Agency specializes in digital marketing, branding, website design, social media management, SEO, and performance-driven campaigns tailored to your business growth.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How can I start working with Digital Boost Agency?</AccordionTrigger>
            <AccordionContent>
              Simply contact us via our website or book a call, and one of our marketing experts will guide you through the process within 24 hours.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>What is your pricing model?</AccordionTrigger>
            <AccordionContent>
              We offer custom-tailored marketing solutions to fit your specific business needs and budget. Reach out to us for a personalized quote.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>What kind of support do you provide?</AccordionTrigger>
            <AccordionContent>
              Our team provides dedicated Monday to Friday support to help your business succeed at every step of your digital marketing journey.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default DigitalBoostAgency;
