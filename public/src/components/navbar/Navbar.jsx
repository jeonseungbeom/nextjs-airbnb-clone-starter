import React from 'react';
import AirBnbLogo from 'airbnb/svg/airbnb-logo';

const Navbar = () => {
    return (
        <header className="flex flex-col justify-center w-full transition-all duration-300">
            <div className="flex items-center justify-between px-20">
                <div className="flex-grow basis-0">
                    <div className="cursor-pointer w-max">
                        <AirBnbLogo />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
