"use client";

import Link from "next/link";
import { PiCheckCircleFill } from "react-icons/pi";
import PricingNavbar from "@/components/pricing-navbar";

const plans = [
  {
    index: 0,
    name: "Basic",
    price: "$29.99 / month",
    features: [
      "10 scheduled posts/month",
      "2 connected social account",
      "Basic analytics",
      "Access to 5 design templates",
      "Email support",
    ],
    style:
      "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "For small creators & beginners just starting out with essential tools.",
  },
  {
    index: 1,
    name: "Premium",
    price: "$119.99 / month",
    features: [
      "Unlimited scheduled posts",
      "5 connected social accounts",
      "In-depth analytics dashboard",
      "30+ premium templates",
      "Smart AI Post Generator",
      "Auto-posting to Instagram & Facebook",
      "Live chat support",
    ],
    style:
      "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "For businesses and creators who want to grow their brand faster with more features.",
  },
  {
    index: 2,
    name: "Advanced",
    feature: "Top Value",
    price: "$210 / month",
    features: [
      "Everything in Premium",
      "Unlimited connected accounts",
      "Priority feature access",
      "Smart Scheduler with advanced AI",
      "Custom campaign planning",
      "Dedicated Success Manager",
      "Performance Reporting & Strategy Calls",
      "Automation",
    ],
    style:
      "h-full rounded-3xl py-10 flex flex-col bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "For serious businesses ready to scale fast with expert strategy and automation.",
  },
];

const Pricing = () => {
  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <PricingNavbar />

      <div className="flex items-center justify-center flex-col">
        <div className="text-5xl pb-10 md:pb-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50">
          Simple Pricing <br /> Choose your plan
        </div>
        <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="h-full flex flex-col justify-between border rounded-3xl px-6"
            >
              <div className={plan.style}>
                <div className="text-4xl flex items-center font-medium">
                  {plan.name}
                  {plan.feature === "Top Value" && (
                    <div className="text-sm font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full ml-4 items-center">
                      {plan.feature}
                    </div>
                  )}
                </div>
                <div className="text-3xl pt-6 ">{plan.price}</div>
                <div className="py-6">{plan.description}</div>

                <ul>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-lg py-2 flex space-x-2 items-center"
                    >
                      <PiCheckCircleFill
                        className={`mr-2 text-xl ${
                          plan.feature === "Top Value"
                            ? "text-purple-400"
                            : "text-green-600"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  href="/contact"
                  className={`rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center ${
                    plan.feature === "Top Value"
                      ? "bg-gradient-to-r from-purple-500 to-blue-300"
                      : "bg-gradient-to-r from-emerald-500 to-blue-300"
                  }`}
                >
                  Subscribe
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
