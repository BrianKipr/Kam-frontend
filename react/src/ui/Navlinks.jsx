import React from 'react';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom'; // For React Router

// Map of links to display in the side navigation.
const links = [
  { name: 'Home', href: '/dashboard' },
  { name: 'Invoices', href: '/dashboard/invoices' },
  { name: 'Customers', href: '/dashboard/customers' },
];

export default function NavLinks() {
  const location = useLocation();
  
  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={clsx(
            'flex h-[48px] items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'bg-sky-100 text-blue-600': location.pathname === link.href,
            },
          )}
        >
          {/* No icon to render */}
          <p className="hidden md:block">{link.name}</p>
        </a>
      ))}
    </>
  );
}
