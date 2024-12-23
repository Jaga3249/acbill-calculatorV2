import Footer from "@/components/footer";
import Header from "@/components/header";
import { imagePath } from "@/constants/imagePath";
import { X } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="font-poppins select-none h-auto md:px-20 px-4  overflow-hidden">
        <Header setIsMenuOpen={setIsMenuOpen} />
        {children}
      </div>
      <Footer />
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-10"
            onClick={() => setIsMenuOpen(false)}
          />

          <span className="md:hidden sm:hidden bg-septenaryWhite fixed top-0 w-[273px] h-screen rounded-tr-[20px] rounded-br-[20px] p-8 z-20">
            <div className="flex flex-col gap-[52px]">
              <img
                src={imagePath?.companyLogo}
                alt="company logo"
                className="w-[55px] h-[37px]"
              />
              <div className="flex flex-col gap-[40px]">
                <span className="text-sm font-semibold text-primaryBlack">
                  Home
                </span>
                <span className="text-sm font-semibold text-primaryBlack">
                  Blogs
                </span>
                <span className="text-sm font-semibold text-primaryBlack">
                  Browse AC
                </span>
              </div>
            </div>
            <X
              className="absolute top-4 right-4"
              size={30}
              onClick={() => setIsMenuOpen(false)}
            />
          </span>
        </>
      )}
    </>
  );
};

export default Layout;
