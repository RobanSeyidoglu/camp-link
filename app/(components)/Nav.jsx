import Link from "next/link";
import { FaSignsPost, FaHouse } from "react-icons/fa6";

const Nav = () => {
  return (
    <nav className="bg-gray-900 px-6 py-4 flex items-center justify-between shadow-md">
      <div className="flex  items-center space-x-6">
        <Link href="/" className="icon">
          <FaHouse className="icon" size={24} />
        </Link>
        <Link href="/PostsPage/new" className="icon">
          <FaSignsPost className="icon" size={24} />
        </Link>
      </div>

      <div>
        <p className="text-amber-100 text-sm md:text-base font-medium">
          admin@gmail.com
        </p>
      </div>
    </nav>
  );
};

export default Nav;
