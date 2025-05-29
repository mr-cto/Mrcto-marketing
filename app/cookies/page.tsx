import GhibliTotoro from "../../components/GhibliTotoro";
import GhibliDustBunny from "../../components/GhibliDustBunny";
import GhibliTree from "../../components/GhibliTree";
import GhibliCloud from "../../components/GhibliCloud";

export default function Cookies() {
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

          {/* Cookie-loving Totoro */}
          <GhibliTotoro
            className="absolute bottom-20 right-1/4 animate-float-slow opacity-25"
            size="large"
            variant="gray"
          />

          {/* Dust bunnies representing cookie crumbs */}
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
          <h1 className="text-6xl font-bold text-green-800 mb-6 font-serif animate-fade-in-up">
            Cookie Policy
          </h1>
          <p className="text-xl text-green-600 mb-8 animate-fade-in-up animation-delay-300">
            Like breadcrumbs in a magical forest, cookies help us remember your
            journey and make it more wonderful.
          </p>
        </div>
      </section>

      {/* Cookie Content */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-lg relative overflow-hidden">
            {/* Cookie-loving Totoro */}
            <GhibliTotoro
              className="absolute top-8 right-8 opacity-10 animate-float-slow"
              size="large"
              variant="blue"
            />

            <div className="relative z-10 prose prose-green max-w-none">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold text-green-800 mb-6 font-serif">
                  What Are Cookies?
                </h2>
                <p className="text-green-600 leading-relaxed mb-8">
                  Cookies are small text files that websites place on your
                  device, like magical breadcrumbs that help us remember your
                  preferences and improve your experience. Just as Hansel and
                  Gretel used breadcrumbs to find their way, cookies help us
                  provide you with a more personalized journey through our
                  magical AI world.
                </p>
              </div>

              <div className="animate-fade-in-up animation-delay-300">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  🍪 Types of Cookies We Use
                </h3>

                <div className="space-y-6 mb-8">
                  <div className="bg-green-50 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-green-800 mb-3">
                      Essential Cookies 🌟
                    </h4>
                    <p className="text-green-600 leading-relaxed">
                      These are like Totoro's protective magic - absolutely
                      necessary for our website to work. They enable basic
                      functions like page navigation and access to secure areas.
                      Without these cookies, our magical services cannot
                      function properly.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-green-800 mb-3">
                      Analytics Cookies 📊
                    </h4>
                    <p className="text-green-600 leading-relaxed">
                      Like the forest spirits that observe and learn, these
                      cookies help us understand how visitors interact with our
                      website. They collect anonymous information about which
                      pages are most popular and how people navigate through our
                      magical realm.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-green-800 mb-3">
                      Functional Cookies ⚙️
                    </h4>
                    <p className="text-green-600 leading-relaxed">
                      These cookies remember your preferences and choices, like
                      a wise Totoro remembering each child's favorite spot in
                      the forest. They help us provide enhanced features and
                      personalized content.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-green-800 mb-3">
                      Marketing Cookies 📢
                    </h4>
                    <p className="text-green-600 leading-relaxed">
                      Like the gentle whispers of the wind carrying news through
                      the forest, these cookies help us show you relevant
                      content and measure the effectiveness of our magical
                      communications. You can opt out of these at any time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-up animation-delay-600">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  🎛️ Managing Your Cookie Preferences
                </h3>
                <p className="text-green-600 leading-relaxed mb-4">
                  Like choosing your own adventure in a Ghibli film, you have
                  control over your cookie experience:
                </p>
                <ul className="list-none space-y-2 mb-8">
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">🌱</span>
                    <strong>Browser Settings:</strong> Most browsers allow you
                    to control cookies through their settings
                  </li>
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">🌱</span>
                    <strong>Cookie Banner:</strong> Use our cookie preference
                    center when you first visit
                  </li>
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">🌱</span>
                    <strong>Opt-Out Tools:</strong> Use industry opt-out tools
                    for marketing cookies
                  </li>
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">🌱</span>
                    <strong>Contact Us:</strong> Reach out to our team for
                    personalized assistance
                  </li>
                </ul>
              </div>

              <div className="animate-fade-in-up animation-delay-900">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  🌐 Third-Party Cookies
                </h3>
                <p className="text-green-600 leading-relaxed mb-8">
                  Sometimes, like inviting friendly forest creatures to join our
                  magical gathering, we work with trusted partners who may place
                  their own cookies on your device. These might include
                  analytics providers, social media platforms, or advertising
                  networks. Each has their own cookie policies that we encourage
                  you to review.
                </p>
              </div>

              <div className="animate-fade-in-up animation-delay-1200">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  ⏰ Cookie Lifespan
                </h3>
                <p className="text-green-600 leading-relaxed mb-4">
                  Like the changing seasons in Ghibli films, cookies have
                  different lifespans:
                </p>
                <ul className="list-none space-y-2 mb-8">
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">🌸</span>
                    <strong>Session Cookies:</strong> Disappear when you close
                    your browser, like morning dew
                  </li>
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">🌸</span>
                    <strong>Persistent Cookies:</strong> Stay for a set period,
                    like the ancient trees in the forest
                  </li>
                </ul>
              </div>

              <div className="animate-fade-in-up animation-delay-1500">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  🔒 Cookie Security
                </h3>
                <p className="text-green-600 leading-relaxed mb-8">
                  We protect our cookies with the same care that Totoro protects
                  the forest. All cookies are secured using industry-standard
                  encryption and are never used to store sensitive personal
                  information like passwords or payment details.
                </p>
              </div>

              <div className="animate-fade-in-up animation-delay-1800">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  📱 Mobile and App Cookies
                </h3>
                <p className="text-green-600 leading-relaxed mb-8">
                  When you visit our website on mobile devices, the same cookie
                  principles apply. We may also use similar technologies like
                  local storage and device identifiers to provide you with the
                  best possible magical experience across all your devices.
                </p>
              </div>

              <div className="animate-fade-in-up animation-delay-2100">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  📞 Questions About Cookies
                </h3>
                <p className="text-green-600 leading-relaxed mb-4">
                  If you have questions about our use of cookies, our friendly
                  cookie guardians are here to help:
                </p>
                <div className="bg-green-50 rounded-2xl p-6 mb-8">
                  <p className="text-green-700 font-medium">
                    Email: cookies@aimagic.com
                  </p>
                  <p className="text-green-700 font-medium">
                    Address: The Enchanted Forest, Cookie Grove
                  </p>
                </div>
              </div>

              <div className="animate-fade-in-up animation-delay-2400">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  🔄 Updates to This Policy
                </h3>
                <p className="text-green-600 leading-relaxed mb-8">
                  Like the forest that grows and changes with the seasons, our
                  cookie policy may evolve. We'll notify you of any significant
                  changes and always maintain our commitment to transparency and
                  your privacy.
                </p>
                <p className="text-sm text-green-500">
                  Last updated: March 2025
                </p>
              </div>
            </div>

            {/* Floating dust bunnies representing cookie crumbs */}
            {[...Array(10)].map((_, i) => (
              <GhibliDustBunny
                key={i}
                className={`absolute animate-float-${
                  ["slow", "medium", "fast"][i % 3]
                } opacity-15`}
                size="small"
                style={{
                  left: `${10 + i * 9}%`,
                  bottom: `${5 + (i % 5) * 10}%`,
                  animationDelay: `${i * 0.6}s`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Preferences Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-200 to-emerald-300">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <h2 className="text-5xl font-bold text-green-800 mb-6 font-serif animate-fade-in-up">
              Your Cookie Choices Matter
            </h2>
            <p className="text-xl text-green-600 mb-12 animate-fade-in-up animation-delay-300">
              Like choosing your path through Totoro's forest, you have the
              power to decide how cookies enhance your magical journey with us.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
              <button className="ghibli-button primary text-lg">
                Manage Cookie Preferences
              </button>
              <button className="ghibli-button secondary text-lg">
                Contact Cookie Team
              </button>
            </div>

            {/* Cookie-loving Totoros */}
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
