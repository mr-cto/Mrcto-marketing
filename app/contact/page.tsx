"use client";

import { useState } from "react";
import GhibliTotoro from "../../components/GhibliTotoro";
import GhibliDustBunny from "../../components/GhibliDustBunny";
import GhibliTree from "../../components/GhibliTree";
import GhibliCloud from "../../components/GhibliCloud";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) setSent(true);
  };

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

          {/* Welcoming Totoro */}
          <GhibliTotoro
            className="absolute bottom-20 right-1/4 animate-float-slow opacity-25"
            size="large"
            variant="blue"
          />

          {/* Friendly dust bunnies */}
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
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-green-800 mb-6 font-serif animate-fade-in-up">
            Contact Us
          </h1>
          <p className="text-xl text-green-600 mb-8 animate-fade-in-up animation-delay-300">
            Like sending a message through the magical forest spirits, we're
            here to listen and help you begin your AI journey.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <div className="bg-white rounded-3xl p-8 shadow-lg relative">
                {sent ? (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-6">✨</div>
                    <h3 className="text-3xl font-bold text-green-800 mb-4 font-serif">
                      Message Sent!
                    </h3>
                    <p className="text-green-600 leading-relaxed">
                      Thanks for reaching out! Like a message carried by forest
                      spirits, your inquiry has reached us safely. We'll be in
                      touch soon with magical solutions.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-3xl font-bold text-green-800 mb-6 font-serif">
                      Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-green-700 font-medium mb-2">
                          Your Name
                        </label>
                        <input
                          className="w-full border-2 border-green-200 p-4 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                          placeholder="Enter your name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-green-700 font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          className="w-full border-2 border-green-200 p-4 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                          placeholder="Enter your email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-green-700 font-medium mb-2">
                          How Can We Help?
                        </label>
                        <textarea
                          className="w-full border-2 border-green-200 p-4 rounded-2xl h-32 focus:border-green-500 focus:outline-none transition-colors resize-none"
                          placeholder="Tell us about your AI dreams and challenges..."
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="ghibli-button primary w-full text-lg"
                      >
                        Send Message ✨
                      </button>
                    </form>
                  </>
                )}

                {/* Floating dust bunny */}
                <GhibliDustBunny
                  className="absolute top-4 right-4 opacity-15 animate-float-slow"
                  size="small"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in-up animation-delay-300">
              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-lg relative">
                  <div className="flex justify-center mb-6">
                    <GhibliTotoro
                      size="large"
                      variant="blue"
                      className="animate-float-slow"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4 text-center font-serif">
                    Let's Connect
                  </h3>
                  <p className="text-green-600 text-center leading-relaxed">
                    Like the magical connections in Studio Ghibli films, we
                    believe great relationships start with simple conversations.
                  </p>
                  <GhibliDustBunny
                    className="absolute top-4 right-4 opacity-15 animate-float-medium"
                    size="small"
                  />
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg relative">
                  <h3 className="text-xl font-bold text-green-800 mb-4 font-serif">
                    Other Ways to Reach Us
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📧</span>
                      <span className="text-green-600">t@mrcto.ai</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🏰</span>
                      <span className="text-green-600">
                        The Enchanted Forest
                        <br />
                        AI Magic Headquarters
                      </span>
                    </div>
                  </div>
                  <GhibliDustBunny
                    className="absolute top-4 right-4 opacity-15 animate-float-fast"
                    size="small"
                  />
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg relative">
                  <h3 className="text-xl font-bold text-green-800 mb-4 font-serif">
                    Response Time
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    Like Totoro appearing when you need him most, we typically
                    respond within 24 hours during business days. For urgent
                    matters, we're as quick as dust bunnies scurrying through
                    the forest!
                  </p>
                  <GhibliDustBunny
                    className="absolute top-4 right-4 opacity-15 animate-float-slow"
                    size="small"
                  />
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
              Ready to Start Your AI Adventure?
            </h2>
            <p className="text-xl text-green-600 mb-12 animate-fade-in-up animation-delay-300">
              Every magical journey begins with a single step. Let's take that
              step together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
              <button
                onClick={() => {
                  // Open chat widget with consultation message
                  window.dispatchEvent(
                    new CustomEvent("openChat", {
                      detail: {
                        message:
                          "I'd like to schedule a free consultation to discuss my AI needs.",
                      },
                    })
                  );
                }}
                className="ghibli-button primary text-lg"
              >
                Schedule Free Consultation
              </button>
              <button
                onClick={() => {
                  // Open chat widget with AI guide request
                  window.dispatchEvent(
                    new CustomEvent("openChat", {
                      detail: {
                        message:
                          "I'd like to download your AI guide to learn more about AI solutions.",
                      },
                    })
                  );
                }}
                className="ghibli-button secondary text-lg"
              >
                Download AI Guide
              </button>
            </div>

            {/* Welcoming Totoros */}
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

            {/* Friendly dust bunnies */}
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
