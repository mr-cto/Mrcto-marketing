import GhibliTotoro from "../../../components/GhibliTotoro";
import GhibliDustBunny from "../../../components/GhibliDustBunny";
import GhibliTree from "../../../components/GhibliTree";
import GhibliCloud from "../../../components/GhibliCloud";

export default function SpiritedAwayTransformation() {
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

          {/* Transformation Totoro */}
          <GhibliTotoro
            className="absolute bottom-20 right-1/4 animate-float-slow opacity-25"
            size="large"
            variant="blue"
          />

          {/* Transformation dust bunnies */}
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
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              Strategy
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6 font-serif animate-fade-in-up">
            Spirited Away: A Journey Through AI Transformation
          </h1>
          <div className="flex justify-center items-center gap-6 text-green-600 mb-8 animate-fade-in-up animation-delay-300">
            <span>February 28, 2025</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 px-6 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-green max-w-none">
            <div className="animate-fade-in-up">
              <p className="text-xl text-green-600 leading-relaxed mb-8 font-medium">
                When Chihiro first enters the spirit world in "Spirited Away,"
                she's overwhelmed, confused, and afraid. But through courage,
                adaptability, and the help of wise guides, she not only survives
                but thrives—emerging stronger and more capable than before. This
                is the perfect metaphor for organizational AI transformation.
              </p>
            </div>

            <div className="animate-fade-in-up animation-delay-300">
              <h2 className="text-3xl font-bold text-green-800 mb-6 font-serif">
                Entering the Spirit World
              </h2>
              <p className="text-green-600 leading-relaxed mb-6">
                Like Chihiro stepping through the tunnel into an unknown realm,
                organizations beginning their AI journey often feel they're
                entering an alien world. The rules are different, the landscape
                is unfamiliar, and everything seems to operate by mysterious
                logic.
              </p>
              <p className="text-green-600 leading-relaxed mb-8">
                But just as Chihiro discovers that the spirit world, while
                strange, operates by its own consistent principles, AI
                transformation follows predictable patterns. The key is
                understanding these patterns and navigating them with wisdom,
                patience, and the right guidance.
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
                "The tunnel led Chihiro to a world of transformation. Your AI
                journey will do the same for your organization—if you're brave
                enough to walk through."
              </blockquote>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-slow"
                size="small"
              />
            </div>

            <div className="animate-fade-in-up animation-delay-900">
              <h2 className="text-3xl font-bold text-green-800 mb-6 font-serif">
                The Bathhouse of Business
              </h2>
              <p className="text-green-600 leading-relaxed mb-6">
                Yubaba's bathhouse is a perfect metaphor for the modern
                organization—a complex ecosystem where different entities
                (departments, processes, stakeholders) must work together to
                serve customers (the spirits) and generate value. When AI enters
                this environment, it's like introducing a new type of magic into
                an already magical place.
              </p>
              <p className="text-green-600 leading-relaxed mb-8">
                The bathhouse workers are initially suspicious of Chihiro, just
                as employees might be wary of AI. But as she proves her value
                and learns to work within the system, she becomes an integral
                part of the operation. This is the transformation every
                organization must navigate—from suspicion to integration to
                enhancement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-3xl p-8 animate-fade-in-up animation-delay-1200 relative">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  The Challenges
                </h3>
                <ul className="space-y-3 text-green-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">⚠️</span>
                    <span>
                      Fear of the unknown (like Chihiro's initial terror)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">⚠️</span>
                    <span>
                      Resistance from existing systems (like suspicious
                      bathhouse workers)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">⚠️</span>
                    <span>
                      Risk of losing identity (like forgetting your name)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">⚠️</span>
                    <span>
                      Complex new rules to learn (like spirit world etiquette)
                    </span>
                  </li>
                </ul>
                <GhibliDustBunny
                  className="absolute top-4 right-4 opacity-15 animate-float-medium"
                  size="small"
                />
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 animate-fade-in-up animation-delay-1500 relative">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  The Opportunities
                </h3>
                <ul className="space-y-3 text-green-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✨</span>
                    <span>
                      Discovering hidden capabilities (like Chihiro's inner
                      strength)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✨</span>
                    <span>
                      Building new relationships (like befriending Haku and Lin)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✨</span>
                    <span>
                      Solving previously impossible problems (like cleansing the
                      River Spirit)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✨</span>
                    <span>
                      Emerging stronger and wiser (like Chihiro's
                      transformation)
                    </span>
                  </li>
                </ul>
                <GhibliDustBunny
                  className="absolute top-4 right-4 opacity-15 animate-float-fast"
                  size="small"
                />
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-1800">
              <h2 className="text-3xl font-bold text-green-800 mb-6 font-serif">
                The Five Stages of AI Transformation
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                    1. The Threshold Crossing
                  </h3>
                  <p className="text-green-600 leading-relaxed mb-4">
                    Like Chihiro walking through the tunnel, your organization
                    must make the conscious decision to enter the AI world. This
                    isn't just about buying technology—it's about committing to
                    transformation.
                  </p>
                  <div className="bg-white rounded-2xl p-4 border-l-4 border-blue-500">
                    <p className="text-blue-700 font-medium">Key Actions:</p>
                    <p className="text-green-600">
                      Secure leadership commitment, establish clear vision, and
                      prepare for cultural change.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                    2. The Initial Shock
                  </h3>
                  <p className="text-green-600 leading-relaxed mb-4">
                    Just as Chihiro is overwhelmed by the bathhouse's
                    complexity, organizations often feel paralyzed by AI's
                    possibilities and requirements. This is normal and
                    necessary.
                  </p>
                  <div className="bg-white rounded-2xl p-4 border-l-4 border-yellow-500">
                    <p className="text-yellow-700 font-medium">Key Actions:</p>
                    <p className="text-green-600">
                      Start small, focus on learning, and don't try to transform
                      everything at once.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                    3. Finding Your Guide
                  </h3>
                  <p className="text-green-600 leading-relaxed mb-4">
                    Chihiro survives because she finds helpers like Haku and
                    Lin. Your organization needs AI guides—whether internal
                    champions or external partners—who understand both worlds.
                  </p>
                  <div className="bg-white rounded-2xl p-4 border-l-4 border-green-500">
                    <p className="text-green-700 font-medium">Key Actions:</p>
                    <p className="text-green-600">
                      Identify AI champions, invest in training, and build
                      relationships with trusted AI partners.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                    4. Proving Your Worth
                  </h3>
                  <p className="text-green-600 leading-relaxed mb-4">
                    Chihiro earns her place by working hard and solving problems
                    others can't. Your AI initiatives must demonstrate clear
                    value to gain organizational acceptance.
                  </p>
                  <div className="bg-white rounded-2xl p-4 border-l-4 border-purple-500">
                    <p className="text-purple-700 font-medium">Key Actions:</p>
                    <p className="text-green-600">
                      Focus on measurable outcomes, celebrate wins, and
                      continuously improve based on feedback.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                    5. The Return, Transformed
                  </h3>
                  <p className="text-green-600 leading-relaxed mb-4">
                    Chihiro returns to her world changed—stronger, wiser, more
                    capable. Your organization will emerge from AI
                    transformation fundamentally enhanced, ready for future
                    challenges.
                  </p>
                  <div className="bg-white rounded-2xl p-4 border-l-4 border-indigo-500">
                    <p className="text-indigo-700 font-medium">Key Actions:</p>
                    <p className="text-green-600">
                      Scale successful initiatives, embed AI thinking into
                      culture, and prepare for continuous evolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg my-12 relative animate-fade-in-up animation-delay-2100">
              <h3 className="text-2xl font-bold text-green-800 mb-6 text-center font-serif">
                Remember Your Name
              </h3>
              <p className="text-green-600 leading-relaxed mb-6">
                In "Spirited Away," the greatest danger isn't the strange
                creatures or difficult tasks—it's forgetting your name, losing
                your identity. The same risk exists in AI transformation.
              </p>
              <p className="text-green-600 leading-relaxed">
                As you adopt AI technologies, never lose sight of what makes
                your organization unique. AI should enhance your core values and
                capabilities, not replace them. Like Chihiro remembering Haku's
                true name and breaking his curse, remembering your
                organizational identity will be the key to successful
                transformation.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-slow"
                size="small"
              />
            </div>

            <div className="animate-fade-in-up animation-delay-2400">
              <h2 className="text-3xl font-bold text-green-800 mb-6 font-serif">
                Your Transformation Awaits
              </h2>
              <p className="text-green-600 leading-relaxed mb-6">
                Every organization's AI journey is unique, just as every
                person's path through the spirit world would be different. But
                the fundamental truth remains: transformation is possible,
                beneficial, and ultimately magical when approached with courage,
                wisdom, and the right guidance.
              </p>
              <p className="text-green-600 leading-relaxed mb-8">
                The tunnel to your AI future is waiting. Like Chihiro, you might
                feel scared or uncertain. But on the other side lies a world of
                possibilities you never imagined—and a version of your
                organization that's stronger, smarter, and more capable than
                ever before.
              </p>
              <p className="text-green-600 leading-relaxed mb-8">
                The question isn't whether you should begin this journey. The
                question is: are you ready to step through the tunnel and
                discover what your organization can become?
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

            <a href="/blog/howls-moving-castle-ai" className="block">
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-300 relative">
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
