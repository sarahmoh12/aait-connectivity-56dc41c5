import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Award, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data - replace with actual data later
const achievements = [
  {
    id: 1,
    title: "International Research Excellence Award",
    category: "academic",
    description: "Recognition for groundbreaking research in renewable energy",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80",
    date: "2024",
  },
  {
    id: 2,
    title: "Community Development Project",
    category: "community",
    description: "Successful implementation of water purification system in rural areas",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
    date: "2023",
  },
  {
    id: 3,
    title: "Industry Partnership Success",
    category: "consultation",
    description: "Major consulting project with Ethiopian Electric Power Corporation",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80",
    date: "2023",
  },
  // Add more achievements as needed
];

const categories = [
  { id: "academic", label: "Academic", icon: Award },
  { id: "community", label: "Community", icon: Users },
  { id: "consultation", label: "Consultation", icon: Briefcase },
];

const Achievements = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredAchievements = achievements.filter((achievement) => {
    const matchesSearch = achievement.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? achievement.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 animate-fade-up">Achievements</h1>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search achievements..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === category.id ? null : category.id
                    )
                  }
                  className={`inline-flex items-center px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category.id
                      ? "bg-aait-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement) => (
            <Link
              to={`/achievements/${achievement.id}`}
              key={achievement.id}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <Badge
                  variant={
                    achievement.category as "academic" | "community" | "consultation"
                  }
                  className="mb-2"
                >
                  {achievement.category.charAt(0).toUpperCase() +
                    achievement.category.slice(1)}
                </Badge>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-aait-600 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
                <div className="mt-4 text-sm text-gray-500">{achievement.date}</div>
              </div>
            </Link>
          ))}
        </div>

        {filteredAchievements.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No achievements found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Achievements;