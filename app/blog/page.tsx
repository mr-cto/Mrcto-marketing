import GhibliTotoro from "../../components/GhibliTotoro";
import GhibliDustBunny from "../../components/GhibliDustBunny";
import GhibliTree from "../../components/GhibliTree";
import GhibliCloud from "../../components/GhibliCloud";

export default function Blog() {
  const getPostUrl = (title: string) => {
    const urlMap: { [key: string]: string } = {
      "The Magic of AI: Lessons from Studio Ghibli": "/blog/the-magic-of-ai",
      "Building AI That Feels Like Totoro": "/blog/building-ai-like-totoro",
      "The Dust Bunnies of Data: Cleaning for AI Success":
        "/blog/dust-bunnies-of-data",
      "Spirited Away: A Journey Through AI Transformation":
        "/blog/spirited-away-transformation",
      "The Forest Spirits of Machine Learning": "/blog/forest-spirits-ml",
      "Howl's Moving Castle: Building Adaptive AI Systems":
        "/blog/howls-moving-castle-ai",
    };
    return urlMap[title] || "#";
  };

  const blogPosts = [
    {
      title: "The Magic of AI: Lessons from Studio Ghibli",
      excerpt:
        "How the timeless wisdom of Miyazaki's films can guide our approach to artificial intelligence.",
      date: "March 15, 2025",
      readTime: "5 min read",
      category: "Philosophy",
    },
    {
      title: "Building AI That Feels Like Totoro",
      excerpt:
        "Creating AI solutions that are gentle, helpful, and deeply trustworthy.",
      date: "March 10, 2025",
      readTime: "7 min read",
      category: "Design",
    },
    {
      title: "The Dust Bunnies of Data: Cleaning for AI Success",
      excerpt:
        "Why data preparation is like tending to the magical creatures in your digital forest.",
      date: "March 5, 2025",
      readTime: "6 min read",
      category: "Technical",
    },
    {
      title: "Spirited Away: A Journey Through AI Transformation",
      excerpt:
        "How organizations can navigate the magical world of AI without losing their soul.",
      date: "February 28, 2025",
      readTime: "8 min read",
      category: "Strategy",
    },
    {
      title: "The Forest Spirits of Machine Learning",
      excerpt:
        "Understanding the invisible forces that make AI models work their magic.",
      date: "February 20, 2025",
      readTime: "10 min read",
      category: "Technical",
    },
    {
      title: "Howl's Moving Castle: Building Adaptive AI Systems",
      excerpt:
        "Creating AI that evolves and adapts like the magical architecture in Ghibli films.",
      date: "February 15, 2025",
      readTime: "9 min read",
      category: "Innovation",
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

          {/* Totoros in the background */}
          <GhibliTotoro
            className="absolute bottom-20 left-1/4 animate-float-slow opacity-20"
            size="large"
            variant="gray"
          />
          <GhibliTotoro
            className="absolute top-32 right-1/4 animate-float-medium opacity-15"
            size="medium"
            variant="blue"
          />

          {/* Dust bunnies scattered around */}
          {[...Array(12)].map((_, i) => (
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
            Magical AI Stories
          </h1>
          <p className="text-xl text-green-600 mb-8 animate-fade-in-up animation-delay-300">
            Tales from the enchanted world of artificial intelligence, where
            technology meets wonder.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <a key={index} href={getPostUrl(post.title)} className="block">
                <article
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up relative overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Floating dust bunny on each card */}
                  <GhibliDustBunny
                    className="absolute top-4 right-4 opacity-20 animate-float-slow"
                    size="small"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  />

                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-3">
                      {post.category}
                    </span>
                    <h2 className="text-2xl font-bold text-green-800 mb-3 font-serif hover:text-green-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-green-600 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex justify-between items-center text-sm text-green-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Magical hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-100 to-sky-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-lg relative overflow-hidden">
            {/* Background Totoro */}
            <GhibliTotoro
              className="absolute top-8 right-8 opacity-10 animate-float-slow"
              size="large"
              variant="gray"
            />

            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-green-800 mb-6 font-serif animate-fade-in-up">
                The Philosophy Behind AI Magic
              </h2>
              <p className="text-xl text-green-600 mb-8 leading-relaxed animate-fade-in-up animation-delay-300">
                Just as Studio Ghibli films teach us about the harmony between
                nature and technology, we believe AI should enhance rather than
                replace the human spirit. Our approach to artificial
                intelligence is guided by the same principles that make Ghibli
                stories timeless.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="animate-fade-in-up animation-delay-600">
                  <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                    Gentle Technology
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    Like Totoro's gentle presence, our AI solutions work quietly
                    in the background, providing support without overwhelming
                    the user experience.
                  </p>
                </div>

                <div className="animate-fade-in-up animation-delay-900">
                  <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                    Magical Simplicity
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    Complex AI becomes simple magic when designed with care,
                    making advanced technology accessible to everyone in your
                    organization.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating dust bunnies */}
            {[...Array(6)].map((_, i) => (
              <GhibliDustBunny
                key={i}
                className={`absolute animate-float-${
                  ["slow", "medium", "fast"][i % 3]
                } opacity-20`}
                size="small"
                style={{
                  left: `${20 + i * 15}%`,
                  bottom: `${10 + (i % 3) * 10}%`,
                  animationDelay: `${i * 0.7}s`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-200 to-emerald-300">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <h2 className="text-5xl font-bold text-green-800 mb-6 font-serif animate-fade-in-up">
              Join Our Magical Journey
            </h2>
            <p className="text-xl text-green-600 mb-12 animate-fade-in-up animation-delay-300">
              Subscribe to receive the latest stories from the enchanted world
              of AI.
            </p>

            <div className="bg-white rounded-3xl p-8 shadow-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full border-2 border-green-200 focus:border-green-500 focus:outline-none text-green-800"
                />
                <button className="ghibli-button primary">Subscribe</button>
              </div>
              <p className="text-sm text-green-500 mt-4">
                ✨ No spam, just magical AI insights delivered to your inbox.
              </p>
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

            {/* More dust bunnies */}
            {[...Array(8)].map((_, i) => (
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
          </div>
        </div>
      </section>
    </main>
  );
}
