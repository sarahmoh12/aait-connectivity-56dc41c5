import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
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
    fullDescription: `The Addis Ababa Institute of Technology (AAIT) received international recognition for its groundbreaking research in renewable energy solutions. The research team, led by Dr. Abebe Bekele, developed an innovative solar energy storage system that significantly improves energy efficiency in rural areas.

This achievement marks a significant milestone in AAIT's commitment to sustainable development and technological innovation in Ethiopia. The research has already attracted international partnerships and funding opportunities for further development.

Key Highlights:
- Innovative solar energy storage solution
- International recognition and partnerships
- Potential for widespread implementation in rural areas
- Significant impact on sustainable development goals`,
    team: ["Dr. Abebe Bekele", "Dr. Sara Mohammed", "Prof. Daniel Tessema"],
    impact: "The research has the potential to provide reliable electricity to over 100,000 households in rural Ethiopia.",
  },
  // Add more detailed achievement data as needed
];

const AchievementDetail = () => {
  const { id } = useParams();
  const achievement = achievements.find((a) => a.id === Number(id));

  if (!achievement) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Achievement not found</h1>
          <Link
            to="/achievements"
            className="text-aait-600 hover:text-aait-700 inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Achievements
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/achievements"
          className="text-aait-600 hover:text-aait-700 inline-flex items-center mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Achievements
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={achievement.image}
            alt={achievement.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <div className="mb-4">
              <Badge
                variant={
                  achievement.category as "academic" | "community" | "consultation"
                }
              >
                {achievement.category.charAt(0).toUpperCase() +
                  achievement.category.slice(1)}
              </Badge>
            </div>
            <h1 className="text-3xl font-bold mb-4">{achievement.title}</h1>
            <div className="text-gray-600 mb-6">{achievement.date}</div>

            <div className="prose max-w-none">
              <p className="whitespace-pre-line">{achievement.fullDescription}</p>

              {achievement.team && (
                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-3">Research Team</h2>
                  <ul className="list-disc list-inside">
                    {achievement.team.map((member, index) => (
                      <li key={index} className="text-gray-700">
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {achievement.impact && (
                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-3">Impact</h2>
                  <p className="text-gray-700">{achievement.impact}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementDetail;