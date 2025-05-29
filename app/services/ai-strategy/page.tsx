import GhibliTotoro from "../../../components/GhibliTotoro";
import GhibliDustBunny from "../../../components/GhibliDustBunny";
import GhibliTree from "../../../components/GhibliTree";
import GhibliCloud from "../../../components/GhibliCloud";

export default function AIStrategy() {
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

          {/* Wise Totoro representing strategic thinking */}
          <GhibliTotoro
            className="absolute bottom-20 right-1/4 animate-float-slow opacity-25"
            size="large"
            variant="blue"
          />

          {/* Dust bunnies representing ideas */}
          {[...Array(15)].map((_, i) => (
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
            AI Strategy & Vision
          </h1>
          <p className="text-xl text-green-600 mb-8 animate-fade-in-up animation-delay-300">
            Like mapping the enchanted paths through Totoro's forest, we help
            you chart your AI journey with wisdom and wonder.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-green-800 mb-6 font-serif">
                Charting Your Magical Path
              </h2>
              <p className="text-green-600 leading-relaxed mb-6">
                Every great adventure begins with understanding where you are
                and where you want to go. Our AI Strategy & Vision service is
                like having Totoro as your guide - wise, patient, and deeply
                understanding of the magical possibilities that lie ahead.
              </p>
              <p className="text-green-600 leading-relaxed mb-6">
                We work with your leadership team to create a comprehensive AI
                roadmap that aligns with your organization's values, goals, and
                culture. No two journeys are the same, and we ensure your AI
                strategy is as unique as your organization.
              </p>
            </div>

            <div className="relative animate-fade-in-up animation-delay-300">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex justify-center mb-6">
                  <GhibliTotoro
                    size="large"
                    variant="blue"
                    className="animate-float-slow"
                  />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4 text-center font-serif">
                  Your AI Guide
                </h3>
                <p className="text-green-600 text-center">
                  Like Totoro guiding children through the forest, we'll help
                  you navigate the AI landscape with confidence and wonder.
                </p>
              </div>

              {/* Floating dust bunnies around the card */}
              {[...Array(6)].map((_, i) => (
                <GhibliDustBunny
                  key={i}
                  className={`absolute animate-float-${
                    ["slow", "medium", "fast"][i % 3]
                  } opacity-20`}
                  size="small"
                  style={{
                    left: `${-10 + i * 25}%`,
                    top: `${10 + (i % 3) * 20}%`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-50 to-sky-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-green-800 mb-16 text-center font-serif animate-fade-in-up">
            What We Deliver
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up relative">
              <div className="text-6xl mb-6 text-center">🗺️</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                AI Roadmap
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                A detailed map of your AI journey, with clear milestones,
                timelines, and magical destinations.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-slow"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-300 relative">
              <div className="text-6xl mb-6 text-center">🎯</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Use Case Identification
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Discover the most impactful AI opportunities hidden within your
                organization's daily magic.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-medium"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-600 relative">
              <div className="text-6xl mb-6 text-center">⚖️</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Risk Assessment
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Identify potential challenges and create protective barriers,
                like Totoro's forest spirits.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-fast"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-900 relative">
              <div className="text-6xl mb-6 text-center">👥</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Team Alignment
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Bring your entire organization together around a shared AI
                vision and magical purpose.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-slow"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-1200 relative">
              <div className="text-6xl mb-6 text-center">📊</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Success Metrics
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Define clear measures of success so you can celebrate each
                magical milestone achieved.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-medium"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-1500 relative">
              <div className="text-6xl mb-6 text-center">🌱</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Growth Plan
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                A sustainable plan for growing your AI capabilities like tending
                a magical garden.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-fast"
                size="small"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-100 to-emerald-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-green-800 mb-16 text-center font-serif animate-fade-in-up">
            Our Magical Process
          </h2>

          <div className="space-y-12">
            <div className="flex items-center gap-8 animate-fade-in-up">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-2 font-serif">
                  Discovery & Understanding
                </h3>
                <p className="text-green-600 leading-relaxed">
                  Like Totoro getting to know new friends, we spend time
                  understanding your organization, culture, challenges, and
                  dreams.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 animate-fade-in-up animation-delay-300">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-2 font-serif">
                  Vision Crafting
                </h3>
                <p className="text-green-600 leading-relaxed">
                  Together, we paint a picture of your AI-enhanced future, as
                  vivid and inspiring as a Ghibli landscape.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 animate-fade-in-up animation-delay-600">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-2 font-serif">
                  Roadmap Creation
                </h3>
                <p className="text-green-600 leading-relaxed">
                  We create a detailed path forward, with clear steps,
                  timelines, and magical milestones to guide your journey.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 animate-fade-in-up animation-delay-900">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-2 font-serif">
                  Team Enablement
                </h3>
                <p className="text-green-600 leading-relaxed">
                  We ensure your team is ready and excited for the journey
                  ahead, with the knowledge and confidence to succeed.
                </p>
              </div>
            </div>
          </div>

          {/* Background Totoros */}
          <GhibliTotoro
            className="absolute top-20 right-10 opacity-10 animate-float-slow"
            size="large"
            variant="gray"
          />
          <GhibliTotoro
            className="absolute bottom-20 left-10 opacity-10 animate-float-medium"
            size="medium"
            variant="blue"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-200 to-emerald-300">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <h2 className="text-5xl font-bold text-green-800 mb-6 font-serif animate-fade-in-up">
              Ready to Chart Your AI Journey?
            </h2>
            <p className="text-xl text-green-600 mb-12 animate-fade-in-up animation-delay-300">
              Let's create an AI strategy as magical and unique as your
              organization.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
              <button className="ghibli-button primary text-lg">
                Start Strategy Session
              </button>
              <button className="ghibli-button secondary text-lg">
                Download AI Readiness Guide
              </button>
            </div>

            {/* Strategic Totoros */}
            <GhibliTotoro
              className="absolute -left-20 top-0 opacity-20 animate-float-slow"
              size="large"
              variant="blue"
            />
            <GhibliTotoro
              className="absolute -right-20 bottom-0 opacity-20 animate-float-medium"
              size="large"
              variant="gray"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
