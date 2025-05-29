import GhibliTotoro from "../../../components/GhibliTotoro";
import GhibliDustBunny from "../../../components/GhibliDustBunny";
import GhibliTree from "../../../components/GhibliTree";
import GhibliCloud from "../../../components/GhibliCloud";

export default function DustBunniesOfData() {
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

          {/* Data cleaning Totoro */}
          <GhibliTotoro
            className="absolute bottom-20 right-1/4 animate-float-slow opacity-25"
            size="large"
            variant="gray"
          />

          {/* Data dust bunnies everywhere */}
          {[...Array(25)].map((_, i) => (
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
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Technical
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6 font-serif animate-fade-in-up">
            The Dust Bunnies of Data: Cleaning for AI Success
          </h1>
          <div className="flex justify-center items-center gap-6 text-green-600 mb-8 animate-fade-in-up animation-delay-300">
            <span>March 5, 2025</span>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 px-6 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-green max-w-none">
            <div className="animate-fade-in-up">
              <p className="text-xl text-green-600 leading-relaxed mb-8 font-medium">
                In "My Neighbor Totoro," dust bunnies (susuwatari) are magical
                creatures that inhabit neglected spaces, multiplying in the
                shadows until someone brings light and care to clean them away.
                Your data has the same magical creatures—and they're just as
                important to address.
              </p>
            </div>

            <div className="animate-fade-in-up animation-delay-300">
              <h2 className="text-3xl font-bold text-green-800 mb-6 font-serif">
                The Magic of Data Dust Bunnies
              </h2>
              <p className="text-green-600 leading-relaxed mb-6">
                Just like the susuwatari in Ghibli films, data dust bunnies are
                small, seemingly harmless creatures that accumulate in the dark
                corners of your databases. They're the duplicate records, the
                missing values, the inconsistent formats, and the outdated
                entries that multiply when no one's paying attention.
              </p>
              <p className="text-green-600 leading-relaxed mb-8">
                And just like in the films, these dust bunnies aren't
                evil—they're simply a natural consequence of neglect. But left
                unchecked, they can make your AI models as confused as children
                stumbling through a dusty, abandoned house.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg my-12 relative animate-fade-in-up animation-delay-600">
              <div className="flex justify-center space-x-4 mb-6">
                {[...Array(5)].map((_, i) => (
                  <GhibliDustBunny
                    key={i}
                    className={`animate-float-${
                      ["slow", "medium", "fast"][i % 3]
                    } opacity-60`}
                    size="small"
                  />
                ))}
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 text-center font-serif">
                Common Data Dust Bunnies
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-700 mb-2">
                    The Duplicates
                  </h4>
                  <p className="text-green-600 text-sm">
                    Multiple records for the same entity, like having two
                    Totoros in one forest.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-green-700 mb-2">
                    The Missing Values
                  </h4>
                  <p className="text-green-600 text-sm">
                    Empty fields that leave your AI guessing, like missing
                    pieces of a magical puzzle.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-green-700 mb-2">
                    The Format Rebels
                  </h4>
                  <p className="text-green-600 text-sm">
                    Inconsistent data formats that confuse your models like
                    mixed-up forest paths.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-green-700 mb-2">
                    The Time Travelers
                  </h4>
                  <p className="text-green-600 text-sm">
                    Outdated records that no longer reflect reality, like old
                    spirits from another era.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-900">
              <h2 className="text-3xl font-bold text-green-800 mb-6 font-serif">
                The Gentle Art of Data Cleaning
              </h2>
              <p className="text-green-600 leading-relaxed mb-6">
                In Ghibli films, cleaning is never violent or harsh. When
                Satsuki and Mei clean their new home, they do it with care,
                respect, and even joy. The dust bunnies don't fight back—they
                simply dissolve in the presence of light and attention.
              </p>
              <p className="text-green-600 leading-relaxed mb-8">
                Data cleaning should follow the same philosophy. It's not about
                aggressively scrubbing away everything that looks wrong. It's
                about bringing gentle, systematic attention to your data,
                understanding why the dust bunnies formed, and addressing the
                root causes with care.
              </p>
            </div>

            <div className="space-y-8 my-12">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 animate-fade-in-up animation-delay-1200">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  Step 1: Illuminate the Shadows
                </h3>
                <p className="text-green-600 leading-relaxed mb-4">
                  Before you can clean dust bunnies, you need to see them. Use
                  data profiling tools to shine light into the dark corners of
                  your datasets. Look for patterns, anomalies, and
                  inconsistencies.
                </p>
                <div className="bg-white rounded-2xl p-4 border-l-4 border-green-500">
                  <p className="text-green-700 font-medium">Ghibli Wisdom:</p>
                  <p className="text-green-600">
                    "The dust bunnies only appear when you're brave enough to
                    look for them with a gentle light."
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-3xl p-8 animate-fade-in-up animation-delay-1500">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  Step 2: Understand Their Nature
                </h3>
                <p className="text-green-600 leading-relaxed mb-4">
                  Not all data dust bunnies are the same. Some are harmless
                  quirks, others are signs of deeper issues. Study each type
                  carefully before deciding how to address them.
                </p>
                <div className="bg-white rounded-2xl p-4 border-l-4 border-blue-500">
                  <p className="text-blue-700 font-medium">Ghibli Wisdom:</p>
                  <p className="text-green-600">
                    "Every dust bunny has a story. Listen to what your data is
                    trying to tell you."
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 animate-fade-in-up animation-delay-1800">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  Step 3: Clean with Intention
                </h3>
                <p className="text-green-600 leading-relaxed mb-4">
                  Apply cleaning techniques systematically and document
                  everything. Like Mei carefully organizing her toys, each
                  cleaning action should be purposeful and reversible.
                </p>
                <div className="bg-white rounded-2xl p-4 border-l-4 border-yellow-500">
                  <p className="text-yellow-700 font-medium">Ghibli Wisdom:</p>
                  <p className="text-green-600">
                    "Clean with the same care you'd use to tend a magical
                    garden."
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-2100">
              <h2 className="text-3xl font-bold text-green-800 mb-6 font-serif">
                The Transformation
              </h2>
              <p className="text-green-600 leading-relaxed mb-6">
                When Satsuki and Mei finish cleaning their house, something
                magical happens. The space becomes bright, welcoming, and full
                of possibility. The same transformation occurs with your data.
              </p>
              <p className="text-green-600 leading-relaxed mb-8">
                Clean data doesn't just improve your AI model's performance—it
                changes the entire relationship between your organization and
                its information. Suddenly, insights become clearer, patterns
                emerge, and your AI can focus on learning rather than struggling
                with inconsistencies.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg my-12 relative animate-fade-in-up animation-delay-2400">
              <div className="flex justify-center mb-6">
                <GhibliTotoro
                  size="large"
                  variant="blue"
                  className="animate-float-slow"
                />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-6 text-center font-serif">
                The Guardian's Promise
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Like Totoro watching over the forest, establish ongoing data
                governance practices. Regular cleaning prevents dust bunnies
                from accumulating, keeping your data ecosystem healthy and your
                AI models performing at their magical best.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-slow"
                size="small"
              />
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-100 to-sky-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 mb-12 text-center font-serif animate-fade-in-up">
            More Magical Insights
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog/forest-spirits-ml" className="block">
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up relative">
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
                  className="absolute top-4 right-4 opacity-15 animate-float-slow"
                  size="small"
                />
              </div>
            </a>

            <a href="/blog/building-ai-like-totoro" className="block">
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-300 relative">
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
                  className="absolute top-4 right-4 opacity-15 animate-float-medium"
                  size="small"
                />
              </div>
            </a>

            <a href="/blog/spirited-away-transformation" className="block">
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-600 relative">
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
