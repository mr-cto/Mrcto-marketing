import GhibliTotoro from "../../components/GhibliTotoro";
import GhibliDustBunny from "../../components/GhibliDustBunny";
import GhibliTree from "../../components/GhibliTree";
import GhibliCloud from "../../components/GhibliCloud";

export default function Terms() {
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
          <GhibliTree
            className="absolute bottom-0 right-20 opacity-25"
            size="medium"
          />

          {/* Wise Totoro representing guidance */}
          <GhibliTotoro
            className="absolute bottom-20 left-1/4 animate-float-slow opacity-25"
            size="large"
            variant="gray"
          />

          {/* Dust bunnies representing terms */}
          {[...Array(10)].map((_, i) => (
            <GhibliDustBunny
              key={i}
              className={`absolute animate-float-${
                ["slow", "medium", "fast"][i % 3]
              } opacity-20`}
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
            Terms of Service
          </h1>
          <p className="text-xl text-green-600 mb-8 animate-fade-in-up animation-delay-300">
            Like the ancient wisdom of the forest spirits, these terms guide our
            magical partnership.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-lg relative overflow-hidden">
            {/* Wise Totoro */}
            <GhibliTotoro
              className="absolute top-8 right-8 opacity-10 animate-float-slow"
              size="large"
              variant="blue"
            />

            <div className="relative z-10 prose prose-green max-w-none">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold text-green-800 mb-6 font-serif">
                  Welcome to Our Magical Agreement
                </h2>
                <p className="text-green-600 leading-relaxed mb-8">
                  These Terms of Service govern your use of AI Magic's services.
                  Like the unspoken understanding between Totoro and the
                  children, this agreement is built on mutual respect and shared
                  wonder.
                </p>
              </div>

              <div className="animate-fade-in-up animation-delay-300">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  🌟 Our Services
                </h3>
                <p className="text-green-600 leading-relaxed mb-4">
                  AI Magic provides artificial intelligence consulting,
                  development, and implementation services. Our magical
                  offerings include:
                </p>
                <ul className="list-none space-y-2 mb-8">
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">✨</span>
                    AI strategy and roadmap development
                  </li>
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">✨</span>
                    Custom AI solution development
                  </li>
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">✨</span>
                    Data analysis and machine learning implementation
                  </li>
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">✨</span>
                    Training and ongoing support
                  </li>
                </ul>
              </div>

              <div className="animate-fade-in-up animation-delay-600">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  🤝 Your Responsibilities
                </h3>
                <p className="text-green-600 leading-relaxed mb-4">
                  Like the children who respect Totoro's forest, we ask that
                  you:
                </p>
                <ul className="list-none space-y-2 mb-8">
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">🌱</span>
                    Provide accurate information for our services
                  </li>
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">🌱</span>
                    Use our services ethically and responsibly
                  </li>
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">🌱</span>
                    Respect intellectual property rights
                  </li>
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">🌱</span>
                    Maintain confidentiality of proprietary information
                  </li>
                </ul>
              </div>

              <div className="animate-fade-in-up animation-delay-900">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  🛡️ Our Commitments
                </h3>
                <p className="text-green-600 leading-relaxed mb-4">
                  Like Totoro's unwavering protection of the forest, we commit
                  to:
                </p>
                <ul className="list-none space-y-2 mb-8">
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">🔒</span>
                    Protecting your data with the highest security standards
                  </li>
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">🔒</span>
                    Delivering services with professional excellence
                  </li>
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">🔒</span>
                    Maintaining transparency in our processes
                  </li>
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">🔒</span>
                    Providing ongoing support and guidance
                  </li>
                </ul>
              </div>

              <div className="animate-fade-in-up animation-delay-1200">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  💫 Intellectual Property
                </h3>
                <p className="text-green-600 leading-relaxed mb-8">
                  Like the magical seeds that grow into magnificent trees,
                  intellectual property must be respected and nurtured. We
                  retain rights to our methodologies and frameworks, while you
                  retain rights to your data and business-specific
                  implementations.
                </p>
              </div>

              <div className="animate-fade-in-up animation-delay-1500">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  ⚖️ Limitation of Liability
                </h3>
                <p className="text-green-600 leading-relaxed mb-8">
                  While we strive for magical results, AI technology, like
                  nature itself, can be unpredictable. Our liability is limited
                  to the fees paid for our services. We encourage human
                  oversight and responsible implementation of all AI solutions.
                </p>
              </div>

              <div className="animate-fade-in-up animation-delay-1800">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  🌸 Termination
                </h3>
                <p className="text-green-600 leading-relaxed mb-8">
                  Either party may end our magical partnership with appropriate
                  notice. Like the changing seasons, all relationships have
                  their natural cycles. We'll ensure a smooth transition and
                  protect your interests throughout the process.
                </p>
              </div>

              <div className="animate-fade-in-up animation-delay-2100">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  🏛️ Governing Law
                </h3>
                <p className="text-green-600 leading-relaxed mb-8">
                  These terms are governed by the laws of the jurisdiction where
                  AI Magic operates, interpreted with the wisdom and fairness
                  that Totoro would approve of.
                </p>
              </div>

              <div className="animate-fade-in-up animation-delay-2400">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  📞 Questions About These Terms
                </h3>
                <p className="text-green-600 leading-relaxed mb-4">
                  If you have questions about these terms, our wise counselors
                  are here to help:
                </p>
                <div className="bg-green-50 rounded-2xl p-6 mb-8">
                  <p className="text-green-700 font-medium">
                    Email: t@mrcto.ai
                  </p>
                  <p className="text-green-700 font-medium">
                    Address: The Enchanted Forest, Legal Grove
                  </p>
                </div>
              </div>

              <div className="animate-fade-in-up animation-delay-2700">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  🔄 Updates to Terms
                </h3>
                <p className="text-green-600 leading-relaxed mb-8">
                  Like the forest that grows and changes with time, these terms
                  may evolve. We'll notify you of significant changes and ensure
                  they continue to reflect our shared values of respect,
                  transparency, and magical collaboration.
                </p>
                <p className="text-sm text-green-500">
                  Last updated: March 2025
                </p>
              </div>
            </div>

            {/* Floating dust bunnies representing terms and conditions */}
            {[...Array(8)].map((_, i) => (
              <GhibliDustBunny
                key={i}
                className={`absolute animate-float-${
                  ["slow", "medium", "fast"][i % 3]
                } opacity-15`}
                size="small"
                style={{
                  left: `${15 + i * 10}%`,
                  bottom: `${10 + (i % 4) * 12}%`,
                  animationDelay: `${i * 0.7}s`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Agreement Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-200 to-emerald-300">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <h2 className="text-5xl font-bold text-green-800 mb-6 font-serif animate-fade-in-up">
              A Partnership Built on Trust
            </h2>
            <p className="text-xl text-green-600 mb-12 animate-fade-in-up animation-delay-300">
              Like the bond between the forest spirits and those who respect
              nature, our agreement is founded on mutual trust, respect, and
              shared wonder.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
              <button className="ghibli-button primary text-lg">
                Begin Our Journey
              </button>
              <button className="ghibli-button secondary text-lg">
                Contact Legal Team
              </button>
            </div>

            {/* Wise Totoros representing agreement */}
            <GhibliTotoro
              className="absolute -left-20 top-0 opacity-20 animate-float-slow"
              size="large"
              variant="gray"
            />
            <GhibliTotoro
              className="absolute -right-20 bottom-0 opacity-20 animate-float-medium"
              size="large"
              variant="blue"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
