import Layout from "@/layout/layout";

interface BlogPost {
  title: string;
  description: string;
  redirect: string;
}

const Blog = () => {
  const frontendUrl = import.meta.env.VITE_FRONTEND_URL;

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const blogPosts: BlogPost[] = [
    {
      title:
        "How to Calculate Your Air Conditioner’s Annual Electricity Bill in India",
      description:
        "Air conditioners are essential for beating the heat in India, but they can contribute significantly to your electricity bill. With energy prices rising, understanding your AC's annual electricity consumption is key to managing costs effectively. In this guide, we’ll walk you through how to calculate your AC’s power usage using a simple formula, explain the factors that affect energy consumption, and introduce ourAC Bill Calculatorto make the process easier.",
      redirect: `${frontendUrl}/blog/calculate-air-conditioner-annual-electricity-bill-india`,
    },
    {
      title: "How AC Star Ratings Impact Your Monthly Electricity Costs",
      description:
        "Air conditioners have become a must-have in today’s homes, especially during hot summers. But as cooling comforts us, the rising electricity bills might not. If you’ve ever wondered how AC star ratings impact your monthly electricity cost, you’re in the right place. In this blog, we’ll break it down simply, compare 3-star and 5-star ACs, and explain how you can estimate energy consumption with our AC Energy Savings Calculator",
      redirect: `${frontendUrl}/blog/ac-star-ratings-impact-monthly-electricity-costs`,
    },
    {
      title: "Top 10 Energy-Saving Tips for AC Users in India",
      description:
        "Air conditioners provide much-needed relief during India’s scorching summers and even during mild winters in certain regions. However, the convenience of an AC often comes with high electricity bills. If you’ve been searching for ways to use your AC efficiently and save electricity, this blog will guide you through the best energy-saving tips tailored for Indian households. Plus, don’t miss the opportunity to calculate your AC’s electricity consumption with our AC Bill Calculator.",
      redirect: `${frontendUrl}/blog/top-10-energy-saving-tips-ac-users-india`,
    },
    {
      title:
        "Why Your AC Electricity Bill Is High: 7 Common Mistakes and Fixes",
      description:
        "Do you dread your electricity bill every month, especially during summer? If your air conditioner (AC) usage is causing unusually high electricity costs, you’re not alone. Many homeowners unknowingly make mistakes that lead to increased power consumption. Here, we’ll explore common mistakes and actionable fixes to save money. Don’t forget to use ourAC Bill Calculator to estimate and reduce your electricity bill.",
      redirect: `${frontendUrl}/blog/why-ac-electricity-bill-is-high-mistakes-and-fixes`,
    },
    {
      title:
        "How Much Electricity Does a 1-Ton, 1.5-Ton, and 2-Ton AC Consume?",
      description:
        "Air conditioners have become a necessity in most Indian households, especially during the sweltering summer months. However, many homeowners are concerned about the electricity bills associated with running an AC. One of the most frequent questions people ask is: How much electricity does a 1-ton, 1.5-ton, or 2-ton AC consume? The answer depends on the star rating, type of AC (inverter vs non-inverter), and daily usage.",
      redirect: `${frontendUrl}/blog/electricity-consumption-1-ton-1-5-ton-2-ton-ac`,
    },
  ];

  console.log("Blog Posts: ", blogPosts); // Debugging

  return (
    <Layout>
      <div className="flex flex-col items-center gap-6 pt-6 px-4 sm:px-6 md:px-10 lg:px-20">
        {blogPosts.map((item, i) => (
          <a
            href={item.redirect}
            className="container mx-auto text-gray-800 cursor-pointer border border-gray-200 rounded-lg p-4 shadow-sm bg-white hover:bg-gray-100 hover:shadow-lg transition duration-200 w-full sm:w-[90%] md:w-[80%] lg:w-full"
            key={i}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="text-xl font-bold">{item.title}</h1>
            <p className="text-sm">{truncateText(item.description, 120)}</p>
          </a>
        ))}
      </div>
    </Layout>
  );
};

export default Blog;
