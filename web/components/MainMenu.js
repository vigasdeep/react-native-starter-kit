import React from 'react';
import { NavItem } from 'reactstrap';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/posts', label: 'Posts', icon: 'notebook' },
];

const MainMenu = () => (
  <div>
    {links.map(({ href, label, icon }) => (
      <NavItem key={`nav-link-${href}-${label}`}>
        <Link prefetch href={href}>
          <a className="nav-link">
            <i className={`icon-${icon}`} />
            <span>{label}</span>
          </a>
        </Link>
      </NavItem>
    ))}
  </div>
);

export default MainMenu;
