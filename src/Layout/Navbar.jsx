import { Outlet } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="text-center">
            <ul className="flex justify-center gap-7">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/contact">Contact</a></li>

            </ul>
            <Outlet></Outlet>
        </nav>
    );
};

export default Navbar;