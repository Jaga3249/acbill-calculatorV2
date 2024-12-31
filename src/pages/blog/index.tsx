import { useState } from "react";
import Layout from "@/layout/layout";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  // State to toggle "Show More" and "Show Less"
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  // Full content of the description
  const fullContent = `
    Air conditioners are essential for beating the heat in India, but
    they can contribute significantly to your electricity bill. With
    energy prices rising, understanding your AC's annual electricity
    consumption is key to managing costs effectively. In this guide,
    we’ll walk you through how to calculate your AC’s power usage using
    a simple formula, explain the factors that affect energy
    consumption, and introduce our tips for energy efficiency.
  `;

  // Extract the first sentence
  const firstSentence = `
    Air conditioners are essential for beating the heat in India.
  `;

  return (
    <Layout>
      <div className="h-[80vh] flex flex-col pt-6">
        <div
          className="container mx-auto text-gray-800 
        cursor-pointer border border-gray-200 rounded-lg p-4 shadow-sm bg-white"
        >
          <h1
            className="text-xl font-bold"
            onClick={() => navigate("/blog/ac-electricity-bill-calculator")}
          >
            How to Calculate Your Air Conditioner’s Annual Electricity Bill in
            India
          </h1>
          <p className="text-sm">
            {showMore ? fullContent : firstSentence}
            {!showMore && <span className="font-semibold">...</span>}{" "}
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-blue-500 underline ml-2"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
