import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navbarItems = [
    {
        id: 1,
        name: "Home",
        route: "/"
    },
    {
        id: 2,
        name: "About",
        route: "/about"
    },
    {
        id: 3,
        name: "Services",
        route: "/services"
    },
    {
        id: 4,
        name: "Blog",
        route: "/blog"
    },
    {
        id: 5,
        name: "Contact",
        route: "/contact"
    }
];

const links = navbarItems.map(route => <li key={route.id}> <a href={route.route}>{route.name}</a></li>)


const Navbar = () => {
    const [on, setOn] = useState(false)
    return (
        <nav className='flex justify-around'>
            <div className='flex gap-10'>
                <span onClick={() => setOn(!on)}>

                    {
                        on ? <X className='lg:hidden'></X> : <Menu className='lg:hidden'></Menu>
                    }
                    {
                    <ul className={ `absolute duration-500 ${on ? 'top-10' : '-top-40'} lg:hidden border border-amber-300 rounded-lg p-3`}>
                        {links}
                    </ul>
                    }
                    
                

                </span>
                
                <h1 className='font-bold text-xl'>myNav</h1>

            </div>

            <ul className='hidden md:flex gap-5 my-2 '>
                {
                    links
                }
            </ul>

            <button>Log in</button>

        </nav>
    );
};

export default Navbar;