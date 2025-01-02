import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data - replace with actual data later
const news = [
  {
    id: 1,
    title: "AAIT Hosts International Engineering Conference",
    category: "event",
    description: "Leading researchers and industry experts gather to discuss innovation",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80",
    date: "March 15, 2024",
  },
  {
    id: 2,
    title: "New Research Center Opening",
    category: "announcement",
    description: "State-of-the-art facility to boost research capabilities",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    date: "April 1, 2024",
  },
  {
    id: 3,
    title: "Student Team Wins International Competition",
    category: "achievement",
    description: "AAIT students showcase innovation at global engineering challenge",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
    date: "February 28, 2024",
  },
];

const News = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 animate-fade-up">News & Events</h1>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search news and events..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((item) => (
            <Link
              to={`/news/${item.id}`}
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No news or events found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;