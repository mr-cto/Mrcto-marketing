"use client";

import { useState } from "react";
import GhibliTotoro from "../../components/GhibliTotoro";
import GhibliDustBunny from "../../components/GhibliDustBunny";
import GhibliTree from "../../components/GhibliTree";
import GhibliCloud from "../../components/GhibliCloud";

interface PricingTier {
  name: string;
  complexity: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  examples: string[];
  icon: string;
  color: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Seedling",
    complexity: "Simple (1-3)",
    price: "$5K - $15K",
    duration: "2-4 weeks",
    description:
      "Perfect for small businesses taking their first steps into AI magic",
    features: [
      "Basic process automation",
      "Simple chatbots or forms",
      "Data visualization dashboards",
      "Email/document automation",
      "Basic analytics setup",
    ],
    examples: [
      "Automated customer service responses",
      "Simple inventory tracking",
      "Basic sales reporting",
      "Document processing workflows",
    ],
    icon: "🌱",
    color: "from-green-100 to-emerald-200",
  },
  {
    name: "Sapling",
    complexity: "Moderate (4-6)",
    price: "$15K - $50K",
    duration: "1-3 months",
    description:
      "Growing businesses ready to harness more sophisticated AI capabilities",
    features: [
      "Custom AI model development",
      "Multi-system integrations",
      "Advanced analytics & insights",
      "Predictive modeling",
      "API development & integration",
    ],
    examples: [
      "Customer behavior prediction",
      "Intelligent recommendation systems",
      "Advanced data analysis",
      "Custom ML models for specific needs",
    ],
    icon: "🌿",
    color: "from-blue-100 to-sky-200",
  },
  {
    name: "Ancient Tree",
    complexity: "Complex (7-8)",
    price: "$50K - $150K",
    duration: "3-6 months",
    description:
      "Established organizations seeking comprehensive AI transformation",
    features: [
      "Enterprise-grade AI solutions",
      "Complex system integrations",
      "Real-time processing",
      "Advanced security & compliance",
      "Custom training & support",
    ],
    examples: [
      "Enterprise-wide automation",
      "Real-time decision systems",
      "Complex data pipeline management",
      "Multi-department AI integration",
    ],
    icon: "🌳",
    color: "from-purple-100 to-indigo-200",
  },
  {
    name: "Forest Spirit",
    complexity: "Highly Complex (9-10)",
    price: "$150K+",
    duration: "6+ months",
    description:
      "Large enterprises requiring cutting-edge AI innovation and transformation",
    features: [
      "Cutting-edge AI research & development",
      "Large-scale system transformation",
      "Custom AI infrastructure",
      "Advanced machine learning platforms",
      "Ongoing innovation partnership",
    ],
    examples: [
      "AI-powered business transformation",
      "Custom AI research projects",
      "Large-scale data science platforms",
      "Industry-specific AI innovations",
    ],
    icon: "✨",
    color: "from-yellow-100 to-orange-200",
  },
];

