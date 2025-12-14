import { MessageCircle, Video, Megaphone, FileEdit, Palette, Sparkles, Clock, BadgeCheck, ArrowRight } from 'lucide-react';

function App() {
  const whatsappLink = "https://wa.me/919555866320?text=Hi%20Anchal,%20I%20am%20interested%20in%20your%20video%20editing%20and%20social%20media%20services.";

  const services = [
    {
      icon: Video,
      title: "Short-form Video Editing",
      description: "Engaging reels, shorts, and TikToks optimized for maximum reach and engagement."
    },
    {
      icon: FileEdit,
      title: "Long-form Video Editing",
      description: "Professional YouTube videos, podcasts, and documentaries with seamless storytelling."
    },
    {
      icon: Sparkles,
      title: "Script Writing",
      description: "Compelling scripts for short and long-form content that captivate your audience."
    },
    {
      icon: Megaphone,
      title: "Social Media Management",
      description: "Complete social media strategy, content planning, and account management."
    },
    {
      icon: Palette,
      title: "Graphic Design & Ads",
      description: "Eye-catching thumbnails, posts, and advertisements that drive conversions."
    }
  ];

  const pricing = [
    {
      title: "Short Video Editing",
      price: "₹299",
      delivery: "2-day delivery",
      features: ["Reels & Shorts", "Color Grading", "Sound Design", "AI Enhancement"]
    },
    {
      title: "Long Video Editing",
      price: "₹1,499",
      delivery: "5-day delivery",
      features: ["~10 min video", "Pro Editing", "Transitions", "Full Post-Production"]
    },
    {
      title: "Script Writing",
      price: "₹199 - ₹899",
      delivery: "24-48 hrs",
      features: ["Short Scripts", "Long Scripts", "Hook-focused", "SEO Optimized"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,174,255,0.1),transparent_50%)] pointer-events-none"></div>

      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-lg border-b border-cyan-500/20 z-50">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Video className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Anchal Media
              </span>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/50"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">Chat Now</span>
            </a>
          </nav>
        </header>

        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold">
                  3+ Years of Excellence
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Grow Your Brand with
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  High-Impact Video Content
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Professional video editing, social media management, and AI-powered creative services for brands and creators.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/50 text-lg font-semibold"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-cyan-400">3+</div>
                <div className="text-gray-400 mt-2">Years Experience</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-blue-400">500+</div>
                <div className="text-gray-400 mt-2">Videos Edited</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-cyan-400">100%</div>
                <div className="text-gray-400 mt-2">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="text-cyan-400">Anchal</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl">
              <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                <p>
                  With over 3 years of professional experience in digital media and content creation,
                  <span className="text-cyan-400 font-semibold"> Anchal</span> has established himself as a trusted name in video editing and social media management.
                </p>

                <p>
                  His journey includes working with leading companies like <span className="text-cyan-400 font-semibold">Airslide Services</span>,
                  a renowned digital marketing agency, and <span className="text-cyan-400 font-semibold">Ooumph Private Limited</span>,
                  where he excelled as a Social Media Manager & Video Editor.
                </p>

                <p>
                  Today, Anchal works with a diverse portfolio of Indian and international clients,
                  delivering high-quality creative solutions that drive real results. His expertise combines
                  technical precision with creative storytelling, enhanced by cutting-edge AI tools to ensure
                  every project exceeds expectations.
                </p>

                <div className="flex flex-wrap gap-4 pt-6">
                  <div className="flex items-center space-x-2 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30">
                    <BadgeCheck className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm font-semibold">Verified Professional</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/30">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-semibold">AI-Enhanced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-cyan-400">Services</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive creative solutions powered by AI tools to enhance quality and speed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Transparent <span className="text-cyan-400">Pricing</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-400">
                Professional quality at competitive rates
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/20 rounded-3xl p-8 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.title}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 mb-6 pb-6 border-b border-gray-700">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{plan.delivery}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <BadgeCheck className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 text-sm mt-8">
              * Terms & Conditions apply. Final pricing may vary based on project requirements.
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-3xl p-12 text-center backdrop-blur-sm shadow-2xl">
              <MessageCircle className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to <span className="text-cyan-400">Get Started?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create content that makes an impact.
                Get a free quote directly on WhatsApp.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/50 text-lg font-semibold"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Get Quote on WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        <footer className="py-12 px-6 border-t border-cyan-500/20 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Video className="w-8 h-8 text-cyan-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Anchal Media
                </span>
              </div>
              <p className="text-gray-400">
                Video Editing & Social Media Agency
              </p>
              <p className="text-cyan-400 font-semibold">
                WhatsApp Contact Available
              </p>
              <div className="pt-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>+91 95558 66320</span>
                </a>
              </div>
            </div>
            <div className="text-center mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                © 2024 Anchal Media. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
