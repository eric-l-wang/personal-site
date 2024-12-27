import { Menu, X } from "lucide-react";

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors lg:hidden"
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
      ) : (
        <Menu className="w-6 h-6 text-gray-600 dark:text-gray-400" />
      )}
    </button>
  );
};

export default Hamburger;
