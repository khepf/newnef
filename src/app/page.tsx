import Image from "next/image";
import FoundationInfo from "../../components/foundationInfo";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white px-6 sm:px-12 md:px-24 lg:px-48">
      <Image
        src="/images/neflogo.png"
        alt="Logo"
        width={1000} 
        height={10000} 
        className="" // Optional Tailwind classes for styling
      />
      
      <section className="flex flex-row items-center justify-between bg-white p-8">
        {/* Left Half */}
        <div className="w-1/2 pr-4">
        <h1 className="text-4xl sm:text-4xl font-extrabold text-black mb-6 leading-snug">
          Lance Corporal Nicholas Erdy was honored and proud to serve in the United States Marine Corps.
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">
          He had dreamed of being in the military all his life and wanted nothing more than to be in Iraq where he could help his Marine brothers.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">
          On May 11, 2005, Nick gave the greatest sacrifice of all - his life. During Operation Matador, Nick was on a mission in the Al Anbar Province of Iraq when his Armored Assault Vehicle was hit by an I.E.D. He was only 21 years old on the day that he and five other Marines were killed in that attack.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">
          In Nick's memory, his family has created the Nick Erdy Foundation, a 501(C)(3) organization dedicated to benefit several scholarship funds and not-for-profit groups. Go to the About page to learn more on how your contributions have helped to give back.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">
          It is the goal of this foundation to continue these works for many years to come. Through the generosity of so many wonderful people, both here at home, and all over the United States, we can continue to help others while keeping Nick's memory alive.
        </p>
        </div>

        {/* Right Half */}
        <div className="w-1/2 pl-4 flex justify-center">
          <Image
            src="/images/homeSection1pic.jpg"
            alt="Home Section Image"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </section>
      <section>
        <FoundationInfo /> 
      </section>
   
    </div>
  );
}
