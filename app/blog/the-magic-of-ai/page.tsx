import GhibliTotoro from "../../../components/GhibliTotoro";
import GhibliDustBunny from "../../../components/GhibliDustBunny";
import GhibliTree from "../../../components/GhibliTree";
import GhibliCloud from "../../../components/GhibliCloud";

export default function TheMagicOfAI() {
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

          {/* Wise Totoro representing ancient wisdom */}
          <GhibliTotoro
            className="absolute bottom-20 right-1/4 animate-float-slow opacity-25"
            size="large"
            variant="blue"
          />

          {/* Philosophical dust bunnies */}
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
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              Philosophy
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6 font-serif animate-fade-in-up">
            The Magic of AI: Lessons from Studio Ghibli
          </h1>
          <div className="flex justify-center items-center gap-6 text-green-600 mb-8 animate-fade-in-up animation-delay-300">
            <span>March 15, 2025</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 px-6 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-green max-w-none">
            <div className="animate-fade-in-up">
              <p className="text-xl text-green-600 leading-relaxed mb-8 font-medium">
                In the enchanted worlds of Hayao Miyazaki's films, technology
                and nature exist in delicate harmony. As we stand at the
                threshold of an AI revolution, these timeless stories offer
                profound wisdom for how we should approach artificial
                intelligence.
              </p>
            </div>

            <div className="animate-fade-in-up animation-delay-300">
              <h2 className="text-3xl font-bold text-green-800 mb-6 font-serif">
                The Gentle Giant Principle
              </h2>
              <p className="text-green-600 leading-relaxed mb-6">
                Totoro, the beloved forest spirit, embodies everything AI should
                aspire to be: powerful yet gentle, mysterious yet trustworthy,
                helpful without being intrusive. When children first encounter
                Totoro, they're not afraid—they're filled with wonder. This is
                the emotional response we should aim for when people interact
                with AI systems.
              </p>
              <p className="text-green-600 leading-relaxed mb-8">
                Too often, AI is portrayed as cold, calculating, or threatening.
                But what if we designed AI with Totoro's spirit? Systems that
                are patient, kind, and genuinely helpful. AI that waits for you
                to be ready, that responds to your needs without overwhelming
                you, that protects rather than exploits.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg my-12 relative animate-fade-in-up animation-delay-600">
              <div className="flex justify-center mb-6">
                <GhibliTotoro
                  size="large"
                  variant="gray"
                  className="animate-float-slow"
                />
              </div>
              <blockquote className="text-center text-green-700 text-xl font-medium italic">
                "The best AI, like Totoro, should be powerful enough to solve
                complex problems, yet gentle enough that a child would trust
                it."
              </blockquote>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-slow"
                size="small"
              />
            </div>

            <div className="animate-fade-in-up animation-delay-900">
              <h2 className="text-3xl font-bold text-green-800 mb-6 font-serif">
                The Castle in the Sky Philosophy
              </h2>
              <p className="text-green-600 leading-relaxed mb-6">
                In "Castle in the Sky," we see the dangers of technology
                divorced from humanity. Laputa, the floating castle, represents
                the pinnacle of technological achievement—yet it's empty,
                lifeless, and ultimately destructive when wielded without wisdom
                or compassion.
              </p>
              <p className="text-green-600 leading-relaxed mb-8">
                This serves as a powerful metaphor for AI development. We can
                build incredibly sophisticated systems, but without grounding
                them in human values and needs, they become hollow monuments to
                technical prowess rather than tools for human flourishing.
              </p>
            </div>

            <div className="animate-fade-in-up animation-delay-1200">
              <h2 className="text-3xl font-bold text-green-800 mb-6 font-serif">
                The Spirited Away Transformation
              </h2>
              <p className="text-green-600 leading-relaxed mb-6">
                Chihiro's journey in "Spirited Away" mirrors the transformation
                organizations undergo when adopting AI. She enters a strange,
                magical world where the rules are different, where she must
                learn new ways of thinking and being. But she doesn't lose
                herself in the process—she grows stronger while maintaining her
                core identity.
              </p>
              <p className="text-green-600 leading-relaxed mb-8">
                This is the ideal AI transformation: one that enhances human
                capabilities without replacing human judgment, that introduces
                new possibilities while preserving what makes us uniquely human.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-white rounded-3xl p-6 shadow-lg animate-fade-in-up animation-delay-1500 relative">
                <h3 className="text-xl font-bold text-green-800 mb-4 font-serif">
                  The Ghibli AI Principles
                </h3>
                <ul className="space-y-3 text-green-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">🌱</span>
                    <span>
                      Technology should enhance, not replace, human connection
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">🌱</span>
                    <span>AI should be patient and gentle, like Totoro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">🌱</span>
                    <span>
                      Power must be balanced with wisdom and compassion
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">🌱</span>
                    <span>
                      Transformation should strengthen, not diminish, identity
                    </span>
                  </li>
                </ul>
                <GhibliDustBunny
                  className="absolute top-4 right-4 opacity-15 animate-float-medium"
                  size="small"
                />
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg animate-fade-in-up animation-delay-1800 relative">
                <h3 className="text-xl font-bold text-green-800 mb-4 font-serif">
                  Practical Applications
                </h3>
                <ul className="space-y-3 text-green-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✨</span>
                    <span>
                      Design AI interfaces that feel warm and approachable
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✨</span>
                    <span>Build in safeguards that protect human agency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✨</span>
                    <span>Prioritize transparency and explainability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✨</span>
                    <span>Focus on augmenting human capabilities</span>
                  </li>
                </ul>
                <GhibliDustBunny
                  className="absolute top-4 right-4 opacity-15 animate-float-fast"
                  size="small"
                />
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-2100">
              <h2 className="text-3xl font-bold text-green-800 mb-6 font-serif">
                The Path Forward
              </h2>
              <p className="text-green-600 leading-relaxed mb-6">
                As we continue to develop and deploy AI systems, we would do
                well to remember the lessons from Studio Ghibli films.
                Technology at its best doesn't dominate or diminish humanity—it
                reveals new possibilities for connection, creativity, and
                growth.
              </p>
              <p className="text-green-600 leading-relaxed mb-8">
                The magic of AI isn't in its computational power or algorithmic
                sophistication. The real magic lies in its potential to help us
                become more human, not less. To solve problems we couldn't solve
                alone, to see patterns we couldn't see before, to care for each
                other in ways we never imagined possible.
              </p>
              <p className="text-green-600 leading-relaxed mb-8">
                Like Totoro watching over the forest, the best AI systems will
                be guardians of human potential—powerful, protective, and
                profoundly wise.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-100 to-sky-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 mb-12 text-center font-serif animate-fade-in-up">
            Continue Your Journey
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog/building-ai-like-totoro" className="block">
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up relative">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-green-800 mb-3 font-serif">
                  Building AI That Feels Like Totoro
                </h3>
                <p className="text-green-600 text-sm mb-4">
                  Creating AI solutions that are gentle, helpful, and deeply
                  trustworthy.
                </p>
                <div className="text-xs text-green-500">
                  Design • 7 min read
                </div>
                <GhibliDustBunny
                  className="absolute top-4 right-4 opacity-15 animate-float-slow"
                  size="small"
                />
              </div>
            </a>

            <a href="/blog/spirited-away-transformation" className="block">
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-300 relative">
                <div className="text-4xl mb-4">🌊</div>
                <h3 className="text-xl font-bold text-green-800 mb-3 font-serif">
                  Spirited Away: AI Transformation
                </h3>
                <p className="text-green-600 text-sm mb-4">
                  How organizations can navigate the magical world of AI without
                  losing their soul.
                </p>
                <div className="text-xs text-green-500">
                  Strategy • 8 min read
                </div>
                <GhibliDustBunny
                  className="absolute top-4 right-4 opacity-15 animate-float-medium"
                  size="small"
                />
              </div>
            </a>

            <a href="/blog/howls-moving-castle-ai" className="block">
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-600 relative">
                <div className="text-4xl mb-4">🏰</div>
                <h3 className="text-xl font-bold text-green-800 mb-3 font-serif">
                  Howl's Moving Castle: Adaptive AI
                </h3>
                <p className="text-green-600 text-sm mb-4">
                  Creating AI that evolves and adapts like the magical
                  architecture in Ghibli films.
                </p>
                <div className="text-xs text-green-500">
                  Innovation • 9 min read
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
