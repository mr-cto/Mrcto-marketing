import GhibliTotoro from "../../../components/GhibliTotoro";
import GhibliDustBunny from "../../../components/GhibliDustBunny";
import GhibliTree from "../../../components/GhibliTree";
import GhibliCloud from "../../../components/GhibliCloud";

export default function IntelligentAutomation() {
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

          {/* Helper Totoros representing automation */}
          <GhibliTotoro
            className="absolute bottom-20 left-1/4 animate-float-slow opacity-25"
            size="medium"
            variant="blue"
          />
          <GhibliTotoro
            className="absolute bottom-16 right-1/4 animate-float-medium opacity-20"
            size="large"
            variant="gray"
          />

          {/* Busy dust bunnies representing automated tasks */}
          {[...Array(20)].map((_, i) => (
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
            Intelligent Automation
          </h1>
          <p className="text-xl text-green-600 mb-8 animate-fade-in-up animation-delay-300">
            Like helpful forest spirits working quietly in the background, our
            AI automation solutions handle the mundane so your team can focus on
            the magical.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-green-800 mb-6 font-serif">
                Your Digital Forest Spirits
              </h2>
              <p className="text-green-600 leading-relaxed mb-6">
                In Studio Ghibli films, helpful spirits work behind the scenes
                to make life more wonderful. Our intelligent automation
                solutions do the same for your organization - handling
                repetitive tasks, processing information, and managing workflows
                so your team can focus on creativity and innovation.
              </p>
              <p className="text-green-600 leading-relaxed mb-6">
                From document processing to customer service, from data entry to
                complex decision-making, we create AI-powered automation that
                feels natural and intuitive, never cold or mechanical.
              </p>
            </div>

            <div className="relative animate-fade-in-up animation-delay-300">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex justify-center space-x-4 mb-6">
                  <GhibliTotoro
                    size="medium"
                    variant="blue"
                    className="animate-float-slow"
                  />
                  <GhibliTotoro
                    size="small"
                    variant="gray"
                    className="animate-float-medium"
                  />
                  <GhibliTotoro
                    size="medium"
                    variant="blue"
                    className="animate-float-slow"
                  />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4 text-center font-serif">
                  Your Automation Team
                </h3>
                <p className="text-green-600 text-center">
                  Like a family of forest spirits, each automation solution has
                  its own personality and specialty, working together in perfect
                  harmony.
                </p>
              </div>

              {/* Active dust bunnies around the card */}
              {[...Array(8)].map((_, i) => (
                <GhibliDustBunny
                  key={i}
                  className={`absolute animate-float-${
                    ["slow", "medium", "fast"][i % 3]
                  } opacity-25`}
                  size="small"
                  style={{
                    left: `${-15 + i * 18}%`,
                    top: `${5 + (i % 4) * 20}%`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Automation Areas */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-50 to-sky-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-green-800 mb-16 text-center font-serif animate-fade-in-up">
            Areas We Automate
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up relative">
              <div className="text-6xl mb-6 text-center">📄</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Document Processing
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Extract, classify, and process documents with the precision of a
                master librarian spirit.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-slow"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-200 relative">
              <div className="text-6xl mb-6 text-center">💬</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Customer Service
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Provide 24/7 support with the warmth and helpfulness of Totoro's
                gentle guidance.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-medium"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-400 relative">
              <div className="text-6xl mb-6 text-center">📊</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Data Processing
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Transform raw data into insights as naturally as forest spirits
                tend their magical gardens.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-fast"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-600 relative">
              <div className="text-6xl mb-6 text-center">🔄</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Workflow Management
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Orchestrate complex processes with the seamless flow of wind
                through the forest.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-slow"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-800 relative">
              <div className="text-6xl mb-6 text-center">📧</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Email & Communication
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Handle communications with the thoughtfulness of a wise forest
                guardian.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-medium"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-1000 relative">
              <div className="text-6xl mb-6 text-center">🎯</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Decision Support
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Provide intelligent recommendations with the wisdom of ancient
                forest spirits.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-fast"
                size="small"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-100 to-emerald-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-green-800 mb-16 text-center font-serif animate-fade-in-up">
            The Magic of Automation
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4 animate-fade-in-up">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  ✨
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-serif">
                    Time Liberation
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    Free your team from repetitive tasks so they can focus on
                    creative and strategic work.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-fade-in-up animation-delay-300">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  🎯
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-serif">
                    Perfect Accuracy
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    Eliminate human error in routine tasks while maintaining the
                    human touch where it matters.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-fade-in-up animation-delay-600">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  ⚡
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-serif">
                    Lightning Speed
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    Process tasks in seconds that would take humans hours, like
                    magic forest spirits at work.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4 animate-fade-in-up animation-delay-900">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  🌙
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-serif">
                    24/7 Operation
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    Your digital spirits never sleep, working tirelessly to keep
                    your operations flowing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-fade-in-up animation-delay-1200">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  📈
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-serif">
                    Scalable Growth
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    Handle increasing workloads without adding stress, growing
                    naturally like a magical forest.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-fade-in-up animation-delay-1500">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  💝
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-serif">
                    Employee Happiness
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    Teams love focusing on meaningful work instead of tedious
                    tasks, creating a more joyful workplace.
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
              Ready to Meet Your Digital Spirits?
            </h2>
            <p className="text-xl text-green-600 mb-12 animate-fade-in-up animation-delay-300">
              Let's create intelligent automation that works as naturally as
              magic in your organization.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
              <button className="ghibli-button primary text-lg">
                Start Automation Journey
              </button>
              <button className="ghibli-button secondary text-lg">
                See Automation Demo
              </button>
            </div>

            {/* Helpful Totoros */}
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

            {/* Busy dust bunnies */}
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
                  animationDelay: `${Math.random() * 4}s`,
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
