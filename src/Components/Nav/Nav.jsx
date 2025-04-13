import { Menu } from 'lucide-react';
import React, { useState } from 'react';

// 5 url information, they will have name, path (url path);
const navigationData = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
  ];
  
const Nav = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="flex justify-between p-4">
            <div className='flex gap-3' onClick={()=>setOpen(!open)}>
            {open ? "open" : "close"}
            <Menu className='mt-1 lg:hidden' >
            </Menu>
            <h1 className='font-bold text-xl'>PricingCard</h1>
            </div>
            <ul className="space-x-6 font-semibold text-md">
                {
                    navigationData.map(nav=><a key={nav.id} href={nav.path}>{nav.name}</a>)
                }
            </ul>
            <button className='bg-amber-600 text-xl font-semibold text-white rounded-lg md:px-3 md:py-2 p-2 hover:bg-green-700'>Sign In</button>
        </nav>
    );
};

export default Nav;