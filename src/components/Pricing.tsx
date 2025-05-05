import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$9.99",
    description: "Perfect for individuals with occasional legal questions",
    features: [
      "10 AI legal consultations per month",
      "Document review (up to 5 pages)",
      "Basic legal templates",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$29.99",
    description: "Ideal for small businesses and professionals",
    features: [
      "Unlimited AI legal consultations",
      "Document review (up to 25 pages)",
      "Full template library access",
      "Contract drafting assistance",
      "Priority email support",
      "Legal risk assessment",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$99.99",
    description:
      "Comprehensive solution for businesses with complex legal needs",
    features: [
      "Everything in Professional",
      "Unlimited document review",
      "Custom contract generation",
      "Regulatory compliance monitoring",
      "Dedicated account manager",
      "API access for integration",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">
            Pricing
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Plans for every legal need
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Choose the perfect plan for your requirements. All plans include a
            7-day free trial.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg shadow-lg overflow-hidden ${
                plan.highlighted
                  ? "border-2 border-teal-500 transform scale-105 z-10"
                  : "border border-gray-200"
              }`}
            >
              <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                <div>
                  <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-gray-100 text-gray-900">
                    {plan.name}
                  </h3>
                </div>
                <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                  {plan.price}
                  <span className="ml-1 text-2xl font-medium text-gray-500">
                    /month
                  </span>
                </div>
                <p className="mt-5 text-lg text-gray-500">{plan.description}</p>
              </div>
              <div className="px-6 pt-6 pb-8 bg-white sm:p-10">
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-6 w-6 text-teal-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    className={`w-full py-6 ${
                      plan.highlighted
                        ? "bg-teal-600 hover:bg-teal-700 text-white"
                        : "bg-white border border-teal-600 text-teal-600 hover:bg-teal-50"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
