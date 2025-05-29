import GhibliTotoro from "../../../components/GhibliTotoro";
import GhibliDustBunny from "../../../components/GhibliDustBunny";
import GhibliTree from "../../../components/GhibliTree";
import GhibliCloud from "../../../components/GhibliCloud";

export default function TrainingSupport() {
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

          {/* Teacher Totoros representing guidance */}
          <GhibliTotoro
            className="absolute bottom-20 left-1/4 animate-float-slow opacity-25"
            size="large"
            variant="blue"
          />
          <GhibliTotoro
            className="absolute bottom-16 right-1/4 animate-float-medium opacity-20"
            size="medium"
            variant="gray"
          />

          {/* Learning dust bunnies representing knowledge */}
          {[...Array(22)].map((_, i) => (
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
            Training & Support
          </h1>
          <p className="text-xl text-green-600 mb-8 animate-fade-in-up animation-delay-300">
            Like wise mentors in Studio Ghibli films, we guide your team through
            every step of their AI journey with patience, wisdom, and care.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-green-800 mb-6 font-serif">
                Your AI Learning Journey
              </h2>
              <p className="text-green-600 leading-relaxed mb-6">
                In every Studio Ghibli film, wise mentors guide young heroes
                through their transformative journeys. Our training and support
                services work the same way - providing your team with the
                knowledge, confidence, and ongoing guidance they need to succeed
                with AI.
              </p>
              <p className="text-green-600 leading-relaxed mb-6">
                We don't just teach technical skills; we help your organization
                develop an AI mindset, build internal capabilities, and create a
                culture of continuous learning and innovation.
              </p>
            </div>

            <div className="relative animate-fade-in-up animation-delay-300">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex justify-center space-x-3 mb-6">
                  <GhibliTotoro
                    size="large"
                    variant="blue"
                    className="animate-float-slow"
                  />
                  <div className="flex flex-col space-y-1">
                    <GhibliTotoro
                      size="small"
                      variant="gray"
                      className="animate-float-medium"
                    />
                    <GhibliTotoro
                      size="small"
                      variant="blue"
                      className="animate-float-fast"
                    />
                    <GhibliTotoro
                      size="small"
                      variant="gray"
                      className="animate-float-medium"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4 text-center font-serif">
                  Your AI Mentors
                </h3>
                <p className="text-green-600 text-center">
                  Like Totoro teaching children about the magic of the forest,
                  we help your team discover the wonders of AI technology.
                </p>
              </div>

              {/* Learning dust bunnies around the card */}
              {[...Array(10)].map((_, i) => (
                <GhibliDustBunny
                  key={i}
                  className={`absolute animate-float-${
                    ["slow", "medium", "fast"][i % 3]
                  } opacity-25`}
                  size="small"
                  style={{
                    left: `${-10 + i * 13}%`,
                    top: `${10 + (i % 5) * 15}%`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-50 to-sky-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-green-800 mb-16 text-center font-serif animate-fade-in-up">
            Our Learning Adventures
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up relative">
              <div className="text-6xl mb-6 text-center">🎓</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                AI Fundamentals
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Start your journey with the basics - understanding AI like
                learning the language of the forest spirits.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-slow"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-200 relative">
              <div className="text-6xl mb-6 text-center">🛠️</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Hands-on Workshops
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Learn by doing with practical exercises that feel like magical
                experiments in an enchanted workshop.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-medium"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-400 relative">
              <div className="text-6xl mb-6 text-center">👥</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Team Training
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Bring your whole team together for collaborative learning
                adventures that build shared understanding.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-fast"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-600 relative">
              <div className="text-6xl mb-6 text-center">🎯</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Custom Curricula
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Tailored learning paths designed specifically for your industry
                and organizational needs.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-slow"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-800 relative">
              <div className="text-6xl mb-6 text-center">🌱</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Ongoing Mentorship
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Continuous guidance and support as your team grows their AI
                capabilities like tending a magical garden.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-medium"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-1000 relative">
              <div className="text-6xl mb-6 text-center">🏆</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Certification Programs
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Earn recognized credentials that validate your team's AI
                expertise and magical achievements.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-fast"
                size="small"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-100 to-emerald-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-green-800 mb-16 text-center font-serif animate-fade-in-up">
            Ongoing Support Magic
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4 animate-fade-in-up">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  🌟
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-serif">
                    24/7 Help Desk
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    Like forest spirits that never sleep, our support team is
                    always ready to help when you need guidance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-fade-in-up animation-delay-300">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  📚
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-serif">
                    Knowledge Library
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    Access our comprehensive collection of guides, tutorials,
                    and magical AI wisdom whenever you need it.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-fade-in-up animation-delay-600">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  🎥
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-serif">
                    Video Tutorials
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    Learn at your own pace with beautifully crafted video
                    lessons that make complex topics simple.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4 animate-fade-in-up animation-delay-900">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  👨‍🏫
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-serif">
                    Expert Consultations
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    Schedule one-on-one sessions with our AI experts for
                    personalized guidance and problem-solving.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-fade-in-up animation-delay-1200">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  🌐
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-serif">
                    Community Forum
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    Connect with other AI adventurers, share experiences, and
                    learn from a magical community.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-fade-in-up animation-delay-1500">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  🔄
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-serif">
                    Regular Updates
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    Stay current with the latest AI developments through regular
                    updates and new learning materials.
                  </p>
                </div>
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
              Ready to Begin Your Learning Adventure?
            </h2>
            <p className="text-xl text-green-600 mb-12 animate-fade-in-up animation-delay-300">
              Let's start your team's magical journey into the world of AI
              knowledge and expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
              <button className="ghibli-button primary text-lg">
                Start Training Program
              </button>
              <button className="ghibli-button secondary text-lg">
                Schedule Consultation
              </button>
            </div>

            {/* Teacher Totoros */}
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

            {/* Learning dust bunnies */}
            {[...Array(18)].map((_, i) => (
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
