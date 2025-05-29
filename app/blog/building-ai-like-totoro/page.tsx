import GhibliTotoro from "../../../components/GhibliTotoro";
import GhibliDustBunny from "../../../components/GhibliDustBunny";
import GhibliTree from "../../../components/GhibliTree";
import GhibliCloud from "../../../components/GhibliCloud";

export default function BuildingAILikeTotoro() {
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

          {/* Gentle Totoro representing trustworthy AI */}
          <GhibliTotoro
            className="absolute bottom-20 right-1/4 animate-float-slow opacity-25"
            size="large"
            variant="blue"
          />

          {/* Design dust bunnies */}
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
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Design
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6 font-serif animate-fade-in-up">
            Building AI That Feels Like Totoro
          </h1>
          <div className="flex justify-center items-center gap-6 text-green-600 mb-8 animate-fade-in-up animation-delay-300">
            <span>March 10, 2025</span>
            <span>•</span>
            <span>7 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 px-6 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-green max-w-none">
            <div className="animate-fade-in-up">
              <p className="text-xl text-green-600 leading-relaxed mb-8 font-medium">
                When children first meet Totoro in Miyazaki's masterpiece,
                they're not afraid—they're filled with wonder and trust. This
                magical moment holds the key to designing AI systems that people
                actually want to use and rely on.
              </p>
            </div>

            <div className="animate-fade-in-up animation-delay-300">
              <h2 className="text-3xl font-bold text-green-800 mb-6 font-serif">
                The Totoro Design Philosophy
              </h2>
              <p className="text-green-600 leading-relaxed mb-6">
                Totoro embodies five essential qualities that every AI system
                should strive for: he's gentle, reliable, patient, protective,
                and genuinely helpful. These aren't just nice-to-have
                features—they're fundamental design principles that determine
                whether users will trust and embrace your AI solution.
              </p>
              <p className="text-green-600 leading-relaxed mb-8">
                Most AI systems today feel cold, mechanical, or intimidating.
                They demand immediate decisions, provide cryptic responses, and
                often seem to work against users rather than with them. But what
                if we designed AI with Totoro's spirit?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-white rounded-3xl p-8 shadow-lg animate-fade-in-up animation-delay-600 relative">
                <div className="flex justify-center mb-6">
                  <GhibliTotoro
                    size="large"
                    variant="gray"
                    className="animate-float-slow"
                  />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4 text-center font-serif">
                  Traditional AI
                </h3>
                <ul className="space-y-3 text-green-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">❌</span>
                    <span>Demands immediate responses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">❌</span>
                    <span>Provides cryptic error messages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">❌</span>
                    <span>Feels cold and mechanical</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">❌</span>
                    <span>Works in isolation</span>
                  </li>
                </ul>
                <GhibliDustBunny
                  className="absolute top-4 right-4 opacity-15 animate-float-slow"
                  size="small"
                />
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg animate-fade-in-up animation-delay-900 relative">
                <div className="flex justify-center mb-6">
                  <GhibliTotoro
                    size="large"
                    variant="blue"
                    className="animate-float-slow"
                  />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4 text-center font-serif">
                  Totoro-Inspired AI
                </h3>
                <ul className="space-y-3 text-green-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✅</span>
                    <span>Waits patiently for user readiness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✅</span>
                    <span>Communicates with warmth and clarity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✅</span>
                    <span>Feels approachable and trustworthy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✅</span>
                    <span>Collaborates seamlessly</span>
                  </li>
                </ul>
                <GhibliDustBunny
                  className="absolute top-4 right-4 opacity-15 animate-float-medium"
                  size="small"
                />
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-1200">
              <h2 className="text-3xl font-bold text-green-800 mb-6 font-serif">
                The Five Totoro Principles
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                    1. Gentle Presence
                  </h3>
                  <p className="text-green-600 leading-relaxed mb-4">
                    Totoro never forces himself on anyone. He appears when
                    needed and fades into the background when not. Your AI
                    should have the same gentle presence—available when users
                    need help, invisible when they don't.
                  </p>
                  <div className="bg-white rounded-2xl p-4 border-l-4 border-green-500">
                    <p className="text-green-700 font-medium">Design Tip:</p>
                    <p className="text-green-600">
                      Use progressive disclosure. Start with simple options and
                      reveal complexity only when users are ready for it.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                    2. Reliable Consistency
                  </h3>
                  <p className="text-green-600 leading-relaxed mb-4">
                    Children trust Totoro because he's consistent. He always
                    responds the same way to the same situations. Your AI should
                    be equally predictable—users should know what to expect
                    every time they interact with it.
                  </p>
                  <div className="bg-white rounded-2xl p-4 border-l-4 border-blue-500">
                    <p className="text-blue-700 font-medium">Design Tip:</p>
                    <p className="text-green-600">
                      Establish clear interaction patterns and stick to them.
                      Consistency builds trust faster than cleverness.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                    3. Patient Understanding
                  </h3>
                  <p className="text-green-600 leading-relaxed mb-4">
                    Totoro never rushes the children. He waits for them to be
                    ready, to understand, to trust. Your AI should have the same
                    patience—giving users time to learn and adapt without
                    pressure.
                  </p>
                  <div className="bg-white rounded-2xl p-4 border-l-4 border-yellow-500">
                    <p className="text-yellow-700 font-medium">Design Tip:</p>
                    <p className="text-green-600">
                      Build in natural pauses. Allow users to process
                      information before moving to the next step.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                    4. Protective Instinct
                  </h3>
                  <p className="text-green-600 leading-relaxed mb-4">
                    Totoro protects the children from harm, both physical and
                    emotional. Your AI should have the same protective
                    instinct—safeguarding users from mistakes, privacy
                    violations, and overwhelming complexity.
                  </p>
                  <div className="bg-white rounded-2xl p-4 border-l-4 border-purple-500">
                    <p className="text-purple-700 font-medium">Design Tip:</p>
                    <p className="text-green-600">
                      Implement graceful error handling and always provide a way
                      back. Users should never feel trapped or lost.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                    5. Genuine Helpfulness
                  </h3>
                  <p className="text-green-600 leading-relaxed mb-4">
                    When Totoro helps, it's because he genuinely wants to, not
                    because he's programmed to. Your AI should feel the same
                    way—helpful because it cares about user success, not just
                    because it's following instructions.
                  </p>
                  <div className="bg-white rounded-2xl p-4 border-l-4 border-emerald-500">
                    <p className="text-emerald-700 font-medium">Design Tip:</p>
                    <p className="text-green-600">
                      Focus on user outcomes, not system efficiency. Sometimes
                      the "inefficient" path is more human and trustworthy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg my-12 relative animate-fade-in-up animation-delay-1500">
              <h3 className="text-2xl font-bold text-green-800 mb-6 text-center font-serif">
                Real-World Application
              </h3>
              <p className="text-green-600 leading-relaxed mb-6">
                We recently worked with a healthcare organization to redesign
                their patient intake AI. The original system was efficient but
                cold—patients felt interrogated rather than cared for. By
                applying Totoro principles, we transformed it into a gentle
                companion that guides patients through the process with warmth
                and understanding.
              </p>
              <p className="text-green-600 leading-relaxed">
                The result? Patient satisfaction scores increased by 40%, and
                completion rates improved by 25%. More importantly, patients
                began describing the system as "caring" and "helpful"—words
                rarely associated with AI.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-fast"
                size="small"
              />
            </div>

            <div className="animate-fade-in-up animation-delay-1800">
              <h2 className="text-3xl font-bold text-green-800 mb-6 font-serif">
                Building Your Own Totoro
              </h2>
              <p className="text-green-600 leading-relaxed mb-6">
                Creating Totoro-inspired AI isn't about adding cute animations
                or friendly language (though those can help). It's about
                fundamentally rethinking how AI systems interact with humans.
                It's about designing for trust, comfort, and genuine
                helpfulness.
              </p>
              <p className="text-green-600 leading-relaxed mb-8">
                Start by asking yourself: Would a child trust this system? Would
                they feel safe and comfortable using it? If the answer is no,
                you have work to do. But if you can create that sense of wonder
                and trust that Totoro inspires, you'll have built something
                truly magical.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-100 to-sky-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 mb-12 text-center font-serif animate-fade-in-up">
            Continue Reading
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog/the-magic-of-ai" className="block">
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up relative">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold text-green-800 mb-3 font-serif">
                  The Magic of AI
                </h3>
                <p className="text-green-600 text-sm mb-4">
                  How the timeless wisdom of Miyazaki's films can guide our
                  approach to AI.
                </p>
                <div className="text-xs text-green-500">
                  Philosophy • 5 min read
                </div>
                <GhibliDustBunny
                  className="absolute top-4 right-4 opacity-15 animate-float-slow"
                  size="small"
                />
              </div>
            </a>

            <a href="/blog/dust-bunnies-of-data" className="block">
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-300 relative">
                <div className="text-4xl mb-4">🧹</div>
                <h3 className="text-xl font-bold text-green-800 mb-3 font-serif">
                  The Dust Bunnies of Data
                </h3>
                <p className="text-green-600 text-sm mb-4">
                  Why data preparation is like tending to magical creatures in
                  your digital forest.
                </p>
                <div className="text-xs text-green-500">
                  Technical • 6 min read
                </div>
                <GhibliDustBunny
                  className="absolute top-4 right-4 opacity-15 animate-float-medium"
                  size="small"
                />
              </div>
            </a>

            <a href="/blog/forest-spirits-ml" className="block">
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-600 relative">
                <div className="text-4xl mb-4">🌲</div>
                <h3 className="text-xl font-bold text-green-800 mb-3 font-serif">
                  The Forest Spirits of ML
                </h3>
                <p className="text-green-600 text-sm mb-4">
                  Understanding the invisible forces that make AI models work
                  their magic.
                </p>
                <div className="text-xs text-green-500">
                  Technical • 10 min read
                </div>
                <GhibliDustBunny
                  className="absolute top-4 right-4 opacity-15 animate-float-fast"
                  size="small"
                />
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
