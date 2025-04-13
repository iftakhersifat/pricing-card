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
        <nav className="flex justify-between p-4">
            <h1 className='font-bold'>PricingCard</h1>
            <ul className="space-x-6 font-semibold">
                {
                    navigationData.map(nav=><a key={nav.id} href={nav.path}>{nav.name}</a>)
                }
            </ul>
            <button className='bg-amber-600 font-semibold text-white rounded-lg px-3 py-2 transition hover:bg-green-700'>Sign In</button>
        </nav>
    );
};

export default Nav;