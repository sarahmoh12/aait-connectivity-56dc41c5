import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

// Mock data - replace with actual data later
const researches = [
  {
    id: 1,
    title: "Renewable Energy Integration in Ethiopia",
    status: "approved",
    researcher: "Dr. Abebe Bekele",
    department: "Electrical Engineering",
    abstract: "A study on integrating renewable energy sources into Ethiopia's power grid",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80",
    date: "2024",
    fullDescription: `This comprehensive research focuses on the integration of renewable energy sources into Ethiopia's existing power grid infrastructure. The study examines the technical, economic, and social implications of large-scale renewable energy adoption.

Key Findings:
- Potential for 70% renewable energy integration by 2030
- Cost-benefit analysis of different integration strategies
- Impact on rural electrification
- Technical challenges and proposed solutions`,
    methodology: "Mixed-methods approach combining quantitative grid analysis with qualitative stakeholder interviews",
    impact: "The findings could help Ethiopia achieve its renewable energy goals while ensuring grid stability",
    funding: "Ethiopian Electric Power Corporation",
    publications: ["IEEE Power Systems Journal", "Renewable Energy Quarterly"]
  },
  {
    id: 2,
    title: "Urban Water Management Systems",
    status: "ongoing",
    researcher: "Dr. Sara Mohammed",
    department: "Civil Engineering",
    abstract: "Developing efficient urban water management systems for Addis Ababa",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    date: "2023",
  },
  {
    id: 3,
    title: "AI in Manufacturing Processes",
    status: "pending",
    researcher: "Prof. Daniel Tessema",
    department: "Mechanical Engineering",
    abstract: "Implementation of AI in Ethiopian manufacturing sector",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    date: "2023",
  },
];

const ResearchDetail = () => {
  const { id } = useParams();
  const research = researches.find((r) => r.id === Number(id));

  if (!research) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Research not found</h1>
          <Link
            to="/research"
            className="text-aait-600 hover:text-aait-700 inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Research
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/research"
          className="text-aait-600 hover:text-aait-700 inline-flex items-center mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Research
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={research.image}
            alt={research.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <div className="mb-4">
              <Badge variant="outline">
                {research.status.charAt(0).toUpperCase() + research.status.slice(1)}
              </Badge>
            </div>
            <h1 className="text-3xl font-bold mb-4">{research.title}</h1>
            <div className="text-gray-600 mb-6">
              <p>{research.researcher}</p>
              <p>{research.department}</p>
              <p>{research.date}</p>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold mb-3">Abstract</h2>
              <p className="text-gray-700 mb-6">{research.abstract}</p>

              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="whitespace-pre-line mb-6">{research.fullDescription}</p>

              <h2 className="text-xl font-semibold mb-3">Methodology</h2>
              <p className="text-gray-700 mb-6">{research.methodology}</p>

              <h2 className="text-xl font-semibold mb-3">Impact</h2>
              <p className="text-gray-700 mb-6">{research.impact}</p>

              <h2 className="text-xl font-semibold mb-3">Funding</h2>
              <p className="text-gray-700 mb-6">{research.funding}</p>

              {research.publications && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3">Publications</h2>
                  <ul className="list-disc list-inside">
                    {research.publications.map((pub, index) => (
                      <li key={index} className="text-gray-700">
                        {pub}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchDetail;
