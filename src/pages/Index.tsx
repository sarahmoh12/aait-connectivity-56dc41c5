import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Book, Users, Newspaper } from "lucide-react";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Welcome to AAIT
          </h1>
          <p
            className={`text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto transition-all duration-700 delay-300 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Shaping the future through innovation, research, and academic
            excellence
          </p>
          <div
            className={`transition-all duration-700 delay-500 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-aait-600 hover:bg-aait-700 transition-colors"
            >
              Discover More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                stat: "500+",
                label: "Academic Achievements",
                color: "text-emerald-500",
              },
              {
                icon: Book,
                stat: "200+",
                label: "Research Projects",
                color: "text-blue-500",
              },
              {
                icon: Users,
                stat: "10,000+",
                label: "Alumni Network",
                color: "text-purple-500",
              },
              {
                icon: Newspaper,
                stat: "100+",
                label: "Annual Events",
                color: "text-red-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg bg-white shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: `${index * 100 + 800}ms`,
                }}
              >
                <item.icon className={`h-8 w-8 ${item.color} mb-4`} />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {item.stat}
                </h3>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Latest Research",
                description:
                  "Explore our groundbreaking research projects and innovations",
                link: "/research",
                image:
                  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
              },
              {
                title: "Student Achievements",
                description:
                  "Celebrate the outstanding accomplishments of our students",
                link: "/achievements",
                image:
                  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80",
              },
              {
                title: "Upcoming Events",
                description:
                  "Stay updated with our latest events and announcements",
                link: "/news",
                image:
                  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
              },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`group relative overflow-hidden rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: `${index * 100 + 1200}ms`,
                }}
              >
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-sm">{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;