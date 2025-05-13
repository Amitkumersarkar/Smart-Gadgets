import { Outlet, Link } from "react-router-dom";

const Navbar = () => {

    return (
        <header>
            <div className="w-11/12 mx-auto flex justify-between text-xl font-semibold p-4">
                <Link to='/'>Smart-Gadgets</Link>

                <div className="join">
                    <div>
                        <label className="input validator join-item">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input type="email" placeholder="mail@site.com" required />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>
                    </div>
                    <button className="btn btn-neutral join-item">Join</button>
                </div>
            </div>
            <nav className="text-center border-b-1">
                <ul className="flex justify-center font-semibold gap-10">
                    <li><Link to="/">Home</Link ></li>
                    <li><Link to="/about">About</Link ></li>
                    <li><Link to="/products">Products</Link ></li>
                    <li><Link to="/contact">Contact</Link ></li>
                </ul>
                <Outlet></Outlet>
            </nav>
        </header>
    );
};

export default Navbar;