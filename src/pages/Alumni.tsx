import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

// Mock data - replace with actual data later
const alumni = [
  {
    id: 1,
    name: "Dr. Yohannes Ayele",
    graduation: "2010",
    department: "Electrical Engineering",
    currentRole: "Senior Engineer at Ethiopian Electric Power",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    testimonial:
      "AAIT provided me with the foundation I needed to succeed in my career. The practical experience and theoretical knowledge I gained have been invaluable.",
  },
  {
    id: 2,
    name: "Dr. Tigist Bekele",
    graduation: "2012",
    department: "Civil Engineering",
    currentRole: "Project Manager at UN-Habitat",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    testimonial:
      "My time at AAIT shaped my understanding of sustainable development and prepared me for international work.",
  },
  {
    id: 3,
    name: "Dawit Haile",
    graduation: "2015",
    department: "Mechanical Engineering",
    currentRole: "CEO of Ethiopian Manufacturing Industries",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    testimonial:
      "The entrepreneurial spirit fostered at AAIT gave me the confidence to lead and innovate in the manufacturing sector.",
  },
];

const Alumni = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 animate-fade-up">Alumni Success Stories</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni.map((alumnus) => (
            <Card key={alumnus.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <img src={alumnus.image} alt={alumnus.name} className="object-cover" />
                </Avatar>
                <CardTitle className="text-xl font-semibold">{alumnus.name}</CardTitle>
                <p className="text-gray-500">{alumnus.currentRole}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Department:</span> {alumnus.department}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Graduated:</span> {alumnus.graduation}
                  </p>
                </div>
                <blockquote className="italic text-gray-700 border-l-4 border-aait-600 pl-4">
                  "{alumnus.testimonial}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;