import GhibliTotoro from "../../components/GhibliTotoro";
import GhibliDustBunny from "../../components/GhibliDustBunny";
import GhibliTree from "../../components/GhibliTree";
import GhibliCloud from "../../components/GhibliCloud";

export default function About() {
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
          <GhibliTotoro
            className="absolute bottom-10 left-20 animate-float-slow opacity-30"
            size="large"
            variant="gray"
          />
          <GhibliTree
            className="absolute bottom-0 right-10 opacity-40"
            size="large"
          />

          {/* Dust bunnies scattered around */}
          <GhibliDustBunny
            className="absolute top-32 left-1/4 animate-float-medium"
            size="small"
          />
          <GhibliDustBunny
            className="absolute top-48 right-1/3 animate-float-slow"
            size="medium"
          />
          <GhibliDustBunny
            className="absolute bottom-32 left-1/3 animate-float-fast"
            size="small"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-green-800 mb-6 font-serif animate-fade-in-up">
            About AI Magic
          </h1>
          <p className="text-xl text-green-600 mb-8 animate-fade-in-up animation-delay-300">
            Like the magical worlds of Studio Ghibli, we believe technology
            should feel natural, wonder-filled, and deeply human.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-green-800 mb-6 font-serif">
                Our Magical Journey
              </h2>
              <p className="text-green-600 leading-relaxed mb-6">
                Just as Totoro guides lost children through enchanted forests,
                we guide organizations through the magical realm of artificial
                intelligence. Our journey began with a simple belief: technology
                should enhance the human spirit, not diminish it.
              </p>
              <p className="text-green-600 leading-relaxed mb-6">
                Like the gentle spirits in Ghibli films, AI should work quietly
                in the background, making life more wonderful while preserving
                what makes us uniquely human. We've spent years learning how to
                make this magic accessible to organizations of all sizes.
              </p>
              <p className="text-green-600 leading-relaxed">
                Every project we undertake is infused with the same care and
                attention to detail that Studio Ghibli brings to their films -
                because we believe your AI transformation deserves nothing less
                than magic.
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
                  Our Guiding Spirit
                </h3>
                <p className="text-green-600 text-center">
                  Like Totoro, we're here to guide you through the unknown,
                  making the journey magical and the destination extraordinary.
                </p>
              </div>

              {/* Floating dust bunnies around the card */}
              <GhibliDustBunny
                className="absolute -top-4 -left-4 animate-float-medium"
                size="small"
              />
              <GhibliDustBunny
                className="absolute -bottom-4 -right-4 animate-float-slow"
                size="small"
              />
              <GhibliDustBunny
                className="absolute top-1/2 -right-8 animate-float-fast"
                size="medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-emerald-50 to-sky-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-green-800 mb-16 text-center font-serif animate-fade-in-up">
            Our Magical Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto flex items-center justify-center">
                  <GhibliTotoro size="medium" variant="white" />
                </div>
                <GhibliDustBunny
                  className="absolute -top-2 -right-2 animate-float-slow"
                  size="small"
                />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                Wonder & Curiosity
              </h3>
              <p className="text-green-600 leading-relaxed">
                We approach every challenge with the wide-eyed wonder of a child
                discovering a magical forest, always curious about what's
                possible.
              </p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-300">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-sky-500 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-4xl">🌱</span>
                </div>
                <GhibliDustBunny
                  className="absolute -bottom-2 -left-2 animate-float-medium"
                  size="small"
                />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                Growth & Harmony
              </h3>
              <p className="text-green-600 leading-relaxed">
                Like the ancient trees in Ghibli films, we believe in
                sustainable growth that harmonizes with existing ecosystems and
                values.
              </p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-600">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-4xl">✨</span>
                </div>
                <GhibliDustBunny
                  className="absolute -top-2 -left-2 animate-float-fast"
                  size="small"
                />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                Magic in Details
              </h3>
              <p className="text-green-600 leading-relaxed">
                Every pixel, every interaction, every solution is crafted with
                the same attention to detail that makes Ghibli films timeless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-100 to-emerald-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-green-800 mb-8 font-serif animate-fade-in-up">
            Our Magical Team
          </h2>
          <p className="text-xl text-green-600 mb-12 animate-fade-in-up animation-delay-300">
            Like the diverse characters in Ghibli films, our team brings unique
            perspectives and magical abilities to every project.
          </p>

          <div className="relative">
            <div className="bg-white rounded-3xl p-12 shadow-lg animate-fade-in-up animation-delay-600">
              <div className="flex justify-center space-x-8 mb-8">
                <GhibliTotoro
                  size="large"
                  variant="gray"
                  className="animate-float-slow"
                />
                <GhibliTotoro
                  size="medium"
                  variant="blue"
                  className="animate-float-medium"
                />
                <GhibliTotoro
                  size="large"
                  variant="gray"
                  className="animate-float-slow"
                />
              </div>

              <h3 className="text-3xl font-bold text-green-800 mb-6 font-serif">
                AI Wizards & Digital Spirits
              </h3>
              <p className="text-green-600 leading-relaxed text-lg">
                Our team consists of experienced AI engineers, data scientists,
                and digital strategists who share a passion for creating
                technology that feels magical. Each member brings their own
                special abilities - from machine learning mastery to user
                experience enchantment.
              </p>
            </div>

            {/* Dust bunnies floating around */}
            {[...Array(8)].map((_, i) => (
              <GhibliDustBunny
                key={i}
                className={`absolute animate-float-${
                  ["slow", "medium", "fast"][i % 3]
                }`}
                size={["small", "medium"][i % 2] as "small" | "medium"}
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${20 + (i % 3) * 20}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-200 to-emerald-300">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <h2 className="text-5xl font-bold text-green-800 mb-6 font-serif animate-fade-in-up">
              Ready to Begin Your Adventure?
            </h2>
            <p className="text-xl text-green-600 mb-12 animate-fade-in-up animation-delay-300">
              Like every great Ghibli adventure, your AI journey starts with a
              single step into the unknown.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
              <button className="ghibli-button primary text-lg">
                Start Our Journey Together
              </button>
              <button className="ghibli-button secondary text-lg">
                Explore Our Magic
              </button>
            </div>

            {/* Background Totoros */}
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
          </div>
        </div>
      </section>
    </main>
  );
}
