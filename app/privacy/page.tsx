import GhibliTotoro from "../../components/GhibliTotoro";
import GhibliDustBunny from "../../components/GhibliDustBunny";
import GhibliTree from "../../components/GhibliTree";
import GhibliCloud from "../../components/GhibliCloud";

export default function Privacy() {
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

          {/* Guardian Totoro representing protection */}
          <GhibliTotoro
            className="absolute bottom-20 right-1/4 animate-float-slow opacity-25"
            size="large"
            variant="gray"
          />

          {/* Dust bunnies representing data points */}
          {[...Array(8)].map((_, i) => (
            <GhibliDustBunny
              key={i}
              className={`absolute animate-float-${
                ["slow", "medium", "fast"][i % 3]
              } opacity-20`}
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
            Privacy Policy
          </h1>
          <p className="text-xl text-green-600 mb-8 animate-fade-in-up animation-delay-300">
            Like the protective spirits in Studio Ghibli films, we guard your
            privacy with care and respect.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-lg relative overflow-hidden">
            {/* Guardian Totoro */}
            <GhibliTotoro
              className="absolute top-8 right-8 opacity-10 animate-float-slow"
              size="large"
              variant="blue"
            />

            <div className="relative z-10 prose prose-green max-w-none">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold text-green-800 mb-6 font-serif">
                  Our Commitment to Your Privacy
                </h2>
                <p className="text-green-600 leading-relaxed mb-8">
                  At AI Magic, we believe your privacy is as sacred as the
                  ancient forests in Studio Ghibli films. This policy explains
                  how we collect, use, and protect your information with the
                  same care that Totoro protects the forest spirits.
                </p>
              </div>

              <div className="animate-fade-in-up animation-delay-300">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  🌳 Information We Collect
                </h3>
                <p className="text-green-600 leading-relaxed mb-4">
                  Like gentle forest spirits, we only gather what we need to
                  help you on your AI journey:
                </p>
                <ul className="list-none space-y-2 mb-8">
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">✨</span>
                    <strong>Contact Information:</strong> Name, email, and
                    company details when you reach out to us
                  </li>
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">✨</span>
                    <strong>Usage Data:</strong> How you interact with our
                    website to improve your experience
                  </li>
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">✨</span>
                    <strong>Project Information:</strong> Details about your AI
                    needs to provide better service
                  </li>
                </ul>
              </div>

              <div className="animate-fade-in-up animation-delay-600">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  🛡️ How We Protect Your Data
                </h3>
                <p className="text-green-600 leading-relaxed mb-4">
                  Your data is protected by magical barriers stronger than
                  Totoro's forest:
                </p>
                <ul className="list-none space-y-2 mb-8">
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">🔒</span>
                    <strong>Encryption:</strong> All data is encrypted in
                    transit and at rest
                  </li>
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">🔒</span>
                    <strong>Access Controls:</strong> Only authorized team
                    members can access your information
                  </li>
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">🔒</span>
                    <strong>Regular Audits:</strong> We regularly review our
                    security practices
                  </li>
                </ul>
              </div>

              <div className="animate-fade-in-up animation-delay-900">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  🌱 How We Use Your Information
                </h3>
                <p className="text-green-600 leading-relaxed mb-4">
                  We use your information only for purposes that serve your
                  magical journey:
                </p>
                <ul className="list-none space-y-2 mb-8">
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">🌟</span>
                    To provide and improve our AI services
                  </li>
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">🌟</span>
                    To communicate about your projects and our services
                  </li>
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">🌟</span>
                    To send you magical insights and updates (with your
                    permission)
                  </li>
                </ul>
              </div>

              <div className="animate-fade-in-up animation-delay-1200">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  🤝 Your Rights
                </h3>
                <p className="text-green-600 leading-relaxed mb-4">
                  Like the characters in Ghibli films, you have the power to
                  control your own story:
                </p>
                <ul className="list-none space-y-2 mb-8">
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">⚡</span>
                    <strong>Access:</strong> Request a copy of your personal
                    data
                  </li>
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">⚡</span>
                    <strong>Correction:</strong> Update or correct your
                    information
                  </li>
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">⚡</span>
                    <strong>Deletion:</strong> Request removal of your data
                  </li>
                  <li className="flex items-start gap-2 text-green-600">
                    <span className="text-green-500 mt-1">⚡</span>
                    <strong>Portability:</strong> Receive your data in a usable
                    format
                  </li>
                </ul>
              </div>

              <div className="animate-fade-in-up animation-delay-1500">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  🍃 Cookies and Tracking
                </h3>
                <p className="text-green-600 leading-relaxed mb-8">
                  We use cookies like breadcrumbs in the forest - only to help
                  you find your way back and improve your journey. You can
                  control cookie settings in your browser at any time.
                </p>
              </div>

              <div className="animate-fade-in-up animation-delay-1800">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  📞 Contact Our Privacy Guardians
                </h3>
                <p className="text-green-600 leading-relaxed mb-4">
                  If you have questions about your privacy or want to exercise
                  your rights, our privacy guardians are here to help:
                </p>
                <div className="bg-green-50 rounded-2xl p-6 mb-8">
                  <p className="text-green-700 font-medium">
                    Email: t@mrcto.ai
                  </p>
                  <p className="text-green-700 font-medium">
                    Address: The Enchanted Forest, Privacy Grove
                  </p>
                </div>
              </div>

              <div className="animate-fade-in-up animation-delay-2100">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  🔄 Policy Updates
                </h3>
                <p className="text-green-600 leading-relaxed mb-8">
                  Like the changing seasons in Ghibli films, this policy may
                  evolve. We'll notify you of significant changes and always
                  maintain the same level of protection and respect for your
                  privacy.
                </p>
                <p className="text-sm text-green-500">
                  Last updated: March 2025
                </p>
              </div>
            </div>

            {/* Floating dust bunnies representing data protection */}
            {[...Array(6)].map((_, i) => (
              <GhibliDustBunny
                key={i}
                className={`absolute animate-float-${
                  ["slow", "medium", "fast"][i % 3]
                } opacity-15`}
                size="small"
                style={{
                  left: `${20 + i * 12}%`,
                  bottom: `${10 + (i % 3) * 15}%`,
                  animationDelay: `${i * 0.8}s`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-200 to-emerald-300">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <h2 className="text-5xl font-bold text-green-800 mb-6 font-serif animate-fade-in-up">
              Your Trust is Our Magic
            </h2>
            <p className="text-xl text-green-600 mb-12 animate-fade-in-up animation-delay-300">
              Like the bond between Totoro and the children, our relationship is
              built on trust, respect, and magical experiences.
            </p>

            <button className="ghibli-button primary text-lg animate-fade-in-up animation-delay-600">
              Contact Our Privacy Team
            </button>

            {/* Guardian Totoros */}
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
