import GhibliTotoro from "../../components/GhibliTotoro";
import GhibliDustBunny from "../../components/GhibliDustBunny";
import GhibliTree from "../../components/GhibliTree";
import GhibliCloud from "../../components/GhibliCloud";
import GhibliServiceCard from "../../components/GhibliServiceCard";

export const metadata = {
  title: "Services - Mrcto Consulting",
  description: "Enterprise and small business AI adoption services",
};

export default function Services() {
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

          {/* Helpful Totoro */}
          <GhibliTotoro
            className="absolute bottom-20 right-1/4 animate-float-slow opacity-25"
            size="large"
            variant="gray"
          />

          {/* Service dust bunnies */}
          {[...Array(20)].map((_, i) => (
            <GhibliDustBunny
              key={i}
              className={`absolute animate-float-${
                ["slow", "medium", "fast"][i % 3]
              } opacity-20`}
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
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6 font-serif animate-fade-in-up">
            AI Magic for Your Organization
          </h1>
          <p className="text-xl text-green-600 leading-relaxed mb-8 animate-fade-in-up animation-delay-300">
            Like the gentle spirits in Studio Ghibli films, our AI solutions
            work quietly in the background, making your organization more
            efficient, insightful, and magical—without losing its human soul.
          </p>
          <div className="animate-fade-in-up animation-delay-600">
            <a
              href="/contact"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Begin Your AI Journey
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-green-800 mb-6 font-serif">
              Our Magical Services
            </h2>
            <p className="text-xl text-green-600 leading-relaxed max-w-3xl mx-auto">
              Just as each character in Ghibli films has unique gifts, we offer
              specialized services tailored to your organization's specific
              needs and dreams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GhibliServiceCard
              icon="🧠"
              title="AI Strategy & Planning"
              description="Like Howl's moving castle, we help you build an AI strategy that adapts and evolves with your business needs."
              features={[
                "Comprehensive AI readiness assessment",
                "Custom roadmap development",
                "ROI projections and cost modeling",
                "Risk assessment and mitigation",
              ]}
              href="/services/ai-strategy"
              color="forest"
              className="animate-fade-in-up"
            />

            <GhibliServiceCard
              icon="🤖"
              title="Custom AI Solutions"
              description="We craft bespoke AI solutions that feel as natural and helpful as Totoro—powerful yet gentle."
              features={[
                "Machine learning model development",
                "Natural language processing",
                "Computer vision applications",
                "Predictive analytics systems",
              ]}
              href="/services/custom"
              color="sky"
              className="animate-fade-in-up animation-delay-200"
            />

            <GhibliServiceCard
              icon="🔄"
              title="Process Automation"
              description="Like the soot sprites organizing the boiler room, we automate your workflows with precision and care."
              features={[
                "Workflow analysis and optimization",
                "Intelligent document processing",
                "Automated decision systems",
                "Integration with existing tools",
              ]}
              href="/services/automation"
              color="meadow"
              className="animate-fade-in-up animation-delay-400"
            />

            <GhibliServiceCard
              icon="📊"
              title="Data Analytics & Insights"
              description="We help you see patterns in your data like the forest spirits see the hidden connections in nature."
              features={[
                "Advanced data visualization",
                "Predictive modeling",
                "Real-time dashboards",
                "Business intelligence solutions",
              ]}
              href="/services/analytics"
              color="sunset"
              className="animate-fade-in-up animation-delay-600"
            />

            <GhibliServiceCard
              icon="🎓"
              title="AI Training & Education"
              description="Like Yubaba's school, we provide comprehensive training to help your team master AI tools and concepts."
              features={[
                "Executive AI workshops",
                "Technical team training",
                "Change management support",
                "Ongoing mentorship programs",
              ]}
              href="/services/training"
              color="forest"
              className="animate-fade-in-up animation-delay-800"
            />

            <GhibliServiceCard
              icon="🛡️"
              title="AI Ethics & Governance"
              description="We ensure your AI systems are as trustworthy and ethical as the forest guardians in Ghibli films."
              features={[
                "AI ethics framework development",
                "Bias detection and mitigation",
                "Compliance and regulatory guidance",
                "Responsible AI implementation",
              ]}
              href="/services/ethics"
              color="sky"
              className="animate-fade-in-up animation-delay-1000"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-100 to-sky-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-green-800 mb-6 font-serif">
              Our Magical Process
            </h2>
            <p className="text-xl text-green-600 leading-relaxed max-w-3xl mx-auto">
              Like Chihiro's journey in Spirited Away, every AI transformation
              follows a path of discovery, growth, and ultimately, empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center animate-fade-in-up relative">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-green-800 mb-4 font-serif">
                Discovery
              </h3>
              <p className="text-green-600 leading-relaxed">
                We explore your organization's unique landscape, understanding
                your challenges, goals, and the magic you want to create.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-slow"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center animate-fade-in-up animation-delay-300 relative">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-green-800 mb-4 font-serif">
                Design
              </h3>
              <p className="text-green-600 leading-relaxed">
                Like architects of magical castles, we design AI solutions that
                are both powerful and beautiful, fitting seamlessly into your
                world.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-medium"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center animate-fade-in-up animation-delay-600 relative">
              <div className="text-5xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-green-800 mb-4 font-serif">
                Development
              </h3>
              <p className="text-green-600 leading-relaxed">
                With the care of master craftspeople, we build and refine your
                AI solutions, ensuring they work harmoniously with your existing
                systems.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-fast"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center animate-fade-in-up animation-delay-900 relative">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-green-800 mb-4 font-serif">
                Growth
              </h3>
              <p className="text-green-600 leading-relaxed">
                Like tending a magical garden, we support your AI solutions as
                they grow, evolve, and create new possibilities for your
                organization.
              </p>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-slow"
                size="small"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-green-800 mb-6 font-serif">
              Why Organizations Trust Us
            </h2>
            <p className="text-xl text-green-600 leading-relaxed max-w-3xl mx-auto">
              Like the trusted spirits in Ghibli films, we bring wisdom,
              reliability, and a deep respect for the human element in every AI
              solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <div className="bg-white rounded-3xl p-8 shadow-lg relative">
                <h3 className="text-2xl font-bold text-green-800 mb-6 font-serif">
                  Human-Centered Approach
                </h3>
                <ul className="space-y-4 text-green-600">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">🌿</span>
                    <span>
                      AI that enhances human capabilities rather than replacing
                      them
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">🌿</span>
                    <span>
                      Transparent, explainable AI systems you can trust
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">🌿</span>
                    <span>
                      Ethical considerations built into every solution
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">🌿</span>
                    <span>Change management that respects your culture</span>
                  </li>
                </ul>
                <GhibliDustBunny
                  className="absolute top-4 right-4 opacity-15 animate-float-medium"
                  size="small"
                />
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-300">
              <div className="bg-white rounded-3xl p-8 shadow-lg relative">
                <h3 className="text-2xl font-bold text-green-800 mb-6 font-serif">
                  Proven Expertise
                </h3>
                <ul className="space-y-4 text-green-600">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">✨</span>
                    <span>Deep technical expertise across all AI domains</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">✨</span>
                    <span>
                      Track record of successful enterprise implementations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">✨</span>
                    <span>Industry-specific knowledge and best practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">✨</span>
                    <span>Ongoing support and continuous improvement</span>
                  </li>
                </ul>
                <GhibliDustBunny
                  className="absolute top-4 right-4 opacity-15 animate-float-fast"
                  size="small"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-100 to-emerald-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-green-800 mb-6 font-serif">
              Stories from Our Journey
            </h2>
            <p className="text-xl text-green-600 leading-relaxed max-w-3xl mx-auto">
              Like the heartwarming stories in Ghibli films, these are real
              tales of transformation and growth from organizations we've had
              the privilege to serve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg animate-fade-in-up relative">
              <div className="text-4xl mb-4">🏥</div>
              <blockquote className="text-green-700 italic mb-4">
                "Working with Mrcto was like having Totoro guide us through the
                forest of AI. They made the complex feel simple and the
                intimidating feel friendly."
              </blockquote>
              <div className="text-green-600 font-medium">Dr. Sarah Chen</div>
              <div className="text-green-500 text-sm">
                Chief Medical Officer, Regional Health System
              </div>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-slow"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg animate-fade-in-up animation-delay-300 relative">
              <div className="text-4xl mb-4">🏭</div>
              <blockquote className="text-green-700 italic mb-4">
                "Their approach to AI implementation felt like magic—seamless,
                thoughtful, and respectful of our existing processes and
                people."
              </blockquote>
              <div className="text-green-600 font-medium">Marcus Rodriguez</div>
              <div className="text-green-500 text-sm">
                VP of Operations, Manufacturing Corp
              </div>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-medium"
                size="small"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg animate-fade-in-up animation-delay-600 relative">
              <div className="text-4xl mb-4">🎓</div>
              <blockquote className="text-green-700 italic mb-4">
                "They didn't just implement AI—they taught us to see our data
                and processes through new eyes, like discovering a hidden world
                we never knew existed."
              </blockquote>
              <div className="text-green-600 font-medium">
                Prof. Emily Watson
              </div>
              <div className="text-green-500 text-sm">
                Dean of Research, State University
              </div>
              <GhibliDustBunny
                className="absolute top-4 right-4 opacity-15 animate-float-fast"
                size="small"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-emerald-100 to-sky-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl relative animate-fade-in-up">
            <div className="flex justify-center mb-8">
              <GhibliTotoro
                size="large"
                variant="blue"
                className="animate-float-slow"
              />
            </div>
            <h2 className="text-4xl font-bold text-green-800 mb-6 font-serif">
              Ready to Begin Your AI Adventure?
            </h2>
            <p className="text-xl text-green-600 leading-relaxed mb-8">
              Like every great journey in a Ghibli film, your AI transformation
              starts with a single step. Let's explore the possibilities
              together and create something truly magical for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Schedule a Discovery Call
              </a>
              <a
                href="/blog"
                className="inline-block bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-green-50 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Explore Our Insights
              </a>
            </div>
            <GhibliDustBunny
              className="absolute top-4 right-4 opacity-15 animate-float-slow"
              size="small"
            />
            <GhibliDustBunny
              className="absolute bottom-4 left-4 opacity-15 animate-float-medium"
              size="small"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
