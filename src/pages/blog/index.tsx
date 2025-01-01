import { useState } from "react";
import Layout from "@/layout/layout";
import { useNavigate } from "react-router-dom";

interface BlogPost {
  title: string;
  fullContent: string | JSX.Element;
  firstSentence: string;
  redirect: string;
}

const Blog = () => {
  const [showMore, setShowMore] = useState<Record<number, boolean>>({});
  const navigate = useNavigate();

  const blogPosts: BlogPost[] = [
    {
      title:
        "How to Calculate Your Air Conditioner’s Annual Electricity Bill in India",
      fullContent:
        "Air conditioners are essential for beating the heat in India, but they can contribute significantly to your electricity bill. With energy prices rising, understanding your AC's annual electricity consumption is key to managing costs effectively. In this guide, we’ll walk you through how to calculate your AC’s power usage using a simple formula, explain the factors that affect energy consumption, and introduce our tips for energy efficiency.",
      firstSentence:
        "Air conditioners are essential for beating the heat in India.",
      redirect: "/blog/ac-electricity-bill-calculator",
    },
    {
      title: "How AC Star Ratings Impact Your Monthly Electricity Costs",
      fullContent:
        "But as cooling comforts us, the rising electricity bills might not. If you’ve ever wondered how AC star ratings impact your monthly electricity cost, you’re in the right place. In this blog, we’ll break it down simply, compare 3-star and 5-star ACs, and explain how you can estimate energy consumption with our AC Energy Savings Calculator.",
      firstSentence:
        "Air conditioners have become a must-have in today’s homes, especially during hot summers.",
      redirect: "/blog/ac-star-ratings",
    },
    {
      title: "Top 10 Energy-Saving Tips for AC Users in India",
      fullContent: (
        <span>
          Air conditioners provide much-needed relief during India’s scorching
          summers and even during mild winters in certain regions. However, the
          convenience of an AC often comes with high electricity bills. If
          you’ve been searching for ways to use your AC efficiently and save
          electricity, this blog will guide you through the best energy-saving
          tips tailored for Indian households. Plus, don’t miss the opportunity
          to calculate your AC’s electricity consumption with our{" "}
          <a
            href="https://acbillcalculator.com"
            target="_blank"
            className="text-blue-500 font-semibold hover:underline"
          >
            AC Bill Calculator
          </a>
          .
        </span>
      ),
      firstSentence:
        "Air conditioners provide much-needed relief during India’s scorching summers and even during mild winters in certain regions. However, the convenience of an AC often comes with high electricity bills.",
      redirect: "/blog/ac-energy-saving-tips",
    },
  ];

  const toggleShowMore = (index: number) => {
    setShowMore((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <Layout>
      <div className="h-[80vh] flex flex-col gap-3 pt-6">
        {blogPosts.map((item, i: number) => (
          <div
            className="container mx-auto text-gray-800 
  cursor-pointer border border-gray-200 rounded-lg p-4 shadow-sm bg-white"
            key={i}
          >
            <h1
              className="text-xl font-bold"
              onClick={() => navigate(item?.redirect)}
            >
              {item?.title}
            </h1>
            <p className="text-sm">
              {showMore[i] ? item?.fullContent : item?.firstSentence}
              {!showMore[i] && <span className="font-semibold">...</span>}{" "}
              <button
                onClick={() => toggleShowMore(i)}
                className="text-blue-500 underline ml-2"
              >
                {showMore[i] ? "Show Less" : "Show More"}
              </button>
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Blog;
