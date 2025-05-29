import GhibliTotoro from "../../../components/GhibliTotoro";
import GhibliDustBunny from "../../../components/GhibliDustBunny";
import GhibliTree from "../../../components/GhibliTree";
import GhibliCloud from "../../../components/GhibliCloud";

export default function CustomSolutions() {
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

          {/* Craftsman Totoros representing custom work */}
          <GhibliTotoro
            className="absolute bottom-20 left-1/4 animate-float-slow opacity-25"
            size="large"
            variant="gray"
          />
          <GhibliTotoro
            className="absolute bottom-16 right-1/4 animate-float-medium opacity-20"
            size="medium"
            variant="blue"
          />

          {/* Creative dust bunnies representing unique solutions */}
          {[...Array(18)].map((_, i) => (
            <GhibliDustBunny
              key={i}
              className={`absolute animate-float-${
                ["slow", "medium", "fast"][i % 3]
              } opacity-30`}
              size={["small", "medium"][i % 2] as "small" | "medium"}
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
            Custom AI Solutions
          </h1>
          <p className="text-xl text-green-600 mb-8 animate-fade-in-up animation-delay-300">
            Like the unique magical creatures in every Ghibli film, your
            organization deserves AI solutions crafted specifically for your
            world.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-green-800 mb-6 font-serif">
                Crafted Just for You
              </h2>
              <p className="text-green-600 leading-relaxed mb-6">
                Every organization is as unique as the magical worlds in Studio
                Ghibli films. That's why we don't believe in one-size-fits-all
                solutions. Instead, we craft bespoke AI systems that understand
                your specific needs, culture, and goals.
              </p>
              <p className="text-green-600 leading-relaxed mb-6">
                From the initial spark of an idea to the final implementation,
                we work closely with you to create AI solutions that feel like
                they were always meant to be part of your organization -
                natural, intuitive, and perfectly aligned with your vision.
              </p>
            </div>

            <div className="relative animate-fade-in-up animation-delay-300">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex justify-center space-x-2 mb-6">
                  <GhibliTotoro
                    size="medium"
                    variant="gray"
                    className="animate-float-slow"
                  />
                  <div className="flex flex-col space-y-2">
                    <GhibliTotoro
                      size="small"
                      variant="blue"
                      className="animate-float-medium"
                    />
                    <GhibliTotoro
                      size="small"
                      variant="gray"
                      className="animate-float-fast"
                    />
                  </div>
                  <GhibliTotoro
                    size="medium"
                    variant="blue"
                    className="animate-float-slow"
                  />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4 text-center font-serif">
                  Your AI Craftsmen
                </h3>
                <p className="text-green-600 text-center">
                  Like master artisans in an enchanted workshop, we carefully
                  craft each solution with attention to every magical detail.
                </p>
              </div>

              {/* Creative dust bunnies around the card */}
              {[...Array(12)].map((_, i) => (
                <GhibliDustBunny
                  key={i}
                  className={`absolute animate-float-${
                    ["slow", "medium", "fast"][i % 3]
                  } opacity-20`}
                  size="small"
                  style={{
                    left: `${-15 + i * 12}%`,
                    top: `${5 + (i % 6) * 12}%`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions Types */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-50 to-sky-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-green-800 mb-16 text-center font-serif animate-fade-in-up">
            What We Can Create Together
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up relative">
              <div className="text-6xl mb-6 text-center">🤖</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Intelligent Assistants
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Create AI companions that understand your business and help your
                team work more effectively.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-slow"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-200 relative">
              <div className="text-6xl mb-6 text-center">🔮</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Predictive Systems
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Build crystal balls for your business that forecast trends and
                anticipate needs.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-medium"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-400 relative">
              <div className="text-6xl mb-6 text-center">🎨</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Creative AI
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Develop AI that enhances creativity, from content generation to
                design assistance.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-fast"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-600 relative">
              <div className="text-6xl mb-6 text-center">🌐</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Integration Platforms
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Connect all your systems with AI-powered bridges that make
                everything work in harmony.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-slow"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-800 relative">
              <div className="text-6xl mb-6 text-center">🛡️</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Security & Compliance
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Build protective AI guardians that keep your data safe while
                enabling innovation.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-medium"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-1000 relative">
              <div className="text-6xl mb-6 text-center">🌱</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Industry-Specific AI
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Create solutions tailored to your industry's unique challenges
                and opportunities.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-fast"
                size="small"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-100 to-emerald-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-green-800 mb-16 text-center font-serif animate-fade-in-up">
            Our Magical Approach
          </h2>

          <div className="space-y-12">
            <div className="flex items-center gap-8 animate-fade-in-up">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-2 font-serif">
                  Dream Together
                </h3>
                <p className="text-green-600 leading-relaxed">
                  We start by understanding your vision, challenges, and dreams
                  - like characters meeting for the first time in a Ghibli film.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 animate-fade-in-up animation-delay-300">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-2 font-serif">
                  Design with Wonder
                </h3>
                <p className="text-green-600 leading-relaxed">
                  We craft detailed plans that balance technical excellence with
                  the magical user experience your team deserves.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 animate-fade-in-up animation-delay-600">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-2 font-serif">
                  Build with Care
                </h3>
                <p className="text-green-600 leading-relaxed">
                  Every line of code is written with the same attention to
                  detail that makes Ghibli films timeless.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 animate-fade-in-up animation-delay-900">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-2 font-serif">
                  Launch & Nurture
                </h3>
                <p className="text-green-600 leading-relaxed">
                  We don't just deliver and disappear - we help your AI solution
                  grow and evolve like a living, magical creature.
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

      {/* Success Stories Preview */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-100 to-sky-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-green-800 mb-16 text-center font-serif animate-fade-in-up">
            Magical Transformations
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg animate-fade-in-up relative">
              <div className="text-4xl mb-4 text-center">🏥</div>
              <h3 className="text-xl font-bold text-green-800 mb-3 font-serif text-center">
                Healthcare AI
              </h3>
              <p className="text-green-600 text-center text-sm">
                Created an AI assistant that helps doctors diagnose rare
                conditions, improving patient outcomes by 40%.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-slow"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg animate-fade-in-up animation-delay-300 relative">
              <div className="text-4xl mb-4 text-center">🏭</div>
              <h3 className="text-xl font-bold text-green-800 mb-3 font-serif text-center">
                Manufacturing Magic
              </h3>
              <p className="text-green-600 text-center text-sm">
                Built predictive maintenance AI that reduced equipment downtime
                by 60% and saved millions in repairs.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-medium"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg animate-fade-in-up animation-delay-600 relative">
              <div className="text-4xl mb-4 text-center">🎓</div>
              <h3 className="text-xl font-bold text-green-800 mb-3 font-serif text-center">
                Education Enhancement
              </h3>
              <p className="text-green-600 text-center text-sm">
                Developed personalized learning AI that adapts to each student's
                pace, improving test scores by 35%.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-fast"
                size="small"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-200 to-emerald-300">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <h2 className="text-5xl font-bold text-green-800 mb-6 font-serif animate-fade-in-up">
              Ready to Create Something Magical?
            </h2>
            <p className="text-xl text-green-600 mb-12 animate-fade-in-up animation-delay-300">
              Let's craft an AI solution as unique and wonderful as your
              organization's dreams.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
              <button className="ghibli-button primary text-lg">
                Start Custom Project
              </button>
              <button className="ghibli-button secondary text-lg">
                Schedule Discovery Call
              </button>
            </div>

            {/* Craftsman Totoros */}
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

            {/* Creative dust bunnies */}
            {[...Array(20)].map((_, i) => (
              <GhibliDustBunny
                key={i}
                className={`absolute animate-float-${
                  ["slow", "medium", "fast"][i % 3]
                } opacity-25`}
                size={["small", "medium"][i % 2] as "small" | "medium"}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
