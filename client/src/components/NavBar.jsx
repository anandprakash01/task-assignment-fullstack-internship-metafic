import React from "react";
import {Link, useLocation} from "react-router-dom";
import {HomeIcon, ChartBarIcon, CogIcon} from "@heroicons/react/24/outline";

const NavBar = () => {
    const location = useLocation();

    const navItems = [
        {name: "Dashboard", path: "/", icon: HomeIcon},
        {name: "Settings", path: "/settings", icon: CogIcon},
        {name: "History", path: "/history", icon: ChartBarIcon},
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-gray-900">
            <div>
                <div className="text-white flex items-center gap-3 justify-center">
                    {navItems.map(({name, path, icon: Icon}) => (
                        <Link
                            key={path}
                            to={path}
                            className={`flex items-center gap-1 p-2 my-3 hover:bg-gray-800 rounded-lg duration-300 ${
                                location.pathname === path ? "bg-gray-800" : ""
                            }`}
                        >
                            <Icon className="w-5 h-5" />
                            <span>{name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
