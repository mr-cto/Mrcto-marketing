import GhibliTotoro from "../../../components/GhibliTotoro";
import GhibliDustBunny from "../../../components/GhibliDustBunny";
import GhibliTree from "../../../components/GhibliTree";
import GhibliCloud from "../../../components/GhibliCloud";

export default function DataAnalytics() {
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

          {/* Wise Totoro representing data insights */}
          <GhibliTotoro
            className="absolute bottom-20 right-1/4 animate-float-slow opacity-25"
            size="large"
            variant="blue"
          />

          {/* Data dust bunnies representing data points */}
          {[...Array(25)].map((_, i) => (
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
            Data Insights & Analytics
          </h1>
          <p className="text-xl text-green-600 mb-8 animate-fade-in-up animation-delay-300">
            Like discovering hidden treasures in an enchanted forest, we help
            you uncover the magical insights hidden within your data.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-green-800 mb-6 font-serif">
                Your Data Crystal Ball
              </h2>
              <p className="text-green-600 leading-relaxed mb-6">
                In the magical worlds of Studio Ghibli, wise characters can see
                patterns and meanings that others miss. Our data analytics
                services work the same way - transforming your raw data into
                clear, actionable insights that guide your organization toward
                success.
              </p>
              <p className="text-green-600 leading-relaxed mb-6">
                We don't just create charts and graphs; we tell the story your
                data is trying to share, revealing opportunities, trends, and
                solutions that were always there, waiting to be discovered.
              </p>
            </div>

            <div className="relative animate-fade-in-up animation-delay-300">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <GhibliTotoro
                      size="large"
                      variant="blue"
                      className="animate-float-slow"
                    />
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-sm">💡</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4 text-center font-serif">
                  Data Wisdom
                </h3>
                <p className="text-green-600 text-center">
                  Like Totoro's ancient wisdom, our analytics reveal the deeper
                  truths hidden within your organization's data forest.
                </p>
              </div>

              {/* Swirling data dust bunnies */}
              {[...Array(10)].map((_, i) => (
                <GhibliDustBunny
                  key={i}
                  className={`absolute animate-float-${
                    ["slow", "medium", "fast"][i % 3]
                  } opacity-20`}
                  size="small"
                  style={{
                    left: `${-10 + i * 12}%`,
                    top: `${10 + (i % 5) * 15}%`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Services */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-50 to-sky-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-green-800 mb-16 text-center font-serif animate-fade-in-up">
            Our Analytics Magic
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up relative">
              <div className="text-6xl mb-6 text-center">🔍</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Exploratory Analysis
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Discover hidden patterns and relationships in your data like
                finding secret paths in an enchanted forest.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-slow"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-200 relative">
              <div className="text-6xl mb-6 text-center">📈</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Predictive Modeling
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Forecast future trends with the foresight of wise forest spirits
                who understand nature's rhythms.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-medium"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-400 relative">
              <div className="text-6xl mb-6 text-center">🎯</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Customer Analytics
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Understand your customers' journeys like following the gentle
                paths that Totoro knows by heart.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-fast"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-600 relative">
              <div className="text-6xl mb-6 text-center">⚡</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Real-time Dashboards
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Monitor your business pulse with the constant awareness of
                forest guardians watching over their realm.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-slow"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-800 relative">
              <div className="text-6xl mb-6 text-center">🧠</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Machine Learning
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Create intelligent systems that learn and adapt like the magical
                creatures in Ghibli films.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-medium"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-1000 relative">
              <div className="text-6xl mb-6 text-center">📊</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif text-center">
                Business Intelligence
              </h3>
              <p className="text-green-600 leading-relaxed text-center">
                Transform complex data into clear insights that guide decisions
                with ancient wisdom.
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
            Our Data Journey
          </h2>

          <div className="space-y-12">
            <div className="flex items-center gap-8 animate-fade-in-up">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-2 font-serif">
                  Data Discovery
                </h3>
                <p className="text-green-600 leading-relaxed">
                  Like exploring a new magical forest, we carefully examine your
                  data landscape to understand what treasures lie within.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 animate-fade-in-up animation-delay-300">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-2 font-serif">
                  Data Preparation
                </h3>
                <p className="text-green-600 leading-relaxed">
                  We clean and organize your data with the same care that forest
                  spirits tend their magical gardens.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 animate-fade-in-up animation-delay-600">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-2 font-serif">
                  Analysis & Modeling
                </h3>
                <p className="text-green-600 leading-relaxed">
                  Using advanced techniques, we uncover patterns and build
                  models that reveal your data's secrets.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 animate-fade-in-up animation-delay-900">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-2 font-serif">
                  Insight Delivery
                </h3>
                <p className="text-green-600 leading-relaxed">
                  We present findings in beautiful, understandable formats that
                  tell compelling stories and guide action.
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

      {/* Results Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-100 to-sky-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-green-800 mb-16 text-center font-serif animate-fade-in-up">
            The Magic You'll Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4 animate-fade-in-up">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  💡
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-serif">
                    Clear Understanding
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    Transform confusing data into crystal-clear insights that
                    everyone can understand and act upon.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-fade-in-up animation-delay-300">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  🎯
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-serif">
                    Better Decisions
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    Make confident choices backed by data-driven insights rather
                    than guesswork or intuition alone.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-fade-in-up animation-delay-600">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  ⚡
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-serif">
                    Faster Insights
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    Get answers to critical business questions in hours instead
                    of weeks or months.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4 animate-fade-in-up animation-delay-900">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  🔮
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-serif">
                    Future Readiness
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    Anticipate trends and prepare for changes before they
                    happen, like wise forest spirits.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-fade-in-up animation-delay-1200">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  💰
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-serif">
                    Cost Savings
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    Identify inefficiencies and opportunities that can save
                    significant time and money.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-fade-in-up animation-delay-1500">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  🌟
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-serif">
                    Competitive Edge
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    Gain advantages over competitors by understanding your
                    market and customers more deeply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-200 to-emerald-300">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <h2 className="text-5xl font-bold text-green-800 mb-6 font-serif animate-fade-in-up">
              Ready to Unlock Your Data's Magic?
            </h2>
            <p className="text-xl text-green-600 mb-12 animate-fade-in-up animation-delay-300">
              Let's discover the hidden treasures waiting in your data forest.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
              <button className="ghibli-button primary text-lg">
                Start Data Discovery
              </button>
              <button className="ghibli-button secondary text-lg">
                See Analytics Demo
              </button>
            </div>

            {/* Wise Totoros */}
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

            {/* Data dust bunnies */}
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
