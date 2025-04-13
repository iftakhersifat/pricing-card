import React from 'react';

// 5 url information, they will have name, path (url path);
const navigationData = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
  ];
  
const Nav = () => {
    return (
        <nav>
            <ul className="space-x-6">
                {
                    navigationData.map(nav=><a key={nav.id} href={nav.path}>{nav.name}</a>)
                }
            </ul>
        </nav>
    );
};

export default Nav;