export default function Pricing() {
  const [selectedComplexity, setSelectedComplexity] = useState<number | null>(
    null
  );

  const getRecommendedTier = (complexity: number): PricingTier => {
    if (complexity <= 3) return pricingTiers[0];
    if (complexity <= 6) return pricingTiers[1];
    if (complexity <= 8) return pricingTiers[2];
    return pricingTiers[3];
  };

  return (
    <main className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-sky-100 via-green-50 to-emerald-100">
        {/* Background elements */}
        <div className="absolute inset-0">
          <GhibliCloud
            className="absolute top-10 left-10 text-white opacity-60 animate-float-slow"
            size="large"
          />
          <GhibliCloud
            className="absolute top-20 right-20 text-white opacity-50 animate-float-medium"
            size="medium"
          />
          <GhibliTree
            className="absolute bottom-0 left-10 opacity-30"
            size="large"
          />

          {/* Welcoming Totoro */}
          <GhibliTotoro
            className="absolute bottom-20 right-1/4 animate-float-slow opacity-25"
            size="large"
            variant="blue"
          />

          {/* Friendly dust bunnies */}
          {[...Array(12)].map((_, i) => (
            <GhibliDustBunny
              key={i}
              className={`absolute animate-float-${
                ["slow", "medium", "fast"][i % 3]
              } opacity-25`}
              size="small"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-green-800 mb-6 font-serif animate-fade-in-up">
            AI Magic Pricing
          </h1>
          <p className="text-xl text-green-600 mb-8 animate-fade-in-up animation-delay-300">
            Like the magical seeds that grow into magnificent trees, our AI
            solutions are cultivated specifically for each unique business.
            Pricing reflects the complexity and scope of your transformation
            journey.
          </p>
        </div>
      </section>

      {/* Complexity Calculator */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4 font-serif">
              Discover Your Project Complexity
            </h2>
            <p className="text-lg text-green-600 max-w-2xl mx-auto">
              Answer a few questions to understand your project's complexity and
              get personalized pricing recommendations.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  Complexity Factors
                </h3>
                <div className="space-y-3 text-green-700">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">📊</span>
                    <span>Data volume and complexity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">🔗</span>
                    <span>System integrations needed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">🧠</span>
                    <span>AI/ML sophistication required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">🏢</span>
                    <span>Organization size and scale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">⚡</span>
                    <span>Timeline and urgency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">🔒</span>
                    <span>Security and compliance needs</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  Get Your Estimate
                </h3>
                <p className="text-green-600 mb-4">
                  Based on your conversation with Totoro, we can provide a
                  complexity score and pricing estimate.
                </p>
                <button
                  onClick={() => {
                    // Clear any existing chat session and start fresh
                    if (typeof window !== "undefined") {
                      localStorage.removeItem("ghibli-chat-session");
                      // Trigger chat widget to open with complexity assessment
                      window.dispatchEvent(
                        new CustomEvent("startComplexityAssessment")
                      );
                    }
                  }}
                  className="ghibli-button primary"
                >
                  Calculate My Project Complexity ✨
                </button>

                {selectedComplexity && (
                  <div className="mt-4 p-4 bg-white rounded-2xl border-2 border-green-200">
                    <p className="text-green-800 font-semibold">
                      Your Complexity Score: {selectedComplexity}/10
                    </p>
                    <p className="text-green-600 text-sm mt-1">
                      Recommended tier:{" "}
                      {getRecommendedTier(selectedComplexity).name}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-6 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4 font-serif">
              Choose Your AI Journey
            </h2>
            <p className="text-lg text-green-600 max-w-2xl mx-auto">
              Each tier represents a different level of AI transformation, from
              simple automation to enterprise-wide innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative bg-gradient-to-br ${
                  tier.color
                } rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  selectedComplexity &&
                  getRecommendedTier(selectedComplexity).name === tier.name
                    ? "ring-4 ring-green-500 ring-opacity-50"
                    : ""
                }`}
              >
                {selectedComplexity &&
                  getRecommendedTier(selectedComplexity).name === tier.name && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Recommended for You!
                    </div>
                  )}

                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{tier.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {tier.complexity}
                  </p>
                  <div className="text-3xl font-bold text-gray-800 mb-1">
                    {tier.price}
                  </div>
                  <p className="text-sm text-gray-600">{tier.duration}</p>
                </div>

                <p className="text-gray-700 mb-6 text-center leading-relaxed">
                  {tier.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {tier.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <span className="text-green-500 mt-1">✨</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Perfect For:
                  </h4>
                  <ul className="space-y-1">
                    {tier.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-gray-600">
                        • {example}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.dispatchEvent(
                        new CustomEvent("openChat", {
                          detail: {
                            message: `I'm interested in the ${tier.name} tier (${tier.complexity}). Can you help me get started?`,
                          },
                        })
                      );
                    }
                  }}
                  className="ghibli-button primary w-full"
                >
                  Start Your {tier.name} Journey
                </button>

                <GhibliDustBunny
                  className="absolute top-4 right-4 opacity-15 animate-float-slow"
                  size="small"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-6 font-serif">
            Need Something Unique?
          </h2>
          <p className="text-lg text-green-600 mb-8 leading-relaxed">
            Like the magical creatures of the forest, every business has unique
            needs. If none of our standard tiers fit your vision, we'd love to
            craft a custom solution just for you.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Research & Innovation
              </h3>
              <p className="text-gray-600">
                Cutting-edge AI research projects and experimental solutions
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Industry-Specific
              </h3>
              <p className="text-gray-600">
                Specialized solutions for unique industry requirements
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Global Scale
              </h3>
              <p className="text-gray-600">
                Enterprise solutions spanning multiple regions and systems
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.dispatchEvent(
                  new CustomEvent("openChat", {
                    detail: {
                      message:
                        "I need a custom AI solution that doesn't fit your standard tiers. Can we discuss my unique requirements?",
                    },
                  })
                );
              }
            }}
            className="ghibli-button primary text-lg"
          >
            Discuss Custom Solutions ✨
          </button>
        </div>
      </section>
    </main>
  );
}
