import Image from "next/image";
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="flex flex-col items-center bg-white">
      <section className="flex flex-col md:flex-row items-center justify-between bg-white p-8">
        {/* Left Half */}
        <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-6 md:mb-0">
        <h1 className="text-4xl sm:text-4xl font-extrabold text-black mb-6 leading-snug">
          Contact Us
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">
            Feel free to reach out to us via email or phone. We will accept
            donations to the silent auction year round and your monetary
            donations via PayPal are always appreciated.
        </p>
        <button type='button' className=' btn btn-facebook'>
            <a
            href='https://www.facebook.com/The-Nick-Erdy-Foundation-156253388324978/'
            target='_blank'
            rel='noopener noreferrer'
            >
            <i className='fab fa-facebook-square fa-2x'></i>Check us out on
            Facebook
            </a>
        </button>
        <button className="bg-blue-400 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          <span>Check us out on
          Facebook</span>
        </button>
        <h3 className="text-2xl sm:text-2xl font-bold text-black mb-6 leading-snug">Foundation Information</h3>
        <p className="text-lg sm:text-xl text-gray-700 mb-1 leading-relaxed">Address: 8281 SR 134</p>
        <p className="text-lg sm:text-xl text-gray-700 mb-1 leading-relaxed">Lynchburg, OH 45142</p>
        <p className="text-lg sm:text-xl text-gray-700 mb-1 leading-relaxed">Phone: (937) 579-5200</p>
        <p className="text-lg sm:text-xl text-gray-700 mb-1 leading-relaxed">
            <a
            href='https://docs.google.com/forms/d/1SvMZjgUEbKHQXzh2dMh5fm3Df_FhCbMN8jVZ7b1dCTY'
            target='_blank'
            rel='noopener noreferrer'
            >
            Contact Form
            </a>
        </p>
        <p className="text-lg sm:text-xl text-gray-700 mb-1 leading-relaxed">501(c)(3) #51-0619676</p>

        </div>

        {/* Right Half */}
        <div className="w-1/2 pl-4 flex justify-center">
          <Image
            src="/images/homeSection1pic.jpg"
            alt="Home Section Image"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
      </section>   
    </div>
  );
}
