import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";

// Mock data - replace with actual data later
const news = [
  {
    id: 1,
    title: "AAIT Hosts International Engineering Conference",
    category: "event",
    description: "Leading researchers and industry experts gather to discuss innovation",
    fullDescription: `The Addis Ababa Institute of Technology (AAIT) successfully hosted the International Engineering Conference, bringing together leading researchers and industry experts from around the world. The three-day event featured keynote speeches, panel discussions, and workshops focusing on emerging technologies and sustainable development.

Key Highlights:
- Over 200 international delegates
- 50+ research presentations
- Interactive workshops on emerging technologies
- Networking opportunities with industry leaders
- Exhibition of student innovations

The conference has established new partnerships and collaboration opportunities for AAIT with several international institutions.`,
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80",
    date: "March 15, 2024",
    venue: "AAIT Main Campus",
    organizer: "Department of Engineering",
    contact: "conference@aait.edu.et"
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

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = news.find((n) => n.id === Number(id));

  if (!newsItem) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">News not found</h1>
          <Link
            to="/news"
            className="text-aait-600 hover:text-aait-700 inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/news"
          className="text-aait-600 hover:text-aait-700 inline-flex items-center mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to News
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
            <div className="flex items-center text-gray-600 mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              {newsItem.date}
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6">{newsItem.description}</p>
              <p className="whitespace-pre-line">{newsItem.fullDescription}</p>

              {newsItem.venue && (
                <div className="bg-gray-50 p-6 rounded-lg mt-6">
                  <h2 className="text-xl font-semibold mb-3">Event Details</h2>
                  <div className="space-y-2">
                    <p><strong>Venue:</strong> {newsItem.venue}</p>
                    <p><strong>Organizer:</strong> {newsItem.organizer}</p>
                    <p><strong>Contact:</strong> {newsItem.contact}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;