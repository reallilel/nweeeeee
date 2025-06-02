import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from './Link';

interface AccordionDropdownProps {
  categories: {
    category: string;
    icon: React.ReactNode;
    items: {
      name: string;
      href: string;
    }[];
  }[];
  onItemClick?: () => void;
  className?: string;
}

const AccordionDropdown: React.FC<AccordionDropdownProps> = ({
  categories,
  onItemClick,
  className = ''
}) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className={`bg-slate-800 rounded-md shadow-lg overflow-hidden ${className}`}>
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
        {categories.map((category) => (
          <div key={category.category}>
            <button
              onClick={() => toggleCategory(category.category)}
              className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-blue-400 bg-slate-900/50 hover:bg-slate-900/70 transition-colors"
            >
              <div className="flex items-center">
                {category.icon}
                <span className="ml-2">{category.category}</span>
              </div>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  openCategory === category.category ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`transition-all duration-200 ease-in-out ${
                openCategory === category.category
                  ? 'max-h-[500px] opacity-100'
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              {category.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white pl-10"
                  onClick={onItemClick}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionDropdown;
