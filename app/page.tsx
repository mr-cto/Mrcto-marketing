import GhibliHero from "../components/GhibliHero";
import GhibliServiceCard from "../components/GhibliServiceCard";
import GhibliFooter from "../components/GhibliFooter";
import GhibliTotoro from "../components/GhibliTotoro";
import GhibliDustBunny from "../components/GhibliDustBunny";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <GhibliHero />

      {/* Services Section */}
      <section className="relative py-20 px-6">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-blue-50"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-pink-200 rounded-full opacity-30 animate-float-medium"></div>

        {/* Totoros watching over the services */}
        <GhibliTotoro
          className="absolute top-16 right-16 opacity-15 animate-float-slow"
          size="large"
          variant="gray"
        />
        <GhibliTotoro
          className="absolute bottom-16 left-16 opacity-20 animate-float-medium"
          size="medium"
          variant="blue"
        />
        <GhibliTotoro
          className="absolute top-1/2 left-8 opacity-10 animate-float-slow"
          size="large"
          variant="gray"
        />

        {/* Dust bunnies scattered throughout */}
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
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-green-800 mb-6 font-serif animate-fade-in-up">
              Our Magical Services
            </h2>
            <p className="text-xl text-green-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
              Like the enchanted worlds of Studio Ghibli, we create AI solutions
              that feel natural, intuitive, and transformative for your
              organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GhibliServiceCard
              title="AI Strategy & Vision"
              description="We help you discover the magical possibilities of AI for your organization, creating a roadmap that feels as natural as a forest path."
              icon="🌟"
              color="forest"
              delay={0}
            />

            <GhibliServiceCard
              title="Intelligent Automation"
              description="Like helpful forest spirits, our AI solutions work quietly in the background, automating tasks and freeing your team for more meaningful work."
              icon="🌿"
              color="meadow"
              delay={200}
            />

            <GhibliServiceCard
              title="Data Insights & Analytics"
              description="We transform your data into clear, actionable insights, revealing hidden patterns like discovering a secret garden."
              icon="🔮"
              color="sky"
              delay={400}
            />

            <GhibliServiceCard
              title="AI Integration & Training"
              description="We guide your team through the AI transformation journey with the patience and wisdom of a gentle mentor."
              icon="🎋"
              color="forest"
              delay={600}
            />

            <GhibliServiceCard
              title="Custom AI Solutions"
              description="Every organization is unique. We craft bespoke AI solutions that fit your needs like a perfectly tailored magical cloak."
              icon="✨"
              color="sunset"
              delay={800}
            />

            <GhibliServiceCard
              title="Ongoing Support & Growth"
              description="Like tending a magical garden, we provide continuous support to help your AI initiatives flourish and grow."
              icon="🌸"
              color="meadow"
              delay={1000}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-emerald-50 to-sky-50">
        {/* More Totoros representing trust and reliability */}
        <GhibliTotoro
          className="absolute top-10 left-10 opacity-15 animate-float-slow"
          size="medium"
          variant="blue"
        />
        <GhibliTotoro
          className="absolute top-20 right-10 opacity-20 animate-float-medium"
          size="large"
          variant="gray"
        />
        <GhibliTotoro
          className="absolute bottom-10 left-1/4 opacity-15 animate-float-slow"
          size="medium"
          variant="blue"
        />
        <GhibliTotoro
          className="absolute bottom-20 right-1/4 opacity-18 animate-float-medium"
          size="large"
          variant="gray"
        />

        {/* More dust bunnies representing expertise */}
        {[...Array(15)].map((_, i) => (
          <GhibliDustBunny
            key={`why-${i}`}
            className={`absolute animate-float-${
              ["slow", "medium", "fast"][i % 3]
            } opacity-20`}
            size={["small", "medium"][i % 2] as "small" | "medium"}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-green-800 mb-8 font-serif animate-fade-in-up">
            Why Organizations Trust Our Magic
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="animate-fade-in-up animation-delay-300">
              <div className="text-6xl mb-4">🏰</div>
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Proven Expertise
              </h3>
              <p className="text-green-600 leading-relaxed">
                Like master craftsmen in an enchanted workshop, we bring years
                of experience and deep technical knowledge to every project.
              </p>
            </div>

            <div className="animate-fade-in-up animation-delay-600">
              <div className="text-6xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Sustainable Growth
              </h3>
              <p className="text-green-600 leading-relaxed">
                We don't just implement AI; we nurture it to grow with your
                organization, ensuring long-term success and continuous
                improvement.
              </p>
            </div>

            <div className="animate-fade-in-up animation-delay-900">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Human-Centered Approach
              </h3>
              <p className="text-green-600 leading-relaxed">
                Technology should serve humanity, not replace it. Our AI
                solutions enhance human capabilities while preserving the heart
                of your organization.
              </p>
            </div>

            <div className="animate-fade-in-up animation-delay-1200">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Ethical & Secure
              </h3>
              <p className="text-green-600 leading-relaxed">
                Like guardians of ancient wisdom, we protect your data and
                ensure our AI solutions are ethical, transparent, and aligned
                with your values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-green-100 to-emerald-200">
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-white rounded-full opacity-40 animate-float-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        {/* A family of Totoros encouraging action */}
        <GhibliTotoro
          className="absolute top-16 left-16 opacity-20 animate-float-slow"
          size="large"
          variant="gray"
        />
        <GhibliTotoro
          className="absolute top-24 left-32 opacity-25 animate-float-medium"
          size="medium"
          variant="blue"
        />
        <GhibliTotoro
          className="absolute top-32 left-24 opacity-15 animate-float-fast"
          size="small"
          variant="gray"
        />
        <GhibliTotoro
          className="absolute bottom-16 right-16 opacity-20 animate-float-slow"
          size="large"
          variant="blue"
        />
        <GhibliTotoro
          className="absolute bottom-24 right-32 opacity-25 animate-float-medium"
          size="medium"
          variant="gray"
        />
        <GhibliTotoro
          className="absolute bottom-32 right-24 opacity-15 animate-float-fast"
          size="small"
          variant="blue"
        />

        {/* Excited dust bunnies ready for the journey */}
        {[...Array(25)].map((_, i) => (
          <GhibliDustBunny
            key={`cta-${i}`}
            className={`absolute animate-float-${
              ["slow", "medium", "fast"][i % 3]
            } opacity-30`}
            size={["small", "medium"][i % 2] as "small" | "medium"}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-green-800 mb-6 font-serif animate-fade-in-up">
            Ready to Begin Your AI Journey?
          </h2>
          <p className="text-xl text-green-600 mb-12 animate-fade-in-up animation-delay-300">
            Every great adventure starts with a single step. Let us guide you
            into the magical world of AI transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
            <button className="ghibli-button primary text-lg">
              Start Your Journey Today
            </button>
            <button className="ghibli-button secondary text-lg">
              Explore Our Services
            </button>
          </div>

          <p className="text-sm text-green-500 mt-8 animate-fade-in-up animation-delay-900">
            ✨ Like all magic, AI requires wisdom and care. We ensure
            responsible implementation with human oversight.
          </p>
        </div>
      </section>
    </main>
  );
}
