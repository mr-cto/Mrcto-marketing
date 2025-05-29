import GhibliTotoro from "../../components/GhibliTotoro";
import GhibliDustBunny from "../../components/GhibliDustBunny";
import GhibliTree from "../../components/GhibliTree";
import GhibliCloud from "../../components/GhibliCloud";

export default function Careers() {
  const positions = [
    {
      title: "Senior AI Wizard",
      department: "Engineering",
      location: "Remote / Magical Forest",
      type: "Full-time",
      description:
        "Join our team of AI wizards to create magical solutions that transform organizations. You'll work with cutting-edge machine learning technologies while maintaining the gentle, human-centered approach that defines our work.",
      requirements: [
        "5+ years of experience in machine learning and AI",
        "Proficiency in Python, TensorFlow, or PyTorch",
        "A gentle spirit and love for creating helpful technology",
        "Experience with cloud platforms (AWS, GCP, Azure)",
        "Passion for Studio Ghibli films (bonus points!)",
      ],
    },
    {
      title: "Data Forest Guardian",
      department: "Data Science",
      location: "Remote / Enchanted Valley",
      type: "Full-time",
      description:
        "Tend to our clients' data forests, ensuring they grow healthy and strong. You'll clean, analyze, and nurture data to help AI models flourish like the magical trees in Ghibli films.",
      requirements: [
        "3+ years of experience in data science",
        "Strong skills in SQL, Python, and R",
        "Experience with data visualization tools",
        "Understanding of statistical analysis",
        "Patience and care for data quality",
      ],
    },
    {
      title: "UX Spirit Guide",
      department: "Design",
      location: "Remote / Floating Castle",
      type: "Full-time",
      description:
        "Guide users through magical AI experiences with the same care that Totoro shows lost children. Create interfaces that feel natural, intuitive, and delightful.",
      requirements: [
        "4+ years of UX/UI design experience",
        "Proficiency in Figma, Sketch, or similar tools",
        "Understanding of human-centered design principles",
        "Experience designing for AI/ML products",
        "A portfolio that shows attention to magical details",
      ],
    },
    {
      title: "Client Journey Companion",
      department: "Customer Success",
      location: "Remote / Moving Castle",
      type: "Full-time",
      description:
        "Accompany our clients on their AI transformation journeys, providing guidance and support like a trusted Ghibli companion. Help them discover the magic in their data.",
      requirements: [
        "2+ years in customer success or consulting",
        "Strong communication and empathy skills",
        "Basic understanding of AI/ML concepts",
        "Problem-solving mindset",
        "Enthusiasm for helping others succeed",
      ],
    },
  ];

  const benefits = [
    {
      icon: "🌳",
      title: "Magical Work Environment",
      description:
        "Work from anywhere in the world, whether it's a cozy forest cabin or a bustling city apartment.",
    },
    {
      icon: "✨",
      title: "Continuous Learning",
      description:
        "Annual learning budget for conferences, courses, and magical skill development.",
    },
    {
      icon: "🎋",
      title: "Flexible Schedule",
      description:
        "Work when you're most creative, whether you're an early bird or a night owl.",
    },
    {
      icon: "🌸",
      title: "Health & Wellness",
      description:
        "Comprehensive health coverage and wellness stipend for maintaining your magical energy.",
    },
    {
      icon: "🏰",
      title: "Team Retreats",
      description:
        "Annual team gatherings in beautiful locations to strengthen our magical bonds.",
    },
    {
      icon: "🌟",
      title: "Equity & Growth",
      description:
        "Share in our success with equity options and clear paths for career advancement.",
    },
  ];

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

          {/* Multiple Totoros representing team members */}
          <GhibliTotoro
            className="absolute bottom-20 left-1/4 animate-float-slow opacity-25"
            size="large"
            variant="gray"
          />
          <GhibliTotoro
            className="absolute bottom-16 left-1/3 animate-float-medium opacity-20"
            size="medium"
            variant="blue"
          />
          <GhibliTotoro
            className="absolute bottom-24 right-1/4 animate-float-slow opacity-25"
            size="large"
            variant="gray"
          />

          {/* Dust bunnies representing opportunities */}
          {[...Array(15)].map((_, i) => (
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
          <h1 className="text-6xl font-bold text-green-800 mb-6 font-serif animate-fade-in-up">
            Join Our Magical Team
          </h1>
          <p className="text-xl text-green-600 mb-8 animate-fade-in-up animation-delay-300">
            Help us create AI magic that transforms organizations while
            preserving the human spirit.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-green-800 mb-16 text-center font-serif animate-fade-in-up">
            Open Positions
          </h2>

          <div className="space-y-8">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Floating Totoro for each position */}
                <GhibliTotoro
                  className="absolute top-6 right-6 opacity-15 animate-float-slow"
                  size="medium"
                  variant={["gray", "blue"][index % 2] as "gray" | "blue"}
                  style={{ animationDelay: `${index * 0.5}s` }}
                />

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-3xl font-bold text-green-800 font-serif">
                        {position.title}
                      </h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {position.department}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-green-600">
                      <span>📍 {position.location}</span>
                      <span>⏰ {position.type}</span>
                    </div>

                    <p className="text-green-600 leading-relaxed mb-6">
                      {position.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-bold text-green-800 mb-3">
                        What We're Looking For:
                      </h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li
                            key={reqIndex}
                            className="flex items-start gap-2 text-green-600"
                          >
                            <span className="text-green-500 mt-1">✨</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <button className="ghibli-button primary w-full mb-4">
                      Apply Now
                    </button>
                    <button className="ghibli-button secondary w-full">
                      Learn More
                    </button>

                    {/* Small dust bunnies around buttons */}
                    <div className="relative mt-4">
                      {[...Array(3)].map((_, i) => (
                        <GhibliDustBunny
                          key={i}
                          className={`absolute animate-float-${
                            ["slow", "medium", "fast"][i]
                          } opacity-20`}
                          size="small"
                          style={{
                            left: `${i * 30}%`,
                            top: `${i * 10}px`,
                            animationDelay: `${i * 0.3}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-100 to-sky-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-green-800 mb-16 text-center font-serif animate-fade-in-up">
            Magical Benefits
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-6xl mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                  {benefit.title}
                </h3>
                <p className="text-green-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Floating dust bunny */}
                <GhibliDustBunny
                  className="absolute top-4 right-4 opacity-20 animate-float-slow"
                  size="small"
                  style={{ animationDelay: `${index * 0.4}s` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-200 to-emerald-300">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-lg relative overflow-hidden">
            {/* Background Totoros representing team culture */}
            <GhibliTotoro
              className="absolute top-8 right-8 opacity-10 animate-float-slow"
              size="large"
              variant="gray"
            />
            <GhibliTotoro
              className="absolute bottom-8 left-8 opacity-10 animate-float-medium"
              size="large"
              variant="blue"
            />

            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold text-green-800 mb-6 font-serif animate-fade-in-up">
                Our Magical Culture
              </h2>
              <p className="text-xl text-green-600 mb-8 leading-relaxed animate-fade-in-up animation-delay-300">
                Like the characters in Studio Ghibli films, we believe in the
                power of collaboration, curiosity, and kindness. Our team is a
                family of dreamers and builders who support each other through
                every magical adventure.
              </p>

              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="animate-fade-in-up animation-delay-600">
                  <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                    🌱 Growth Mindset
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    We embrace challenges as opportunities to learn and grow,
                    just like the young protagonists in Ghibli films who
                    discover their inner strength.
                  </p>
                </div>

                <div className="animate-fade-in-up animation-delay-900">
                  <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                    🤝 Collaborative Spirit
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    Every voice matters in our magical forest. We work together
                    to create solutions that are greater than the sum of their
                    parts.
                  </p>
                </div>
              </div>

              <button className="ghibli-button primary text-lg mt-8 animate-fade-in-up animation-delay-1200">
                Join Our Adventure
              </button>
            </div>

            {/* Dust bunnies representing team spirit */}
            {[...Array(10)].map((_, i) => (
              <GhibliDustBunny
                key={i}
                className={`absolute animate-float-${
                  ["slow", "medium", "fast"][i % 3]
                } opacity-15`}
                size="small"
                style={{
                  left: `${10 + i * 8}%`,
                  top: `${20 + (i % 4) * 15}%`,
                  animationDelay: `${i * 0.6}s`,
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
