import React from 'react';
import Image from "next/image";

const FoundationInfo: React.FC = () => {
    return (
        <div className="flex flex-row items-center justify-between bg-white p-8">
            <div className="w-1/2 pr-4">
                <Image
                    src="/images/homeSection2pic.jpg"
                    alt="Home Section Image"
                    width={300}
                    height={300}
                    className="rounded-lg"
                />
            </div>
            <div className="w-1/2 pl-4">
                <h3 className="text-4xl font-bold text-black mb-4">Foundation Information</h3>
                <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">Address: 8281 SR 134</p>
                <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">Lynchburg, OH 45142</p>
                <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">Phone: (937) 579-5200</p>
                <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed"><a href="https://docs.google.com/forms/d/1SvMZjgUEbKHQXzh2dMh5fm3Df_FhCbMN8jVZ7b1dCTY" target="_blank" rel="noopener noreferrer">Contact Form</a></p>
                <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">501(c)(3) #51-0619676</p>
            </div>
        </div>
    );
};

export default FoundationInfo;