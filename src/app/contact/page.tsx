import Image from "next/image";
import FoundationInfo from "../../../components/foundationInfo";

export default function Contact() {
  return (
    <div className="flex flex-col items-center bg-white">
      <section className="flex flex-row items-center justify-between bg-white p-8">
        {/* Left Half */}
        <div className="w-1/2 pr-4">
        <h1 className="text-4xl font-bold text-black mb-4">
          Contact Us
        </h1>
        <p className="text-black mb-4">
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
        <h3>Foundation Information</h3>
        <p className="text-black mb-4">Address: 8281 SR 134</p>
        <p className="text-black mb-4">Lynchburg, OH 45142</p>
        <p className="text-black mb-4">Phone: (937) 579-5200</p>
        <p className='text-black mb-4'>
            <a
            href='https://docs.google.com/forms/d/1SvMZjgUEbKHQXzh2dMh5fm3Df_FhCbMN8jVZ7b1dCTY'
            target='_blank'
            rel='noopener noreferrer'
            >
            Contact Form
            </a>
        </p>
        <p className='text-black mb-4'>501(c)(3) #51-0619676</p>

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
