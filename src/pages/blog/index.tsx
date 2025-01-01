import Layout from "@/layout/layout";
import { useNavigate } from "react-router-dom";

interface BlogPost {
  title: string;
  description: string;
  redirect: string;
}

const Blog = () => {
  const navigate = useNavigate();
  const frontendUrl = import.meta.env.VITE_FRONTEND_URL;

  const blogPosts: BlogPost[] = [
    {
      title:
        "How to Calculate Your Air Conditioner’s Annual Electricity Bill in India",
      description:
        "Air conditioners are essential for beating the heat in India, but they can contribute significantly to your electricity bill. With energy prices rising, understanding your AC's annual electricity consumption is key to managing costs effectively...",
      redirect: `${frontendUrl}/blog/calculate-air-conditioner-annual-electricity-bill-india`,
    },
    {
      title: "How AC Star Ratings Impact Your Monthly Electricity Costs",
      description:
        "Air conditioners have become a must-have in today’s homes, especially during hot summers. But as cooling comforts us, the rising electricity bills might not...",
      redirect: `${frontendUrl}/blog/ac-star-ratings-impact-monthly-electricity-costs`,
    },
    {
      title: "Top 10 Energy-Saving Tips for AC Users in India",
      description:
        "Air conditioners provide much-needed relief during India’s scorching summers and even during mild winters in certain regions. However, the convenience of an AC often comes with high electricity bills...",
      redirect: `${frontendUrl}/blog/top-10-energy-saving-tips-ac-users-india`,
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col items-center  gap-6 pt-6 px-4 sm:px-6 md:px-10 lg:px-20">
        {blogPosts.map((item, i: number) => (
          <a
            href={item?.redirect}
            className="container mx-auto text-gray-800 cursor-pointer border border-gray-200 rounded-lg p-4 shadow-sm bg-white hover:bg-gray-100 hover:shadow-lg transition duration-200 w-full sm:w-[90%] md:w-[80%] lg:w-full"
            key={i}
            target="_blank"
          >
            <h1 className="text-xl font-bold">{item?.title}</h1>
            <p className="text-sm line-clamp-2 overflow-hidden">
              {item?.description}
            </p>
          </a>
        ))}
      </div>
    </Layout>
  );
};

export default Blog;
