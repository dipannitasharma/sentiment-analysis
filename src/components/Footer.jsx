import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-4 text-center w-full text-base">
            © {new Date().getFullYear()} Sentiment Analysis App. All rights
            reserved.
        </footer>
    );
};

export default Footer;
