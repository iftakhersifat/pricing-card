import { Menu, X } from 'lucide-react';
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

    const links =navigationData.map(nav=><a key={nav.id} href={nav.path}>{nav.name}</a>);
    return (
        <nav className="flex justify-between p-4">
            <div className='flex gap-3' onClick={()=>setOpen(!open)}>
            {open ? <X className='mt-1 lg:hidden'></X> : <Menu className='mt-1 lg:hidden' ></Menu>}
            {/* for medium device menu show left side */}
            <ul className={`lg:hidden absolute font-semibold text-md grid grid-cols-1 duration-1000 ${open ? 'top-12' : '-top-40'}`}>
                {links}
            </ul>
            
            <h1 className='font-bold text-xl'>PricingCard</h1>
            </div>
            <ul className="space-x-6 font-semibold text-md md:hidden lg:flex hidden">
                {
                    links
                }
            </ul>

            
            <button className='bg-amber-600 text-xl font-semibold text-white rounded-lg md:px-3 md:py-2 p-2 hover:bg-green-700'>Sign In</button>
        </nav>
    );
};

export default Nav;