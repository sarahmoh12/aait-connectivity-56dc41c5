import { useState } from "react";
import { Badge } from "@/components/ui/badge";

// Mock data - replace with actual data later
const images = [
  {
    id: 1,
    title: "Campus Life",
    category: "campus",
    url: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80",
    description: "Students enjoying the AAIT campus grounds",
  },
  {
    id: 2,
    title: "Research Labs",
    category: "facilities",
    url: "https://images.unsplash.com/photo-1581093458791-9d42e3f1b9d4?auto=format&fit=crop&q=80",
    description: "State-of-the-art research facilities",
  },
  {
    id: 3,
    title: "Graduation Ceremony",
    category: "events",
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
    description: "Celebrating student achievements",
  },
  // Add more images as needed
];

const categories = ["all", "campus", "facilities", "events"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredImages = images.filter(
    (image) => selectedCategory === "all" || image.category === selectedCategory
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 animate-fade-up">Gallery</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-aait-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <Badge className="mb-2 w-fit">{image.category}</Badge>
                <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                <p className="text-white text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No images found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;