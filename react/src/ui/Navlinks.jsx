import React from 'react';
import clsx from 'clsx';
import { useLocation, Link } from 'react-router-dom';

const links = [
  { name: 'Summary', href: '/dashboard/' },
  { name: 'Imports', href: '/dashboard/imports' },
  { name: 'Exports', href: '/dashboard/exports' },
];

export default function NavLinks() {
  const location = useLocation();
  
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.href}
          className={clsx(
            'flex h-[48px] items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'bg-sky-100 text-blue-600': location.pathname === link.href,
            },
          )}
        >
          <p className="hidden md:block">{link.name}</p>
        </Link>
      ))}
    </>
  );
}
