import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer aria-label="Footer" className="bg-gray-900 text-white mt-6">
            <div className="container mx-auto px-4 py-4 text-center">
                <p className="text-sm">© {year} Dastar-e-Khalsa. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
