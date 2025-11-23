import React from "react";
import Link from "next/link";

interface NavItem {
  href: string;
  label: string;
  external?: boolean;
}

interface NavigationProps {
  items: NavItem[];
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ items, className = "" }) => {
  return (
    <nav className={`flex space-x-4 ${className}`}>
      {items.map((item) => (
        item.external ? (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            {item.label}
          </a>
        ) : (
          <Link
            key={item.href}
            href={item.href}
            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            {item.label}
          </Link>
        )
      ))}
    </nav>
  );
};